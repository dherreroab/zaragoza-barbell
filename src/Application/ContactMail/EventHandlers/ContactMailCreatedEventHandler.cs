using zaragoza_barbell.Domain.Events;
using Microsoft.Extensions.Logging;

namespace zaragoza_barbell.Application.ContactMails.EventHandlers;

public class ContactMailCreatedEventHandler : INotificationHandler<ContactMailCreatedEvent>
{
    private readonly ILogger<ContactMailCreatedEventHandler> _logger;

    public ContactMailCreatedEventHandler(ILogger<ContactMailCreatedEventHandler> logger)
    {
        _logger = logger;
    }

    public Task Handle(ContactMailCreatedEvent notification, CancellationToken cancellationToken)
    {
        _logger.LogInformation("zaragoza_barbell Domain Event: {DomainEvent}", notification.GetType().Name);

        return Task.CompletedTask;
    }
}
