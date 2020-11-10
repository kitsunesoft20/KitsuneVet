
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace kitsunevet.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CadastroPetController : ControllerBase
    {

        [HttpPost]
        public ActionResult <BackEnd.Controllers.Response.CadastroPetResponse> SalvarPet (BackEnd.Controllers.Request.CadastroPetRequest request)
        {
            try
            {
                Business.CadastroPetBusiness business = new Business.CadastroPetBusiness();

                BackEnd.Controllers.Response.CadastroPetResponse response = business.CadastrarPet(request);

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