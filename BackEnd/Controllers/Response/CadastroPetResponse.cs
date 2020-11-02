
using System;

namespace BackEnd.Controllers.Response
{
    public class CadastroPetResponse
    {
        public int IdPet { get; set; }

        public int? IdCliente { get; set; }

        public string TipoPet { get; set; }

        public string NomePet { get; set; }

        public string Sexo { get; set; }

        public string Raca { get; set; }

        public string Porte { get; set; }

        public string Medicamentos { get; set; }

        public DateTime? Nascimento { get; set; }
        
        public decimal? Peso { get; set; }
    }
}