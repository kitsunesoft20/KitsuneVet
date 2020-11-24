
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace kitsunevet.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class PerfilController : ControllerBase
    {
        
        [HttpGet]
        public ActionResult<List<Models.TbCliente>> GetPerfil( int id)
        {
            try
            {

                Models.veterinarioContext ctx = new Models.veterinarioContext();

                List<Models.TbCliente> cliente = ctx.TbCliente
                    .Where(x => x.IdCliente == id).ToList();
                
                return cliente;
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
