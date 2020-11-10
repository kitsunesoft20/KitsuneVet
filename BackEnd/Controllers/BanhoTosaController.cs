
using Microsoft.AspNetCore.Mvc;

namespace kitsunevet.Controllers
{
    public class BanhoTosaController
    {

        [ApiController]
        [Route("[controller]")]
        public class agendamentobanhoetosaController : ControllerBase
        {
            Models.veterinarioContext ctx = new Models.veterinarioContext();

            [HttpPost]
            public ActionResult<BackEnd.Controllers.Response.BanhoTosaResponse> response (BackEnd.Controllers.Request.BanhoTosaRequest request){

                try
                {
                    Business.BanhoTosaBusiness business = new Business.BanhoTosaBusiness();

                    BackEnd.Controllers.Response.BanhoTosaResponse response = business.AgendarVacina(request);

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
}