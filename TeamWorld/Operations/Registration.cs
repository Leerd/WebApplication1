using TeamWorld.Healpers;
using TeamWorld.Models.Requests;
using TeamWorld.Models.Responses;

namespace TeamWorld.Operations
{
    public class Registration
    {
        public RegistrationResponse Execute(RegistrationRequest request)
        {
            var dbHealper = new DBHelper();

            var user = dbHealper.TestRegistrationUserBusy(request);

            if (user == null)
            {
                var verificatioCode = dbHealper.UserRegistration(request);
                var data = $"to={request.Phone}&text={verificatioCode}";

                new SMSHelper().SendVerificationSMS(data);

                return new RegistrationResponse(true);
            }

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