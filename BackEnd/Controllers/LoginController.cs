
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
        
        [HttpGet]
        public List<Models.TbCliente> Login (BackEnd.Controllers.Request.LoginRequest request){

            Database.LoginDatabase logando = new Database.LoginDatabase();

            List<Models.TbCliente> response = logando.logar(request);

            return response;

        }

    }
}