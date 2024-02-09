using zaragoza_barbell.Application.Common.Interfaces;
using zaragoza_barbell.Domain.Entities;
using zaragoza_barbell.Domain.Events;
using System.Net.Mail;
using System.Net;

namespace zaragoza_barbell.Application.ContactMail.Commands.SendContactMail;

public record SendContactMailCommand : IRequest<int>
{
    public string? Name { get; init; }
    public string? Email { get; init; }
    public string? Message { get; init; }
}

public class SendContactMailCommandHandler(IApplicationDbContext context) : IRequestHandler<SendContactMailCommand, int>
{
    private readonly IApplicationDbContext _context = context;

    public async Task<int> Handle(SendContactMailCommand request, CancellationToken cancellationToken)
    {
        var entity = new Mail
        {
            Name = request.Name,
            Email = request.Email,
            Message = request.Message
        };


        entity.AddDomainEvent(new ContactMailSendedEvent(entity));
        SendEmail(entity);

        entity.AddDomainEvent(new ContactMailCreatedEvent(entity));
        _context.ContactMail.Add(entity);

        await _context.SaveChangesAsync(cancellationToken);

        return entity.Id;
    }

    private void SendEmail(Mail mailInfo)
    {
        if (mailInfo == null)
            throw new ArgumentNullException(nameof(mailInfo));

        var fromAddress = new MailAddress(mailInfo.Email ?? string.Empty);
        var toAddress = new MailAddress("info@zaragozabarbell.com");
        const string fromPassword = "tuContraseña";

        var smtp = new SmtpClient
        {
            Host = "smtp.example.com",
            Port = 587,
            EnableSsl = true,
            DeliveryMethod = SmtpDeliveryMethod.Network,
            UseDefaultCredentials = false,
            Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
        };

        using (var message = new MailMessage(fromAddress, toAddress)
        {
            Subject = "Contacto desde la web de " + mailInfo.Name,
            Body = mailInfo.Message
        })
        {
            smtp.Send(message);
        }
    }
}
