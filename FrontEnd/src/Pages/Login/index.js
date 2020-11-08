
import React from 'react';

import './login.css';

import Cabecalho from '../../Components/Cabecalho'

export default function Login()  {
    return (

        <body>

            <Cabecalho />

            <div className="bodylogin">
                
                <div class="boxlogin">

                    <div className="titlogin">
                        {"{"} Login {"}"}
                    </div>

                    <div className="subboxlogin">
                        <h2> E-mail: </h2>
                        <input type="text" className="email" />
                    </div>

                    <div className="subboxlogin">
                        <h2> Senha: </h2>
                        <input type="password" className="senha"/>
                    </div>

                    <button className="botaoLogin"> Confirmar </button>

                </div>
                        
            </div>

        </body>

    );

}