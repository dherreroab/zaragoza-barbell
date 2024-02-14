namespace ZaragozaBarbell.Domain.Events;

public class ContactMailCreatedEvent : BaseEvent
{
    public ContactMailCreatedEvent(Mail item)
    {
        Item = item;
    }

    public Mail Item { get; }
}
