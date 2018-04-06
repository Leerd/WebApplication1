using TeamWorld.Models.Base;

namespace TeamWorld.Models.Responses
{
    public class ConfirmAccountResponse : BaseResponse
    {
        public bool IsTimeEnd { get; set; }

        public bool IsErrorCode { get; set; }

        public ConfirmAccountResponse() { }

        public ConfirmAccountResponse(bool isTimeEnd, bool isErrorCode)
        {
            IsTimeEnd = isTimeEnd;
            IsErrorCode = isErrorCode;
        }
    }
}