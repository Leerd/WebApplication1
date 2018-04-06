using Microsoft.ApplicationInsights.Extensibility.Implementation;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Linq;
using System.Web.Configuration;
using WebApplication1.Models;
using WebApplication1.Models.DataBase;
using WebApplication1.Models.Requests;
using WebApplication1.Models.Responses;

namespace WebApplication1.Healpers
{
    public class DBHelper
    {
        class UserContext : DbContext
        {
            public UserContext() : base("DefaultConnection") { }

            public DbSet<User> Users { get; set; }

            public DbSet<Verification> Verification { get; set; }
        }

        public UserData UserAuth(string login)
        {
            var conectionStr = WebConfigurationManager.AppSettings["ConnectionString"];
            SqlConnection conn = new SqlConnection(conectionStr);
            conn.Open();
            string sqlExpression = $"SELECT * FROM Users WHERE user_phone = '{login}'";
            SqlCommand comm = new SqlCommand(sqlExpression, conn);
            SqlDataReader reader = comm.ExecuteReader();

            var user = new UserData();

            while (reader.Read())
            {
                var userId = (Guid)reader["user_id"];
                user.UserId = new GenerateHelper().Encrypt(userId.ToString());
                user.Name = (string)reader["user_name"];
                user.Password = (string)reader["user_password"];
            }
            reader.Close();
            conn.Close();

            return user;
        }

        public RegistrationResponse UserRegistration(RegistrationRequest request)
        {
            using (UserContext db = new UserContext())
            {
                var user = new User
                {
                    user_id = Guid.NewGuid(),
                    user_name = request.Name,
                    user_surname = request.Name,
                    user_login = request.Login,
                    user_password = request.Passpord,
                    user_email = request.Email,
                    user_phone = request.Phone
                };

                db.Users.Add(user);
                db.SaveChanges();

                var verification = new Verification
                {
                    user_id = user.user_id,
                    verification_key = new GenerateHelper().ConfirmCode(5),
                    verification_create_data = DateTime.Now
                };

                db.Verification.Add(verification);
                db.SaveChanges();

                return new RegistrationResponse(true);
            }
        }

        public User TestRegistrationUserBusy(RegistrationRequest request)
        {
            using (UserContext db = new UserContext())
                return db.Users.Where(u => u.user_login == request.Login || u.user_email == request.Email || u.user_phone == request.Phone).ToList().FirstOrDefault();
        }
    }
}