using System.Web.Http;
using WebApplication1.Models.Requests;

namespace WebApplication1.Controllers
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