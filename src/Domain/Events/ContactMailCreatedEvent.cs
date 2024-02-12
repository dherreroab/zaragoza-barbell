namespace zaragoza_barbell.Domain.Events;

public class ContactMailCompletedEvent : BaseEvent
{
    public ContactMailCompletedEvent(Mail item)
    {
        Item = item;
    }

    public Mail Item { get; }
}
