
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace kitsunevet.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        
        [HttpPost]
        public BackEnd.Controllers.Response.LoginResponse Login (BackEnd.Controllers.Request.LoginRequest request){

            Database.LoginDatabase logando = new Database.LoginDatabase();

            BackEnd.Controllers.Response.LoginResponse response = logando.logar(request);

            return response;

        }

    }
}