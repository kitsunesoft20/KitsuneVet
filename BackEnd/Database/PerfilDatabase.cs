
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace kitsunevet.Database
{
    public class PerfilDatabase
    {

        public BackEnd.Controllers.Response.PerfilResponse GetPerfil(BackEnd.Controllers.Request.PerfilRequest request){

            Models.veterinarioContext ctx = new Models.veterinarioContext();

            Models.TbCliente cliente = ctx.TbCliente.Include(x => x.IdLoginNavigation)
                .FirstOrDefault(x => x.IdLoginNavigation.IdLogin == request.idPerfil);
                    
            BackEnd.Controllers.Response.PerfilResponse response = new BackEnd.Controllers.Response.PerfilResponse();

            response.Nome = cliente.NmCliente;
            response.Email = cliente.DsEmail;
            response.Rg = cliente.DsRg;
            response.Cpf = cliente.DsCpf;
            response.Telefone = cliente.DsTelefone;
            response.Endereco = cliente.DsEndereco;
            response.Complemento = cliente.DsComplemento;
            response.Cep = cliente.DsCep;
            response.Nascimento = cliente.DtNascimento;
            response.Sexo = cliente.DsSexo;
            response.idPerfil = cliente.IdCliente;

            return response;

        }

    }

}