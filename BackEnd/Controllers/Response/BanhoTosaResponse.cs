
using System;

namespace BackEnd.Controllers.Response
{
    public class BanhoTosaResponse
    {
        public int IdBanhoTosa { get; set; }

        public int? IdCliente { get; set; }

        public int? IdPet { get; set; }

        public bool? Banho { get; set; }

        public bool? Tosa { get; set; }

        public bool? Unhas { get; set; }

        public bool? Dentes { get; set; }

        public DateTime Data { get; set; }

        public string Local { get; set; }

        public string Observacoes { get; set; }
    }
}