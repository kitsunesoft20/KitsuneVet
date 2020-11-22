
import React, { useEffect, useState } from 'react';
import './cabecalho.css';
import logo from './Kitsunelogo.png';
import { Link } from 'react-router-dom';

import { useHistory } from "react-router-dom";
import Cookies from 'js-cookie';

export default function Cabecalho() {

    const cookie = Cookies.getJSON('Login');
    const history = useHistory();

    const Logout = async () => {

        Cookies.set( 'Login', {
                email: '',
                idCliente: 0,
                nomeCliente: '',
                logado: false
            }
        );

        window.setTimeout(() => 
                history.push( '/' ), 1000
        );
    }

    return(

        <div className="menu">
            <div className="submenu">
                <img src={logo} width="20%" height="20%" alt="NotFound"/>
                
                { cookie.logado === false  && (

                    <div className="itensmenu">

                        <Link to={{
                            pathname: "/",
                            state: cookie
                        }}> 
                            <h4>Home</h4> 
                        </Link>
                        <div className="sep" > </div>
                    
                        <Link to="/login" > 
                            <h4> Login </h4> 
                        </Link>
                        <div className="sep"> </div>

                        <Link to="/cadastro">
                            <h4> Cadastrar </h4> 
                        </Link>

                    </div>
                )}

                { cookie.logado === true && (

                    <div className="itensmenu">

                        <Link to="/" > 
                            <h4>Home</h4> 
                        </Link>
                        <div className="sep" > </div>

                        <Link to= "/cadastropet" > 
                            <h4>Cadastre seu Pet</h4> 
                        </Link>
                        <div className="sep"> </div>

                        <div className="perfilcab">
                            <h4> Olá </h4>
                            <Link to="/perfil">
                                <h4>, {cookie.nomeCliente} </h4>
                            </Link>
                        </div>

                        <button onClick={Logout}>
                            Logout
                        </button>

                    </div>
                )}
                    
            </div>
        </div>

    );

}