using System;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models.DataBase
{
    public class User
    {
        [Key]
        public Guid user_id { get; set; }

        public string user_name { get; set; }

        public string user_surname { get; set; }

        public string user_login { get; set; }

        public string user_password { get; set; }

        public string user_email { get; set; }

        public string user_phone { get; set; }

        public bool user_activation { get; set; }


        public Verification Verification { get; set; }
    }
}