using ZaragozaBarbell.Application.ContactMail.Commands.SendContactMail;

namespace ZaragozaBarbell.Web.Endpoints;

public class ContactMail : EndpointGroupBase
{
    public override void Map(WebApplication app)
    {
        app.MapGroup(this)
            .MapPost(SendContactMail);
    }

    public async Task<int> SendContactMail(ISender sender, [AsParameters] SendContactMailCommand command)
    {
        return await sender.Send(command);
    }
}
