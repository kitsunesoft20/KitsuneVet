
import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useHistory } from "react-router-dom";

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

    try {
        const ex = typeof(Cookies.getJSON('infoPerfil').email) == 'undefined';
    }
 
    catch (e) {
        Cookies.set('infoPerfil', 
            {
                email: '---',
                nome: '---',
                sexo: '---',
                nascimento: '---',
                telefone: '---',
                cpf: '---',
                rg: '---',
                endereco: '---',
                complemento: '---',
                cep: '---'
            }
        );
    }

    const Click = async () =>  {

        const req = {
            idPerfil: cookie.idCliente
        }

        const resp = await api.Perfil(req);

        Cookies.set('infoPerfil', 
            {
                email: resp.data.email,
                nome: resp.data.nome,
                sexo: resp.data.sexo,
                nascimento: resp.data.nascimento,
                telefone: resp.data.telefone,
                cpf: resp.data.cpf,
                rg: resp.data.rg,
                endereco: resp.data.endereco,
                complemento: resp.data.complemento,
                cep: resp.data.cep

            }
        );

        window.location.reload(false);

    }

    const infos = Cookies.getJSON('infoPerfil');

    return (
        <div>

            <Cabecalho />

            <div className="caixaPerf">
                <div className ="boxPerf">

                    <div className="titperfil">
                        {'{'} Perfil {'}'}
                    </div>

                    <div className="subboxPerf">

                        <div className= "infoPerf">

                            <button onClick={Click} className="btPerf"> Mostrar Informações</button>  

                            <div className="linha">
                                <label>Nome: </label>
                                &nbsp; &nbsp; {infos.nome}
                            </div>

                            <div className="linha">
                                <label>E-mail:</label>
                                &nbsp; &nbsp; {infos.email} 
                            </div>
                            
                            <div className="linha">
                                <label>CPF:</label>
                                &nbsp; &nbsp; {infos.cpf}
                            </div>

                            <div className="linha">                            
                                <label>Data de Nascimento:</label>
                                &nbsp; &nbsp; {new Date(infos.nascimento + 'Z').toLocaleDateString()}
                            </div>
                            
                            <div className="linha"> 
                                <label>Endereço:</label>
                                &nbsp; &nbsp; {infos.endereco}
                            </div>
                            
                            <div className="linha"> 
                                <label>Complemento:</label>
                                &nbsp; &nbsp; {infos.complemento}
                            </div>
                            
                            <div className="linha"> 
                                <label>CEP:</label>
                                &nbsp; &nbsp; {infos.cep}
                            </div>
                            
                            <div className="linha"> 
                                <label>Sexo:</label>
                                &nbsp; &nbsp; {infos.sexo}
                            </div>

                        </div>

                        <div className="imagemPerf">
                            <img src={imagem1} width="300px" height="300px" alt="erro"/>
                        </div>

                    </div>

                    <div>
                        <button className="btPerf">
                            <Link to="/AlterarPerfil"> Alterar Dados Cadastrais </Link>
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