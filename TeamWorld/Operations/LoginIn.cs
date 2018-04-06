using System.Web;
using TeamWorld.Healpers;
using TeamWorld.Models.Responses;

namespace TeamWorld.Operations
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