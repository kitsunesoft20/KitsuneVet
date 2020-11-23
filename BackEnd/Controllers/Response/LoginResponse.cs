
using System.Collections.Generic;

namespace BackEnd.Controllers.Response
{
    public class LoginResponse
    {        

        public int IdCliente { get; set; }

        public int IdLogin { get; set; }

        public string email { get; set; }

        public string NomeCliente { get; set; }

        public List<PetsResponse> tbPet { get; set; }

    }
}