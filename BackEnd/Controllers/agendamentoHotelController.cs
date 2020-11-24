
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace kitsunevet.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class agendamentohospedagemController : ControllerBase
    {
        Models.veterinarioContext ctx = new Models.veterinarioContext();

        [HttpPost]
        public ActionResult<BackEnd.Controllers.Response.HotelResponse> AgendarHotel ( BackEnd.Controllers.Request.HotelRequest request){

            try
            {
                Business.AgendamentoHotelBusiness business = new Business.AgendamentoHotelBusiness();

                BackEnd.Controllers.Response.HotelResponse response = business.AgendarHospedagem(request);

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