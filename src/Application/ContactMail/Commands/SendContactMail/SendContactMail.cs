﻿using ZaragozaBarbell.Application.Common.Interfaces;
using ZaragozaBarbell.Domain.Entities;
using ZaragozaBarbell.Domain.Events;
using System.Net.Mail;
using System.Net;
using ZaragozaBarbell.Application.ContactMail.Settings;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Google.Apis.Http;
using ZaragozaBarbell.Application.ContactMail.ResponseDTO;


namespace ZaragozaBarbell.Application.ContactMail.Commands.SendContactMail;

public record SendContactMailCommand : IRequest<int>
{
    public string? Name { get; init; }
    public string? Email { get; init; }
    public string? Message { get; init; }
    public string? CaptchaResponse { get; init; }
}


public class SendContactMailCommandHandler(IApplicationDbContext context, IOptions<EmailSettings> emailSettings, IOptions<GoogleCaptchaSettings> googleCaptchaSettings) : IRequestHandler<SendContactMailCommand, int>
{
    private readonly IApplicationDbContext _context = context;
    private readonly IOptions<EmailSettings> _emailSettings = emailSettings;
    private readonly IOptions<GoogleCaptchaSettings> _googleCaptchaSettings = googleCaptchaSettings;

    public async Task<int> Handle(SendContactMailCommand request, CancellationToken cancellationToken)
    {
        if (!await IsCaptchaValidAsync(request.CaptchaResponse ?? "")) return -1;
        var entity = new Mail
        {
            Name = request.Name,
            Email = request.Email,
            Message = request.Message
        };

        entity.AddDomainEvent(new ContactMailSendedEvent(entity));
        SendEmail(entity);

        entity.AddDomainEvent(new ContactMailCreatedEvent(entity));
        _context.Mail.Add(entity);

        await _context.SaveChangesAsync(cancellationToken);

        return entity.Id;
    }

    private void SendEmail(Mail mailInfo)
    {
        if (mailInfo == null)
            throw new ArgumentNullException(nameof(mailInfo));

        var smtp = new SmtpClient
        {
            Host = "smtp.gmail.com",
            Port = 587,
            EnableSsl = true,
            DeliveryMethod = SmtpDeliveryMethod.Network,
            UseDefaultCredentials = false,
            Credentials = new NetworkCredential(_emailSettings.Value.Email, _emailSettings.Value.Password)
        };

        using var message = new MailMessage(new MailAddress(_emailSettings.Value.Email!), new MailAddress(_emailSettings.Value.Email!))
        {
            Subject = $"Contacto WEB {mailInfo.Name} | {mailInfo.Email}",
            Body = mailInfo.Message
        };
        using var messageCopy = new MailMessage(new MailAddress(_emailSettings.Value.Email!), new MailAddress(mailInfo.Email ?? string.Empty))
        {
            Subject = $"Copia de contacto WEB. {mailInfo.Name} | {mailInfo.Email}",
            Body = mailInfo.Message
        };
        smtp.Send(message);
        smtp.Send(messageCopy);
    }

    private Task<bool> IsCaptchaValidAsync(string captchaResponse)
    {
        var httpClient = new HttpClient()
        {
            Timeout = TimeSpan.FromSeconds(10)
        };
        var response = httpClient.GetStringAsync($"{_googleCaptchaSettings.Value.ApiUrl}?secret={_googleCaptchaSettings.Value.Secret}&response={captchaResponse}");
        var captchaValidation = JsonConvert.DeserializeObject<CaptchaValidation>(response.Result);
        return captchaValidation != null && captchaValidation.Success ? Task.FromResult(true) : Task.FromResult(false);
    }
}
