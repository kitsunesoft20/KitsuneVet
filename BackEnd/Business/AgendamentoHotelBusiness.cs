
using System;

namespace kitsunevet.Business
{
    public class AgendamentoHotelBusiness
    {
        public BackEnd.Controllers.Response.HotelResponse AgendarHospedagem (BackEnd.Controllers.Request.HotelRequest request){

            Database.HotelDatabase database = new Database.HotelDatabase();

            if (string.IsNullOrEmpty(request.Local))
            throw new Exception("Ocorreu um erro com o Local");

            BackEnd.Controllers.Response.HotelResponse response = database.AgendarHotel(request);

            return response;

        }
    }
}