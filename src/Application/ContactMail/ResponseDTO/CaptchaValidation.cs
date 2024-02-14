
using Newtonsoft.Json;

namespace ZaragozaBarbell.Application.ContactMail.ResponseDTO;
public class CaptchaValidation
{
    [JsonProperty("success")]
    public bool Success { get; set; }
}