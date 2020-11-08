
using System;

namespace BackEnd.Controllers.Request
{
    public class HotelRequest
    {
        public int? IdCliente { get; set; }

        public int? IdPet { get; set; }

        public bool? Delivery { get; set; }

        public DateTime? DataEntrada { get; set; }

        public DateTime? DataSaida { get; set; }

        public string Local { get; set; }
        
        public string Observacoes { get; set; }
    }
}