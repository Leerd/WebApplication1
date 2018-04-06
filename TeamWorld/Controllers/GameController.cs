using System.Web.Http;
using TeamWorld.Models.Responses;
using TeamWorld.Operations;

namespace TeamWorld.Controllers
{
    public class GameController : ApiController
    {
        [HttpPost]
        public GetAllGamesResponse GetAllGames()
        {
            return new GetAllGames().Execute();
        }
    }
}