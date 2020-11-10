
using System;

namespace kitsunevet.Business
{
    public class CadastroPetBusiness
    {
        public BackEnd.Controllers.Response.CadastroPetResponse CadastrarPet (BackEnd.Controllers.Request.CadastroPetRequest request){

            Database.CadastroPetDatabase database = new Database.CadastroPetDatabase();

            if (string.IsNullOrEmpty(request.NomePet))
                throw new Exception("Nome Inválido");

            if (request.Peso.HasValue == false || request.Peso < 0)
                throw new Exception("Peso Inválido");
            
            if (string.IsNullOrEmpty(request.Sexo))
                throw new Exception("Sexo Inválido");

            if (string.IsNullOrEmpty(request.Porte))
                throw new Exception("Porte Inválido");

            if (string.IsNullOrEmpty(request.Raca))
                throw new Exception("Raça Inválida");

            if (string.IsNullOrEmpty(request.TipoPet))
                throw new Exception("Tipo de Pet Inválido");

            BackEnd.Controllers.Response.CadastroPetResponse response = database.cadastrarPet(request);

            return response;   

        }
    }
}