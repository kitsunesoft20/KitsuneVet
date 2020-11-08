namespace BackEnd.Controllers.Response
{
    public class VacinacaoResponse
    {
        public int IdVacinacao { get; set; }

        public int? IdCliente { get; set; }

        public int? IdPet { get; set; }

        public DateTime? Data { get; set; }

        public string Vacina { get; set; }

        public string Local { get; set; }

        public string Observacoes { get; set; }
    }
}