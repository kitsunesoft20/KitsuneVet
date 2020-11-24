
import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";

import './perfil.css'
import Cabecalho from '../../Components/Cabecalho'
import Rodape from '../../Components/Rodape'

import imagem1 from './imagens/catgif.gif'

import KitsuneVetApi from '../../services/KitsuneVetApi';
import LoadingBar from 'react-top-loading-bar';
import Axios from 'axios';

import Cookies from 'js-cookie';
const api = new KitsuneVetApi();

export default function Perfil (){

    const cookie = Cookies.getJSON('Login');

    const [dados,setDados] = useState([]);

        const ex = api.Perfil(cookie.idLogin);
        console.log(ex);


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
                            <h2> {dados.nmCliente} </h2>

                            <label>E-mail:</label>
                            <h2>{dados.DsEmail} </h2>
                            
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