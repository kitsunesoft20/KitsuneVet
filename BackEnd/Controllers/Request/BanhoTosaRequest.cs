namespace BackEnd.Controllers.Request
{
    public class BanhoTosaRequest
    {
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