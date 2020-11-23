
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace kitsunevet.Database
{
    public class LoginDatabase
    {
        
        public BackEnd.Controllers.Response.LoginResponse logar (BackEnd.Controllers.Request.LoginRequest Request){

            Models.veterinarioContext ctx = new Models.veterinarioContext();

            Models.TbCliente Login = ctx.TbCliente.Include(x => x.IdLoginNavigation)
                .FirstOrDefault(x => x.IdLoginNavigation.DsEmail == Request.email && x.IdLoginNavigation.DsSenha == Request.senha);

            List<Models.TbPet> pets = ctx.TbPet.Where(x => x.IdClienteNavigation.IdCliente == Login.IdCliente ).ToList();

            BackEnd.Controllers.Response.LoginResponse response = new BackEnd.Controllers.Response.LoginResponse();

            response.IdCliente = Login.IdCliente;
            response.IdLogin = Login.IdLogin;
            response.email = Login.DsEmail;
            response.NomeCliente = Login.NmCliente;
            response.tbPet = pets.Select(x => new BackEnd.Controllers.Response.PetsResponse {
              idPet = x.IdPet,
              nomePet = x.NmPet
            }).ToList();

            return response;

        }

    }
}