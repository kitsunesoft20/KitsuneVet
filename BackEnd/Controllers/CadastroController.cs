using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace kitsunevet.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CadastroController : ControllerBase
    {


        [HttpPost]
        public ActionResult<BackEnd.Controllers.Response.CadastroClienteResponse> Salvar(BackEnd.Controllers.Request.CadastroClienteRequest request)
        {
            try
            {
                Business.CadastrarClienteBusiness CadastroBusiness = new Business.CadastrarClienteBusiness();

                BackEnd.Controllers.Response.CadastroClienteResponse response = CadastroBusiness.SalvarCliente(request);
                
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