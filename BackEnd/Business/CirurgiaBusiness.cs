
using System;

namespace kitsunevet.Business
{
    public class CirurgiaBusiness
    {
        
        public BackEnd.Controllers.Response.CirurgiaResponse AgendamentoCirurgia (BackEnd.Controllers.Request.CirurgiaRequest request){

            Database.CirurgiaDatabase database = new Database.CirurgiaDatabase();

            if(string.IsNullOrEmpty(request.Local))
            throw new Exception("Local Inválido");

            if(string.IsNullOrEmpty(request.Cirurgia))
            throw new Exception("Cirurgia Inválida");

            BackEnd.Controllers.Response.CirurgiaResponse response = database.AgendarCirurgia(request);

            return response;
            
        }

    }
}