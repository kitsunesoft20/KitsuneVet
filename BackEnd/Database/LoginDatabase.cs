
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

            List<Models.TbCliente> Login = ctx.TbCliente.Include(x => x.IdLoginNavigation)
                .Where(x => x.IdLoginNavigation.DsEmail == Request.email && x.IdLoginNavigation.DsSenha == Request.senha).ToList();

            BackEnd.Controllers.Response.LoginResponse response = new BackEnd.Controllers.Response.LoginResponse();

            response.IdCliente = Login.IdLoginNavigation.idCliente;
            response.IdLogin = Login.idLogin;
            response.email = Login.dsEmail;
            response.NomeCliente = Login.nmCliente;

            return response;

        }

    }
}