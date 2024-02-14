using ZaragozaBarbell.Domain.Events;
using Microsoft.Extensions.Logging;

namespace ZaragozaBarbell.Application.ContactMails.EventHandlers;

public class ContactMailCompletedEventHandler : INotificationHandler<ContactMailCompletedEvent>
{
    private readonly ILogger<ContactMailCompletedEventHandler> _logger;

    public ContactMailCompletedEventHandler(ILogger<ContactMailCompletedEventHandler> logger)
    {
        _logger = logger;
    }

    public Task Handle(ContactMailCompletedEvent notification, CancellationToken cancellationToken)
    {
        _logger.LogInformation("ZaragozaBarbell Domain Event: {DomainEvent}", notification.GetType().Name);

        return Task.CompletedTask;
    }
}
