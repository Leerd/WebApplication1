using System;
using System.ComponentModel.DataAnnotations;

namespace TeamWorld.Models.DataBase
{
    public class Game
    {
        [Key]
        public Guid game_id { get; set; }

        public string game_name { get; set; }

        public string game_rating { get; set; }
    }
}