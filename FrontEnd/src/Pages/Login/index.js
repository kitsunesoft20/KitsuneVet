
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './login.css';
import Cabecalho from '../../Components/Cabecalho'

import KitsuneVetApi from '../../services/KitsuneVetApi';

const api = new KitsuneVetApi();

export default function Login()  {

    const [Email,setEmail] = useState('');
    const [Senha,setSenha] = useState('');

    const logarClick = async () => {

        try {
            const request = {
                email: Email,
                senha: Senha
            };
            const resp = await api.FazerLogin(request);
            toast("Fez Login");
        } 

        catch (e) {
            if(e.response.data.erro)
                toast.error(e.response.data.erro);
            else
                toast.error('Houve um erro! Tente novamente.');
        }

    }

    return (

        <div>

            <Cabecalho />

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

        </div>

    );

}