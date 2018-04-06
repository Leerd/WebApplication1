using TeamWorld.Healpers;
using TeamWorld.Models.Responses;

namespace TeamWorld.Operations
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