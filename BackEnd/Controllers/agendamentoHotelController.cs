
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace kitsunevet.Controllers
{
    public class agendamentoHotelController
    {

        [ApiController]
        [Route("[controller]")]
        public class agendamentohospedagemController : ControllerBase
        {
            Models.veterinarioContext ctx = new Models.veterinarioContext();

        [HttpPost]
        public BackEnd.Controllers.Response.HotelResponse AgendarHotel ( BackEnd.Controllers.Request.HotelRequest request){

            Business.AgendamentoHotelBusiness business = new Business.AgendamentoHotelBusiness();

            BackEnd.Controllers.Response.HotelResponse response = business.AgendarHospedagem(request);

            return response;

        }
            
        }
    }
}