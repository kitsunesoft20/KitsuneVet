
using System;

namespace kitsunevet.Business
{
    public class BanhoTosaBusiness
    {
        public BackEnd.Controllers.Response.BanhoTosaResponse AgendarVacina (BackEnd.Controllers.Request.BanhoTosaRequest request){

            Database.BanhoTosaDatabase database = new Database.BanhoTosaDatabase();

            if(string.IsNullOrEmpty(request.Local))
            throw new Exception("Local Inválido");

            BackEnd.Controllers.Response.BanhoTosaResponse response = database.AgendamentoBanhoTosa(request);

            return response;

        }
    }
}