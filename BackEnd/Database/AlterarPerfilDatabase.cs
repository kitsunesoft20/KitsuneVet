
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace kitsunevet.Database
{
    public class AlterarPerfilDatabase
    {

        public Models.TbCliente AlterarPerfil ( BackEnd.Controllers.Request.AlterarPerfilRequest request)
        {

            Models.veterinarioContext ctx = new Models.veterinarioContext();

            Models.TbCliente cliente = ctx.TbCliente
                .FirstOrDefault(x => x.IdCliente == request.idPerfil);
            
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

            ctx.SaveChanges();

            return cliente;

        }
        
    }
}