namespace TeamWorld.Models.Requests
{
    public class RegistrationRequest
    {
        public string Login { set; get; }

        public string Name { set; get; }

        public string SurName { set; get; }

        public string Email { set; get; }

        public string Passpord { set; get; }

        public string Phone { set; get; }
    }
}