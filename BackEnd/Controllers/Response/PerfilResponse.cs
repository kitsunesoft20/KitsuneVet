
using System;

namespace BackEnd.Controllers.Response
{
    public class PerfilResponse
    {
        public string Email { get; set; }

        public string Nome { get; set; }

        public string Sexo { get; set; }

        public DateTime? Nascimento { get; set; }

        public string Telefone { get; set; }

        public string Cpf { get; set; }

        public string Rg { get; set; }

        public string Endereco { get; set; }

        public string Complemento { get; set; }
        
        public string Cep { get; set; }
    }
}