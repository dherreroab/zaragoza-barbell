namespace ZaragozaBarbell.Domain.Entities;

public class Mail : BaseAuditableEntity
{
    public string? Name { get; set; }
    public string? Email { get; set; }
    public string? Message { get; set; }
}
