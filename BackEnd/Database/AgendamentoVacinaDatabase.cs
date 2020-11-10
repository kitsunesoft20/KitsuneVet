namespace kitsunevet.Database
{
    public class AgendamentoVacinaDatabase
    {
        Models.veterinarioContext ctx = new Models.veterinarioContext();

        public BackEnd.Controllers.Response.VacinacaoResponse AgendarVacina(BackEnd.Controllers.Request.VacinacaoRequest request){

            Models.TbVacinacao tbVacina = new Models.TbVacinacao();

            tbVacina.IdCliente = request.IdCliente;
            tbVacina.IdPet = request.IdPet;
            tbVacina.DsLocal = request.Local;
            tbVacina.DsObservacoes = request.Observacoes;
            tbVacina.DsVacina = request.Vacina;
            tbVacina.DtVacinacao = request.Data;
            
            ctx.TbVacinacao.Add(tbVacina);
            ctx.SaveChanges();

            BackEnd.Controllers.Response.VacinacaoResponse response = new BackEnd.Controllers.Response.VacinacaoResponse();

            response.IdCliente = request.IdCliente;
            response.IdPet = request.IdPet;
            response.Local = request.Local;
            response.Observacoes = request.Observacoes;
            response.Vacina = request.Vacina;
            response.Data = request.Data;

            return response;

        }

    }
}