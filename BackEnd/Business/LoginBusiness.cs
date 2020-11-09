
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace kitsunevet.Business
{
    public class LoginBusiness
    {
        
        public BackEnd.Controllers.Response.LoginResponse login (BackEnd.Controllers.Request.LoginRequest request){

            Database.LoginDatabase logando = new Database.LoginDatabase();

            if(string.IsNullOrEmpty(request.email))
            throw new Exception("Email Inválido");

            if(string.IsNullOrEmpty(request.senha))
            throw new Exception("Senha Inválida");

            BackEnd.Controllers.Response.LoginResponse response = logando.logar(request);

            return response;

        }

    }
}