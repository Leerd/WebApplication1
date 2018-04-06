using WebApplication1.Models.Base;

namespace WebApplication1.Models.Requests
{
    public class ConfirmAccountRequest : BaseRequest
    {
        public string Code { set; get; }
    }
}