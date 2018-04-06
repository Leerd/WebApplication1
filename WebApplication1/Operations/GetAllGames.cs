using WebApplication1.Healpers;
using WebApplication1.Models.Responses;

namespace WebApplication1.Operations
{
    public class GetAllGames
    {
        public GetAllGamesResponse Execute()
        {
            new DBHelper().GetGames();

            return new GetAllGamesResponse();
        }
    }
}