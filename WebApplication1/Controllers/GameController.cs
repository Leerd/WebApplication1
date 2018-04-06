using System.Web.Http;
using WebApplication1.Models.Responses;
using WebApplication1.Operations;

namespace WebApplication1.Controllers
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