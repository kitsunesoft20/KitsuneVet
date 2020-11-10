
using System;

namespace kitsunevet.Business
{
    public class ExamesBusines
    {
        public BackEnd.Controllers.Response.ExamesResponse AgendarExame (BackEnd.Controllers.Request.ExamesRequest request){

            Database.ExamesDatabase database = new Database.ExamesDatabase();

            if(string.IsNullOrEmpty(request.Exame))
            throw new Exception("Exame Inválido");
            
            if(string.IsNullOrEmpty(request.Local))
            throw new Exception("Local Inválido");

            BackEnd.Controllers.Response.ExamesResponse response = database.agendarExame(request);

            return response;

        }
    }
}