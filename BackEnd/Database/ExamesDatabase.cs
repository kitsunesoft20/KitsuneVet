namespace kitsunevet.Database
{
    public class ExamesDatabase
    {
        Models.veterinarioContext ctx = new Models.veterinarioContext();

        public BackEnd.Controllers.Response.ExamesResponse agendarExame(BackEnd.Controllers.Request.ExamesRequest request){

            Models.TbExames tbExames = new Models.TbExames();

            tbExames.DsLocal = request.Local;
            tbExames.DsObservacoes = request.Observacoes;
            tbExames.DtExame = request.Data;
            tbExames.IdCliente = request.IdCliente;
            tbExames.IdPet = request.IdPet;
            tbExames.DsExame = request.Exame;

            ctx.Add(tbExames);
            ctx.SaveChanges();

            BackEnd.Controllers.Response.ExamesResponse response = new BackEnd.Controllers.Response.ExamesResponse();

            response.Local = request.Local;
            response.Observacoes = request.Observacoes;
            response.Data = request.Data;
            response.IdCliente = request.IdCliente;
            response.IdPet = request.IdPet;
            response.Exame = request.Exame;

            return response;

        }
    }
}