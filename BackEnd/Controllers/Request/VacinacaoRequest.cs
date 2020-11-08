namespace BackEnd.Controllers.Request
{
    public class VacinacaoRequest
    {
        public int? IdCliente { get; set; }

        public int? IdPet { get; set; }

        public DateTime? DtVacinacao { get; set; }

        public string DsVacina { get; set; }

        public string DsLocal { get; set; }

        public string DsObservacoes { get; set; }
    }
}