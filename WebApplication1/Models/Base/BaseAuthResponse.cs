﻿namespace WebApplication1.Models.Base
{
    public class BaseAuthResponse
    {
       public bool IsSuccessVerify { get; set; }

        public BaseAuthResponse(bool isSuccessVerify)
        {
            IsSuccessVerify = isSuccessVerify;
        }
    }
}