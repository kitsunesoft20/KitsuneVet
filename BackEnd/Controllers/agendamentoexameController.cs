
using Microsoft.AspNetCore.Mvc;

namespace kitsunevet.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class agendamentoexameController : ControllerBase
    {
        Models.veterinarioContext ctx = new Models.veterinarioContext();

        [HttpPost]
        public ActionResult<BackEnd.Controllers.Response.ExamesResponse> AgendarExame ( BackEnd.Controllers.Request.ExamesRequest request){

            try
            {
                Business.ExamesBusines business = new Business.ExamesBusines();

                BackEnd.Controllers.Response.ExamesResponse response = business.AgendarExame(request);

                return response;
            }
            catch (System.Exception ex)
            {
                return new BadRequestObjectResult(
                    new BackEnd.Controllers.Response.ErroResponse(ex, 400)
                );
            }
        
        }
    }

}