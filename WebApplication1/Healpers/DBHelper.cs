using System;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using WebApplication1.Models;
using WebApplication1.Models.DataBase;
using WebApplication1.Models.Requests;

namespace WebApplication1.Healpers
{
    public class DBHelper
    {
        class UserContext : DbContext
        {
            public UserContext() : base("DefaultConnection") { }

            public DbSet<User> Users { get; set; }

            public DbSet<Verification> Verification { get; set; }

            public DbSet<Game> Games { get; set; }
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

        public string UserRegistration(RegistrationRequest request)
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

                var verificatioCode = new GenerateHelper().ConfirmCode(5);

                var verification = new Verification
                {
                    user_id = user.user_id,
                    verification_key = verificatioCode,
                    verification_create_data = DateTime.Now
                };

                db.Verification.Add(verification);
                db.SaveChanges();

                HttpContext.Current.Session["UserId"] = user.user_id;

                return verificatioCode;
            }
        }

        public User TestRegistrationUserBusy(RegistrationRequest request)
        {
            using (UserContext db = new UserContext())
                return db.Users.Where(u => u.user_login == request.Login || u.user_email == request.Email || u.user_phone == request.Phone).ToList().FirstOrDefault();
        }

        public User GetUserForVerification(Guid userId)
        {
            using (UserContext db = new UserContext())
            {
                return db.Users.Join(db.Verification, u => u.user_id, v => v.user_id, (u, v) => new
                {
                    verification = v,
                    userId = u.user_id,
                    userActivation = u.user_activation
                }).AsEnumerable().Select(an => new User
                {
                    user_id = an.userId,
                    user_activation = an.userActivation,
                    Verification = an.verification
                }).ToList().FirstOrDefault();
            }
        }

        public void UpdateAccountActiveStatus(User user)
        {
            using (UserContext db = new UserContext())
            {
                user.user_activation = true;
                db.Users.Attach(user);
                db.Entry(user).Property(p => p.user_activation).IsModified = true;
                db.SaveChanges();
            }

            using (UserContext db = new UserContext())
            {
                var verification = db.Verification.Where(v => v.user_id == user.user_id).FirstOrDefault();
                db.Verification.Remove(verification);
                db.SaveChanges();
            }
        }

        public void GetGames()
        {
            using (UserContext db = new UserContext())
            {
                var games = db.Games.ToList();
            }
        }
    }
}