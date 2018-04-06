using System.Web.Http;
using TeamWorld.Models.Requests;
using TeamWorld.Models.Responses;
using TeamWorld.Operations;

namespace TeamWorld.Controllers
{
    public class AuthController : ApiController
    {
        [HttpPost]
        public AuthResponse LoginIn(AuthRequest request)
        {
            return new LoginIn().Execute(request.Login, request.Passpord);
        }

        [HttpPost]
        public RegistrationResponse Registration(RegistrationRequest request)
        {
            return new Registration().Execute(request);
        }

        [HttpPost]
        public ConfirmAccountResponse ConfirmAccount(ConfirmAccountRequest request)
        {
            return new ConfirmAccount().Execute(request.Code);
        }
    }
}