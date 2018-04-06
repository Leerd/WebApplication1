using TeamWorld.Models.Base;

namespace TeamWorld.Models.Requests
{
    public class AuthRequest: BaseRequest
    {
        public string Login { set; get; }

        public string Passpord { set; get; }
    }
}