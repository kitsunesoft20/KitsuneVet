
using System;

namespace BackEnd.Controllers.Response
{
    public class ExamesResponse
    {
        public int IdExames { get; set; }

        public int? IdCliente { get; set; }

        public int? IdPet { get; set; }

        public string Exame { get; set; }

        public DateTime Data { get; set; }

        public string Local { get; set; }

        public string Observacoes { get; set; }

    }
}