namespace kitsunevet.Database
{
    public class HotelDatabase
    {
        Models.veterinarioContext ctx = new Models.veterinarioContext();

        public BackEnd.Controllers.Response.HotelResponse AgendarHotel (BackEnd.Controllers.Request.HotelRequest request){

            Models.TbHotel tbHotel = new Models.TbHotel();

            tbHotel.IdCliente = request.IdCliente;
            tbHotel.IdPet = request.IdPet;
            tbHotel.DsDelivery = request.Delivery;
            tbHotel.DsLocal = request.Local;
            tbHotel.DtEntrada = request.DataEntrada;
            tbHotel.DtSaida = request.DataSaida;

            ctx.Add(tbHotel);
            ctx.SaveChanges();

            BackEnd.Controllers.Response.HotelResponse response = new BackEnd.Controllers.Response.HotelResponse();

            response.IdCliente = request.IdCliente;
            response.IdPet = request.IdPet;
            response.Delivery = request.Delivery;
            response.Local = request.Local;
            response.DataEntrada = request.DataEntrada;
            response.DataSaida = request.DataSaida;

            return response;

        }
    }
}