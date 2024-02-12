
using Newtonsoft.Json;

namespace zaragoza_barbell.Application.ContactMail.ResponseDTO;
public class CaptchaValidation
{
    [JsonProperty("success")]
    public bool Success { get; set; }
}