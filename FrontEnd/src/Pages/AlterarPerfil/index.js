
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

    const infos = Cookies.getJSON('infoPerfil');

    const cookie = Cookies.getJSON('Login');

    let history = useHistory();
    const loadingBar = useRef(null);

    const [Nome, setNome] = useState(infos.nome)
    const [Sexo, setSexo] = useState(infos.sexo)
    const [Nascimento, setNascimento] = useState(infos.nascimento)
    const [Email, setEmail] = useState(infos.email)
    const [Telefone, setTelefone] = useState(infos.telefone)
    const [Cpf, setCpf] = useState(infos.cpf)
    const [Rg, setRg] = useState(infos.rg)
    const [Endereco, setEndereco] = useState(infos.endereco)
    const [Complemento, setComplemento] = useState(infos.complemento)
    const [Cep, setCep] = useState(infos.cep)

    const alterarClick = async () => {



            loadingBar.current.continuousStart();

            const request = {
                idPerfil: infos.id,
                nome: Nome,
                sexo: Sexo,
                nascimento: Nascimento,
                email: Email,
                telefone: Telefone,
                cpf: Cpf,
                rg: Rg,
                endereco: Endereco,
                complemento: Complemento,
                cep: Cep
            };

            const resp = await api.AlterarPerfil(request);

            toast("Alterado com Sucesso 😼");
            await loadingBar.current.complete();

            window.setTimeout(() => 
                history.push( '/perfil' ), 2000
            );

        } 



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
                                &nbsp; &nbsp; 
                                <input type="text" 
                                value={Nome}
                                onChange={x => setNome(x.target.value)}
                                />

                            </div>

                            <div className="linha">

                                <label>E-mail:</label>
                                &nbsp; &nbsp; 
                                <input type="text" 
                                value={Email}
                                onChange={x => setEmail(x.target.value)}
                                />

                            </div>

                            <div className="linha">

                                <label>Telefone: </label>
                                &nbsp; &nbsp; 
                                <input type="text" 
                                value={Telefone}
                                onChange={x => setTelefone(x.target.value)}
                                />

                            </div>

                            <div className="linha">

                                <label>CPF:</label>
                                &nbsp; &nbsp; 
                                <input type="text" 
                                value={Cpf}
                                onChange={x => setCpf(x.target.value)}
                                />

                            </div>

                            <div className="linha">

                                <label>Data de Nascimento:</label>
                                &nbsp; &nbsp;
                                <input type="date" 
                                value={Nascimento}
                                onChange={x => setNascimento(x.target.value)}
                                />

                            </div>
                            
                            <div className="linha"> 

                                <label>Endereço:</label>
                                &nbsp; &nbsp; 
                                <input type="text" 
                                value={Endereco}
                                onChange={x => setEndereco(x.target.value)}
                                />

                            </div>
                            
                            <div className="linha"> 

                                <label>Complemento:</label>
                                &nbsp; &nbsp; 
                                <input type="text" 
                                value={Complemento}
                                onChange={x => setComplemento(x.target.value)}
                                />

                            </div>
                            
                            <div className="linha"> 

                                <label>CEP:</label>
                                &nbsp; &nbsp; 
                                <input type="text" 
                                value={Cep}
                                onChange={x => setCep(x.target.value)}
                                />

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
                        <button className="btAP" onClick={alterarClick}> Salvar Informações </button>
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