using System.Web.Http;
using TeamWorld.Models.Requests;

namespace TeamWorld.Controllers
{
    public class UserController: BaseController
    {
        [HttpPost]
        public void GetUserData(GetUserDataRequest request)
        {
            //if (!isUser(request.Token))
            //    throw new ApplicationException();
        }
    }
}