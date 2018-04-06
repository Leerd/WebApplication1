using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication1.Models.DataBase
{
    public class Verification
    {
        [Key]
        [ForeignKey("UserOf")]
        public Guid user_id { get; set; }

        public string verification_key { get; set; }

        public DateTime verification_create_data { get; set; }


        public User UserOf { get; set; }
    }
}