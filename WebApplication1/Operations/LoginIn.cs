using System.Web;
using WebApplication1.Healpers;
using WebApplication1.Models.Responses;

namespace WebApplication1.Operations
{
    public class LoginIn
    {
        public AuthResponse Execute(string login, string password)
        {
            var user = new DBHelper().UserAuth(login);

            if (user.Password != password)
                return new AuthResponse(false);

            return new AuthResponse(true, new TokenHelper().GenerateToken(user.UserId));
        }
    }
}