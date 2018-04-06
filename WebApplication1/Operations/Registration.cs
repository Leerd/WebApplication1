using WebApplication1.Healpers;
using WebApplication1.Models.Requests;
using WebApplication1.Models.Responses;

namespace WebApplication1.Operations
{
    public class Registration
    {
        public RegistrationResponse Execute(RegistrationRequest request)
        {
            var dbHealper = new DBHelper();

            var user = dbHealper.TestRegistrationUserBusy(request);

            if (user == null)
                return dbHealper.UserRegistration(request);

            var response = new RegistrationResponse();

            if (user.user_login == request.Login)
                response.IsLoginBusy = true;

            if (user.user_phone == request.Phone)
                response.IsPhoneBusy = true;

            if (user.user_email == request.Email)
                response.IsEmailBusy = true;

            return response;
        }
    }
}