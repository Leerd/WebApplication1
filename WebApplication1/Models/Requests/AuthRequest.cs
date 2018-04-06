using WebApplication1.Models.Base;

namespace WebApplication1.Models.Requests
{
    public class AuthRequest: BaseRequest
    {
        public string Login { set; get; }

        public string Passpord { set; get; }
    }
}