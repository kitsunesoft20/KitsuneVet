
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace kitsunevet.Database
{
    public class CadastroPetDatabase
    {

        Models.veterinarioContext ctx = new Models.veterinarioContext();

        public BackEnd.Controllers.Response.CadastroPetResponse cadastrarPet (BackEnd.Controllers.Request.CadastroPetRequest request){

            Models.TbPet Pet = new Models.TbPet();

            Pet.NmPet = request.NomePet;
            Pet.TpPet = request.TipoPet;
            Pet.DsMedicamentos = request.Medicamentos;
            Pet.DsPeso = request.Peso;
            Pet.DsPorte = request.Porte;
            Pet.DsRaca = request.Raca;
            Pet.DsSexo = request.Sexo;
            Pet.DtNascimento = request.Nascimento;
            Pet.IdCliente = request.IdCliente;

            ctx.Add(Pet);
            ctx.SaveChanges();

            BackEnd.Controllers.Response.CadastroPetResponse response = new BackEnd.Controllers.Response.CadastroPetResponse();

            response.IdCliente = request.IdCliente;
            response.IdPet = Pet.IdPet;
            response.Medicamentos = request.Medicamentos;
            response.Nascimento = request.Nascimento;
            response.NomePet = request.NomePet;
            response.Peso = request.Peso;
            response.Porte = request.Porte;
            response.Raca = request.Raca;
            response.Sexo = request.Sexo;
            response.TipoPet = request.TipoPet;

            return response;

        }

    }
}