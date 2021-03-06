using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace kitsunevet.Database
{
    public class CadastroClienteDatabase
    {
        
        Models.veterinarioContext ctx = new Models.veterinarioContext();

        public BackEnd.Controllers.Response.CadastroClienteResponse salvarCadastro(BackEnd.Controllers.Request.CadastroClienteRequest request){
            
            Models.TbLogin login = new Models.TbLogin();

            login.DsEmail = request.Email;
            login.DsSenha = request.Senha;

            ctx.TbLogin.Add(login);
            ctx.SaveChanges();

            Models.TbCliente cliente = new Models.TbCliente();

            cliente.NmCliente = request.Nome;
            cliente.DsEmail = request.Email;
            cliente.DsRg = request.Rg;
            cliente.DsCpf = request.Cpf;
            cliente.DsTelefone = request.Telefone;
            cliente.DsEndereco = request.Endereco;
            cliente.DsComplemento = request.Complemento;
            cliente.DsCep = request.Cep;
            cliente.DtNascimento = request.Nascimento;
            cliente.DsSexo = request.Sexo;
            cliente.IdLogin = login.IdLogin;

            ctx.TbCliente.Add(cliente);
            ctx.SaveChanges();

            BackEnd.Controllers.Response.CadastroClienteResponse response = new BackEnd.Controllers.Response.CadastroClienteResponse();

            response.Nome = cliente.NmCliente;
            response.Email = cliente.DsEmail;
            response.Senha = login.DsSenha;
            response.Rg = cliente.DsRg;
            response.Cpf = cliente.DsCpf;
            response.Telefone = cliente.DsTelefone;
            response.Endereco = cliente.DsEndereco;
            response.Complemento = cliente.DsComplemento;
            response.Cep = cliente.DsCep;
            response.Nascimento = cliente.DtNascimento;
            response.Sexo = cliente.DsSexo;
            response.IdLogin = login.IdLogin;
            response.IdCliente = cliente.IdCliente;

            return response;

        }

        public bool CadastroExistente(string email){

            bool existe = ctx.TbCliente.Any(x => x.DsEmail == email);
            return existe;

        }

    }
}