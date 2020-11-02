
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace kitsunevet.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CadastroPetController
    {

        [HttpPost]
        public Backend.Controllers.Response.CadastroPetResponse SalvarPet (Backend.Controllers.Request.CadastroPetRequest request)
        {

            Models.veterinarioContext ctx = new Models.veterinarioContext();

            Models.TbPet Pet = new Models.TbPet();

            Pet.

        }

    }
}