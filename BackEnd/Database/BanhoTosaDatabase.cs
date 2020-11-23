
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace kitsunevet.Database
{
    public class BanhoTosaDatabase
    {
        
        Models.veterinarioContext ctx = new Models.veterinarioContext();

        public BackEnd.Controllers.Response.BanhoTosaResponse AgendamentoBanhoTosa (BackEnd.Controllers.Request.BanhoTosaRequest request){

            Models.TbBanhoTosa tbBanhoTosa = new Models.TbBanhoTosa();

            tbBanhoTosa.DsBanho = request.Banho;
            tbBanhoTosa.DsDentes = request.Dentes;
            tbBanhoTosa.DsLocal = request.Local;
            tbBanhoTosa.DsObservacoes = request.Observacoes;
            tbBanhoTosa.DsTosa = request.Tosa;
            tbBanhoTosa.DsUnhas = request.Unhas;
            tbBanhoTosa.DtBanhoTosa = request.Data;
            tbBanhoTosa.IdCliente = request.IdCliente;
            tbBanhoTosa.IdPet = request.IdPet;

            ctx.Add(tbBanhoTosa);
            ctx.SaveChanges();

            BackEnd.Controllers.Response.BanhoTosaResponse response = new BackEnd.Controllers.Response.BanhoTosaResponse();

            response.Banho = request.Banho;
            response.Dentes = request.Dentes;
            response.Local = request.Local;
            response.Observacoes = request.Observacoes;
            response.Tosa = request.Tosa;
            response.Unhas = request.Unhas;
            response.Data = request.Data;
            response.IdCliente = request.IdCliente;
            response.IdPet = request.IdPet;

            return response;

        }

    }
}