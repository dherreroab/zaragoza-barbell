using zaragoza_barbell.Application.ContactMail.Commands.SendContactMail;

namespace zaragoza_barbell.Application.ContactMail.Commands.SendContactMail;

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
