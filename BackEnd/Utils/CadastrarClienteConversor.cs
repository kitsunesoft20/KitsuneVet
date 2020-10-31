
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace BackEnd.Utils
{
    public class CadastrarClienteConversor
    {

        public Models

        Models.veterinarioContext ctx = new Models.veterinarioContext();
        Models.TbLogin login = new Models.TbLogin();
        Models.TbCliente cliente = new Models.TbCliente();

            login.DsEmail = request.Email;
            login.DsSenha = request.Senha;

            ctx.TbLogin.Add(login);
            ctx.SaveChanges();



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

            Models.Response.CadastroClienteResponse response = new Models.Response.CadastroClienteResponse();

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

    }
}