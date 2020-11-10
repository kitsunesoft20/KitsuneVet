
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

            Models.TbPet Pets = ctx.TbPet.Include(x => x.IdClienteNavigation)
                .FirstOrDefault(x => x.IdClienteNavigation.IdCliente == request.IdCliente);

            Models.TbVacinacao tbVacina = new Models.TbVacinacao();

            tbVacina.IdCliente = request.IdCliente;
            tbVacina.IdPet = request.IdPet;
            tbVacina.DsLocal = request.Local;
            tbVacina.DsObservacoes = request.Observacoes;
            tbVacina.DsVacina = request.Vacina;
            tbVacina.DtVacinacao = request.Data;
            
            ctx.TbVacinacao.Add(tbVacina);
            ctx.SaveChanges();

            BackEnd.Controllers.Response.VacinacaoResponse response = new BackEnd.Controllers.Response.VacinacaoResponse();

            response.IdCliente = request.IdCliente;
            response.IdPet = request.IdPet;
            response.Local = request.Local;
            response.Observacoes = request.Observacoes;
            response.Vacina = request.Vacina;
            response.Data = request.Data;

            return response;

        }

    }

}