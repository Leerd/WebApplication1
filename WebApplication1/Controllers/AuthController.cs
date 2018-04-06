using System.Web.Http;
using WebApplication1.Models.Requests;
using WebApplication1.Models.Responses;
using WebApplication1.Operations;

namespace WebApplication1.Controllers
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