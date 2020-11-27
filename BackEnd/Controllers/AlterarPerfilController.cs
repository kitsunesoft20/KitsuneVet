
using Microsoft.AspNetCore.Mvc;

namespace kitsunevet.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class AlterarPerfilController : ControllerBase
    {
        Models.veterinarioContext ctx = new Models.veterinarioContext();

        [HttpPut]
        public ActionResult<Models.TbCliente> AlterarPerfil ( BackEnd.Controllers.Request.AlterarPerfilRequest request)
        {
            try
            {
                Business.AlterarPerfilBusiness business = new Business.AlterarPerfilBusiness();

                Models.TbCliente response = business.AlterarPerfil( request);

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