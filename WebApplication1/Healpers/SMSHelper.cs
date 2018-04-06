using System.Net;
using System.Web.Configuration;

namespace WebApplication1.Healpers
{
    public class SMSHelper
    {
        public void SendVerificationSMS(string data)
        {
            var link = WebConfigurationManager.AppSettings["SMSVerification"];
            var constData = link + "?user=art-borisov@ya.ru&password=7iTRozSQoJWlOUn6HLrqU4GQ30E&from=TeamWorld&";

            using (var webClient = new WebClient())
            {
              //  var response = webClient.DownloadString(constData + data);
            }
        }
    }
}