using System;
using System.Web;
using System.Web.Configuration;
using WebApplication1.Healpers;
using WebApplication1.Models.Responses;

namespace WebApplication1.Operations
{
    public class ConfirmAccount
    {
        public ConfirmAccountResponse Execute(string code)
        {
            var userId = Guid.Parse(HttpContext.Current.Session["UserId"].ToString());
            var dbHelper = new DBHelper();
            var user = dbHelper.GetUserForVerification(userId);

            var response = new ConfirmAccountResponse();

            if ((DateTime.Now - user.Verification.verification_create_data).TotalSeconds > Int64.Parse(WebConfigurationManager.AppSettings["KeyRegistratioLive"]))
            {
                response.IsTimeEnd = true;
                return response;
            }

            if (user.Verification.verification_key != code)
            {
                response.IsErrorCode = true;
                return response;
            }

            dbHelper.UpdateAccountActiveStatus(user);
            HttpContext.Current.Session.Clear();

            response.IsSuccess = true;

            return response;
        }
    }
}