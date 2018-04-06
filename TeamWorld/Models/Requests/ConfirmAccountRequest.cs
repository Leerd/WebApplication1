using TeamWorld.Models.Base;

namespace TeamWorld.Models.Requests
{
    public class ConfirmAccountRequest : BaseRequest
    {
        public string Code { set; get; }
    }
}