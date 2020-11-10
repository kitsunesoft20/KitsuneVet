
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace kitsunevet.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CadastroPetController : ControllerBase
    {

        [HttpPost]
        public BackEnd.Controllers.Response.CadastroPetResponse SalvarPet (BackEnd.Controllers.Request.CadastroPetRequest request)
        {

            Database.CadastroPetDatabase database = new Database.CadastroPetDatabase();

            BackEnd.Controllers.Response.CadastroPetResponse response = database.cadastrarPet(request);

            return response;            
        }

    }
}