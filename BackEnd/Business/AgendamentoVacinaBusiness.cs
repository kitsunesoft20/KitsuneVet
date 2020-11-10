
using System;

namespace kitsunevet.Business
{
    public class AgendamentoVacinaBusiness
    {
        public BackEnd.Controllers.Response.VacinacaoResponse AgendarVacina (BackEnd.Controllers.Request.VacinacaoRequest request){

            Database.AgendamentoVacinaDatabase database = new Database.AgendamentoVacinaDatabase();

            if (string.IsNullOrEmpty(request.Local))
            throw new Exception("Ocorreu um erro com o Local");

            if (string.IsNullOrEmpty(request.Vacina))
            throw new Exception("Ocorreu um erro com a Vacina");

            BackEnd.Controllers.Response.VacinacaoResponse response = database.AgendarVacina(request);

            return response;
        }
    }
}