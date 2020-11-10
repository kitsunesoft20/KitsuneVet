
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace kitsunevet.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class agendamentovacinaController : ControllerBase
    {
        Models.veterinarioContext ctx = new Models.veterinarioContext();

        [HttpPost]
        public BackEnd.Controllers.Response.VacinacaoResponse agendarVacina (BackEnd.Controllers.Request.VacinacaoRequest request){

            Business.AgendamentoVacinaBusiness business = new Business.AgendamentoVacinaBusiness();

            BackEnd.Controllers.Response.VacinacaoResponse response = business.AgendarVacina(request);

            return response;

        }

    }

}