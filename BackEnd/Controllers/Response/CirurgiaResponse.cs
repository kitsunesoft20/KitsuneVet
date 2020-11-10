
using System;

namespace BackEnd.Controllers.Response
{
    public class CirurgiaResponse
    {
        public int IdCirurgia { get; set; }

        public int? IdPet { get; set; }

        public int? IdCliente { get; set; }

        public string Cirurgia { get; set; }

        public DateTime? Data { get; set; }

        public string Local { get; set; }

        public string Observacoes { get; set; }
    }
}