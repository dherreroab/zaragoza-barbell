using zaragoza_barbell.Application.ContactMail.Commands.SendContactMail;

namespace zaragoza_barbell.Web.Endpoints;

public class ContactMail : EndpointGroupBase
{
    public override void Map(WebApplication app)
    {
        app.MapGroup(this)
            .RequireAuthorization()
            .MapPost(SendContactMail);
    }

    public async Task<int> SendContactMail(ISender sender, SendContactMailCommand command)
    {
        return await sender.Send(command);
    }
}
