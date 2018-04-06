using System.Security.Principal;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using TeamWorld.Healpers;

namespace TeamWorld.Controllers
{
    public class BaseController : ApiController
    {
        public Task<IPrincipal> UserData;

        public BaseController()
        {
            UserData = new TokenHelper().AuthenticateJwtToken(HttpContext.Current.Request.Headers.GetValues("x-auth-token")[0]);
        }

        private string getUser()
        {
            return new GenerateHelper().Decrypt(UserData.Result.Identity.Name);
        }
    }
}