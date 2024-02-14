using ZaragozaBarbell.Application.ContactMail.Commands.SendContactMail;

namespace ZaragozaBarbell.Application.ContactMail.Commands.SendContactMail;

public class SendContactMailValidator : AbstractValidator<SendContactMailCommand>
{
    public SendContactMailValidator()
    {
        RuleFor(v => v.Name)
            .NotEmpty();
        RuleFor(v => v.Email)
            .NotEmpty();
        RuleFor(v => v.Message)
            .MaximumLength(200)
            .NotEmpty();
    }
}
