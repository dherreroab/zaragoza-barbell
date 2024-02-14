using ZaragozaBarbell.Domain.Events;
using Microsoft.Extensions.Logging;

namespace ZaragozaBarbell.Application.ContactMails.EventHandlers;

public class ContactMailCreatedEventHandler : INotificationHandler<ContactMailCreatedEvent>
{
    private readonly ILogger<ContactMailCreatedEventHandler> _logger;

    public ContactMailCreatedEventHandler(ILogger<ContactMailCreatedEventHandler> logger)
    {
        _logger = logger;
    }

    public Task Handle(ContactMailCreatedEvent notification, CancellationToken cancellationToken)
    {
        _logger.LogInformation("ZaragozaBarbell Domain Event: {DomainEvent}", notification.GetType().Name);

        return Task.CompletedTask;
    }
}
