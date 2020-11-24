
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace kitsunevet.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class agendamentocirurgiaController : ControllerBase{

        Models.veterinarioContext ctx = new Models.veterinarioContext();

        [HttpPost]
        public ActionResult <BackEnd.Controllers.Response.CirurgiaResponse> Cirurgia (BackEnd.Controllers.Request.CirurgiaRequest request){

            try
            {
                Business.CirurgiaBusiness business = new Business.CirurgiaBusiness();

                BackEnd.Controllers.Response.CirurgiaResponse response = business.AgendamentoCirurgia(request);

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