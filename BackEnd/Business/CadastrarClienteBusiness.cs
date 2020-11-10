
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace kitsunevet.Business
{
    public class CadastrarClienteBusiness
    {

        public BackEnd.Controllers.Response.CadastroClienteResponse SalvarCliente (BackEnd.Controllers.Request.CadastroClienteRequest request){

            Database.CadastroClienteDatabase database = new Database.CadastroClienteDatabase();

            if (string.IsNullOrEmpty(request.Nome))
            throw new Exception("Nome Inválido");

            if(request.Senha.Length < 8)
            throw new Exception("A Senha não pode ter menos que 8 caracteres");

            if(string.IsNullOrEmpty(request.Sexo))
            throw new Exception("Sexo não encontrado");

            if(string.IsNullOrEmpty(request.Telefone))
            throw new Exception("Número de telefone inválido");

            if(request.Cpf.Length != 11 )
            throw new Exception("O CPF não poderá ter menos ou mais do que 11 números");

            if(request.Rg.Length != 9 )
            throw new Exception("O RG não poderá ter menos ou mais do que 9 números");

            if(string.IsNullOrEmpty(request.Endereco))
            throw new Exception("Endereço Inválido");

            if(request.Cep.Length != 8)
            throw new Exception("O CEP não poderá ter menos ou mais do que 8 números");

            if(database.CadastroExistente (request.Email))
            throw new Exception("O Email cadastrado já está vinculado a uma conta");

            BackEnd.Controllers.Response.CadastroClienteResponse response = database.salvarCadastro(request);

            return response;

        }

    }
}