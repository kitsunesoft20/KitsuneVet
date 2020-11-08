
using System;

namespace BackEnd.Controllers.Request
{
    public class VacinacaoRequest
    {
        public int? IdCliente { get; set; }

        public int? IdPet { get; set; }

        public DateTime Data { get; set; }

        public string Vacina { get; set; }

        public string Local { get; set; }

        public string Observacoes { get; set; }
    }
}