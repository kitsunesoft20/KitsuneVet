
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

            BackEnd.Controllers.Response.LoginResponse response = new BackEnd.Controllers.Response.LoginResponse();

            response.IdCliente = Login.IdCliente;
            response.IdLogin = Login.IdLogin;
            response.email = Login.DsEmail;
            response.NomeCliente = Login.NmCliente;

            return response;

        }

    }
}