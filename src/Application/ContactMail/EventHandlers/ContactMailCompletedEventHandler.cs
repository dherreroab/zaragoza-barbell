using zaragoza_barbell.Domain.Events;
using Microsoft.Extensions.Logging;

namespace zaragoza_barbell.Application.ContactMails.EventHandlers;

public class ContactMailCompletedEventHandler : INotificationHandler<ContactMailCompletedEvent>
{
    private readonly ILogger<ContactMailCompletedEventHandler> _logger;

    public ContactMailCompletedEventHandler(ILogger<ContactMailCompletedEventHandler> logger)
    {
        _logger = logger;
    }

    public Task Handle(ContactMailCompletedEvent notification, CancellationToken cancellationToken)
    {
        _logger.LogInformation("zaragoza_barbell Domain Event: {DomainEvent}", notification.GetType().Name);

        return Task.CompletedTask;
    }
}
