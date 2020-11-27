
using System;

namespace kitsunevet.Business
{
    public class AlterarPerfilBusiness
    {
        public Models.TbCliente AlterarPerfil ( BackEnd.Controllers.Request.AlterarPerfilRequest request)
        {
    
        Database.AlterarPerfilDatabase database = new Database.AlterarPerfilDatabase();

        if (string.IsNullOrEmpty(request.Nome) || (request.Nome).Length <= 0)
            throw new Exception("Nome Inválido");
            
        if (string.IsNullOrEmpty(request.Email) || (request.Email).Length <= 0)
            throw new Exception("Email Inválido");

        if(string.IsNullOrEmpty(request.Sexo))
            throw new Exception("Sexo não encontrado");

        if(string.IsNullOrEmpty(request.Telefone))
            throw new Exception("Número de telefone inválido");

        if(request.Cpf.Length != 11 )
            throw new Exception("O CPF não poderá ter menos ou mais do que 11 números");

        if(request.Rg.Length != 9 )
            throw new Exception("O RG não poderá ter menos ou mais do que 9 números");

        if(string.IsNullOrEmpty(request.Endereco) || (request.Endereco).Length <= 0)
            throw new Exception("Endereço Inválido");

        if(request.Cep.Length != 8)
            throw new Exception("O CEP não poderá ter menos ou mais do que 8 números");

        Models.TbCliente response = database.AlterarPerfil( request);

        return response;

        }
    }
}