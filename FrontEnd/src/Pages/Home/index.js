
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

import './home.css';
import Cabecalho from '../../Components/Cabecalho';
import Rodape from '../../Components/Rodape';

import exames from './imagens/exames.png';
import cirurgia from './imagens/cirurgia.png';
import vacina from './imagens/vacina.png';
import banhotosa from './imagens/banhotosa.png';
import hospedagem from './imagens/hospedagem.png';

export default function Home(props)  {

    return (
    <body>

        <Cabecalho infoLogin={props} />

        <div className="iniciohome">

            <div className="servicoshome">

                <div className="titservicos"> {'{'} O que a Kitsune Vet faz {'}'} </div>
                <h2> Agende já um de nossos serviços! </h2>

                <div className="imgservicos">

                    <div className="subboxH"> 
                        <img src={hospedagem} width="120px" height="120px" alt="NotFound"/>
                        <div className="miniboxH"> <h3>Hospedagem</h3> </div>
                        <div className="A"> <Link to="/agendamentohospedagem"> <button type="button">Agendar</button> </Link> </div>
                    </div>

                    <div className="subboxH"> 
                        <img src={vacina} width="120px" height="120px" alt="NotFound"/>
                        <div className="miniboxH"> <h3>Vacinas</h3> </div>
                        <div className="A"> <Link to="/agendamentovacina"> <button type="button">Agendar</button> </Link> </div>
                    </div>

                    <div className="subboxH"> 
                        <img src={cirurgia} width="120px" height="120px" alt="NotFound"/>
                        <div className="miniboxH"> <h3>Cirurgia</h3> </div>
                        <div className="A"> <Link to="/agendamentocirurgia" > <button type="button">Agendar</button> </Link> </div>
                    </div>

                    <div className="subboxH">
                        <img src={exames} width="120px" height="120px" alt="NotFound"/>
                        <div className="miniboxH"> <h3>Exames</h3> </div>
                        <div className="A"> <Link to="/agendamentoexame" > <button type="button">Agendar</button> </Link> </div>
                    </div>

                    <div className="subboxH">
                        <img src={banhotosa} width="120px" height="120px" alt="NotFound"/>
                        <div className="miniboxH"> <h3>Banho e Tosa</h3></div>
                        <div className="A"> <Link to="/agendamentobanhoetosa" > <button type="button">Agendar</button> </Link> </div>
                    </div>

                </div>

            </div>
        
        </div>

        <Rodape />

        <ToastContainer />

    </body>

    );

}