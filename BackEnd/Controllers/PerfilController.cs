
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
        
        [HttpPost]
        public ActionResult<BackEnd.Controllers.Response.PerfilResponse> GetPerfil(BackEnd.Controllers.Request.PerfilRequest request)
        {

            Database.PerfilDatabase database = new Database.PerfilDatabase();

            try
            {
                BackEnd.Controllers.Response.PerfilResponse response = database.GetPerfil(request);

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
