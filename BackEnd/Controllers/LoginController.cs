
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
        public ActionResult<BackEnd.Controllers.Response.LoginResponse> Login (BackEnd.Controllers.Request.LoginRequest request){

            Business.LoginBusiness Business = new Business.LoginBusiness();

            try
            {
                BackEnd.Controllers.Response.LoginResponse response = Business.login(request);
                return response;
            }
            catch (System.Exception ex)
            {
                return new BadRequestObjectResult(
                    new BackEnd.Controllers.Response.ErroResponse(ex, 400)
                );
            }

        }

    }
}