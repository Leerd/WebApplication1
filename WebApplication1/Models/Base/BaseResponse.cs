namespace WebApplication1.Models.Base
{
    public class BaseResponse
    {
        public bool IsSuccess { get; set; }

        public BaseResponse() { }

        public BaseResponse(bool isSuccess)
        {
            IsSuccess = isSuccess;
        }
    }
}