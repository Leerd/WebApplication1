using TeamWorld.Models.Base;

namespace TeamWorld.Models.Responses
{
    public class AuthResponse: BaseResponse
    {
        public bool IsSucces { set; get; }
        public string Token { set; get; }

        public AuthResponse(bool isSucces, string token = null)
        {
            IsSucces = isSucces;
            Token = token;
        }
    }
}