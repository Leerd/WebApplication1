using System;

namespace TeamWorld.Models
{
    public class UserModel
    {
        public Guid UserId { set; get; }

        public string Name { set; get; }

        public string Password { set; get; }

        public string Activation { set; get; }

        public VerificationModel Verification { set; get; }
    }
}