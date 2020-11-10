
using System;

namespace BackEnd.Controllers.Request
{
    public class CirurgiaRequest
    {

        public int? IdPet { get; set; }

        public int? IdCliente { get; set; }

        public string Cirurgia { get; set; }

        public DateTime? Data { get; set; }

        public string Local { get; set; }

        public string Observacoes { get; set; }
    }
}