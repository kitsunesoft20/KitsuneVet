
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace kitsunevet.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class VacinacaoController : ControllerBase
    {
        Models.veterinarioContext ctx = new Models.veterinarioContext();

        [HttpPost]
        public BackEnd.Controllers.Response.VacinacaoResponse agendarVacina (BackEnd.Controllers.Request.VacinacaoRequest request){

            Models.TbVacinacao tbVacina = new Models.TbVacinacao();
            

            List<Models.tbPet> Pet = ctx.tbPet.Include(x => x.IdCliente)
                .Where().ToList();

            BackEnd.Controllers.Response.LoginResponse login = new BackEnd.Controllers.Response.LoginResponse();

            tbVacina.IdCliente = login.IdCliente;
            tbVacina.IdPet = login;
            tbVacina.DsLocal = request.Local;
            tbVacina.DsObservacoes = request.Observacoes;
            tbVacina.DsVacina = request.Vacina;
            tbVacina.DtVacinacao = request.Data;
            
            ctx.TbLogin.Add(tbVacina);
            ctx.SaveChanges();
            

        }

    }

}