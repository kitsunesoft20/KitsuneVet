
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './perfil.css'
import Cabecalho from '../../Components/Cabecalho'
import Rodape from '../../Components/Rodape'

import imagem1 from './imagens/catgif.gif'

export default function Perfil (){

    return (
        <div>

            <Cabecalho />

            <div class="caixaPerf">
                <div class ="boxPerf">

                    <div class="titperfil">
                        {'{'} Perfil {'}'}
                    </div>

                    <div className="subboxPerf">

                        <div class= "infoPerf">
                            <label>Nome: </label>

                            <label>E-mail:</label>
                            
                            <label>CPF:</label>
                            
                            <label>Data de nascimento:</label>
                            
                            <label>Endereço:</label>
                            
                            <label>Complemento:</label>
                            
                            <label>CEP:</label>
                            
                            <label>Sexo:</label>
                        </div>

                        <div className="imagemPerf">
                            <img src={imagem1} width="300px" height="300px" alt="erro"/>
                        </div>

                    </div>

                    <div>
                        <button className="btPerf">
                            Alterar dados cadastrais
                        </button>
                    </div>
                    
                    <div className="PetPerf">
                        <select >
                            <option value="Pet"> Pet </option>
                        </select>

                        <button className="btPerf"> Alterar dados do Pet </button>
                    </div>

                </div>
            </div>

            <Rodape />

        </div>
    )

}