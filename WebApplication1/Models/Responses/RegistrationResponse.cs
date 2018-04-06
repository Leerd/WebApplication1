using WebApplication1.Models.Base;

namespace WebApplication1.Models.Responses
{
    public class RegistrationResponse : BaseResponse
    {
        public bool IsLoginBusy { get; set; }

        public bool IsPhoneBusy { get; set; }

        public bool IsEmailBusy { get; set; }

        public RegistrationResponse(bool isSuccess) : base(isSuccess) { }

        public RegistrationResponse() : base() { }

    }
}