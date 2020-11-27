
import React, { useRef, useState } from 'react'

import './alterarPerfil.css'
import Cabecalho from '../../Components/Cabecalho';
import Rodape from '../../Components/Rodape';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cookies from 'js-cookie';

import LoadingBar from 'react-top-loading-bar';
import KitsuneVetApi from '../../services/KitsuneVetApi';
import { Link, useHistory } from 'react-router-dom';

import imagem1 from './imagens/hotelzinho.jpg'

const api = new KitsuneVetApi();

export default function AlterarCadastro() {

    const [Nome, setNome] = useState('')
    const [Sexo, setSexo] = useState('')
    const [Nascimento, setNascimento] = useState('')
    const [Email, setEmail] = useState('')
    const [Telefone, setTelefone] = useState('')
    const [Cpf, setCpf] = useState('')
    const [Rg, setRg] = useState('')
    const [Endereco, setEndereco] = useState('')
    const [Complemento, setComplemento] = useState('')
    const [Cep, setCep] = useState('')
    const [Senha, setSenha] = useState('')

    const cookie = Cookies.getJSON('Login');

    let history = useHistory();
    const loadingBar = useRef(null);

    return(

        <div className="bodyAP">

            <LoadingBar
                height={4}
                color='#f11946'
                ref={loadingBar} 
            />

            <Cabecalho />

            <div className="caixaAP">
                <div className ="boxAP">

                    <div className="titperfil">
                        {'{'} Alterando Perfil {'}'}
                    </div>

                    <div className="subboxAP">

                        <div className= "infoAP">

                            <div className="linha">
                                <label>Nome: </label>
                                &nbsp; &nbsp; <input type="text" />
                            </div>

                            <div className="linha">
                                <label>E-mail:</label>
                                &nbsp; &nbsp; <input type="text" />
                            </div>

                            <div className="linha">
                                <label>Senha: </label>
                                &nbsp; &nbsp; <input type="password" />
                            </div>
                            
                            <div className="linha">
                                <label>CPF:</label>
                                &nbsp; &nbsp; <input type="text" />
                            </div>

                            <div className="linha">                            
                                <label>Data de Nascimento:</label>
                                &nbsp; &nbsp; <input type="date" />
                            </div>
                            
                            <div className="linha"> 
                                <label>Endereço:</label>
                                &nbsp; &nbsp; <input type="text" />
                            </div>
                            
                            <div className="linha"> 
                                <label>Complemento:</label>
                                &nbsp; &nbsp; <input type="text" />
                            </div>
                            
                            <div className="linha"> 
                                <label>CEP:</label>
                                &nbsp; &nbsp; <input type="text" />
                            </div>
                            
                            <div className="linha"> 
                                <label>Sexo:</label>
                                &nbsp; &nbsp; 
                                <select name="Sexo" placeholder="Sexo"
                                    value={Sexo}
                                    onChange ={x => setSexo(x.target.value)}>
                                        <option value="" disabled selected> </option>
                                        <option value="Feminino"> Feminino </option>
                                        <option value="Masculino"> Masculino </option>
                                        <option value="Prefiro não informar"> Prefiro não informar </option>
                                        <option value="Outro"> Outro </option>
                                </select>
                            </div>

                        </div>

                        <div className="imagemAP">
                            <img src={imagem1} width="300px" height="300px" alt="erro"/>
                        </div>

                    </div>


                    <div>
                        <button className="btAP"> Salvar Informações </button>
                    </div>

                </div>

            </div>

            <Rodape />

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
            />

        </div>

    );

}