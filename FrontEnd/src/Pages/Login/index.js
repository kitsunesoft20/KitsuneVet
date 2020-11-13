
import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";

import './login.css';
import Cabecalho from '../../Components/Cabecalho'
import KitsuneVetApi from '../../services/KitsuneVetApi';

import LoadingBar from 'react-top-loading-bar';
import Axios from 'axios';
const api = new KitsuneVetApi();

export default function Login(props)  {

    const [Email,setEmail] = useState('');
    const [Senha,setSenha] = useState('');

    const history = useHistory();

    const loadingBar = useRef(null);

    const logarClick = async () => {

        try {

            loadingBar.current.continuousStart();

            const request = {
                email: Email,
                senha: Senha
            };

            const resp = await api.FazerLogin(request);

            toast.info("Logado! 😺 ")

            await loadingBar.current.complete();
            window.setTimeout(() => 
                history.push({
                    pathname: '/',
                    state: {
                        email: resp.data.email,
                        idCliente: resp.data.idCliente,
                        nomeCliente: resp.data.nomeCliente,
                        logado: true
                    }
                }), 2000
            );
            
        }

        catch (e) {
            if(e.response.data.erro){
                toast.error("Erro, verifique suas credenciais e tente novamente");
                loadingBar.current.complete();
            }
            else{
                toast.error('Houve um erro! Tente novamente.');
                loadingBar.current.complete();
            }
        }


    }

    return (

        <div>
            
            <LoadingBar
                height={4}
                color='#f11946'
                ref={loadingBar} 
            />

            <Cabecalho infoLogin={props}/>

            <div className="bodylogin">
                
                <div className="boxlogin">

                    <div className="titlogin">
                        {"{"} Login {"}"}
                    </div>

                        <div className="subboxlogin">
                            <h2> E-mail: </h2>
                            <input type="text" className="email" 
                                value={Email}
                                onChange ={x => setEmail(x.target.value)}
                            />
                        </div>

                        <div className="subboxlogin">
                            <h2> Senha: </h2>
                            <input type="password" className="senha"
                                value={Senha}
                                onChange ={x => setSenha(x.target.value)}
                            />
                        </div>

                    <button className="botaoLogin" onClick={logarClick} > Confirmar </button>

                </div>
                        
            </div>

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