namespace zaragoza_barbell.Domain.Events;

public class ContactMailSendedEvent : BaseEvent
{
    public ContactMailSendedEvent(Mail item)
    {
        Item = item;
    }

    public Mail Item { get; }
}
