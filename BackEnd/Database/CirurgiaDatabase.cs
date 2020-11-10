namespace kitsunevet.Database
{
    public class CirurgiaDatabase
    {
        Models.veterinarioContext ctx = new Models.veterinarioContext();

        public BackEnd.Controllers.Response.CirurgiaResponse AgendarCirurgia(BackEnd.Controllers.Request.CirurgiaRequest request){

            Models.TbCirurgia tbCirurgia = new Models.TbCirurgia();

            tbCirurgia.DsLocal = request.Local;
            tbCirurgia.DsObservacoes = request.Observacoes;
            tbCirurgia.DtCirurgia = request.Data;
            tbCirurgia.IdCliente = request.IdCliente;
            tbCirurgia.IdPet = request.IdPet;
            tbCirurgia.DsCirurgia = request.Cirurgia;

            ctx.Add(tbCirurgia);
            ctx.SaveChanges();

            BackEnd.Controllers.Response.CirurgiaResponse response = new BackEnd.Controllers.Response.CirurgiaResponse();

            response.Local = request.Local;
            response.Observacoes = request.Observacoes;
            response.Data = request.Data;
            response.IdCliente = request.IdCliente;
            response.IdPet = request.IdPet;
            response.Cirurgia = request.Cirurgia;

            return response;

        }

    }
}