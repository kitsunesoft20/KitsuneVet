
import React from 'react';
import './cabecalho.css';
import logo from './Kitsunelogo.png';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

export default function Cabecalho(props) {

    const infoLogin = props.infoLogin;

    console.log(infoLogin)
    
    return(

        <div className="menu">
            <div className="submenu">
                <Link to="/"> <img src={logo} width="35%" height="35%" alt="NotFound"/> </Link>
                
                { infoLogin.location.state == undefined  && (

                    <div className="itensmenu">

                        <Link to="/" > <h4>Home</h4> </Link>
                        <div className="sep" > </div>

                        <Link to="/cadastroPet"> <h4>Cadastre seu Pet</h4> </Link>
                        <div className="sep"> </div>
                    
                        <Link to="/login" > <h4> Login </h4> </Link>
                        <div className="sep"> </div>

                        <Link to="/cadastro"> <h4> Cadastrar </h4> </Link>

                    </div>
                )}

                { infoLogin.location.state !== undefined && (

                    <div className="itensmenu">

                        <Link to="/" > <h4>Home</h4> </Link>
                        <div className="sep" > </div>

                        <Link to="/cadastroPet"> <h4>Cadastre seu Pet</h4> </Link>
                        <div className="sep"> </div>
                    
                        <h4> {} </h4>

                    </div>
                )}
                    
            </div>
        </div>

    );

}