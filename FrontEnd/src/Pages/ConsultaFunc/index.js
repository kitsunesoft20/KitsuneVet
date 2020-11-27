
import React, { useRef, useState } from 'react';

import './ConsultaFunc.css';

import 'react-toastify/dist/ReactToastify.css';

import Cookies from 'js-cookie';

import logo from './Kitsunelogo.png';

import KitsuneVetApi from '../../services/KitsuneVetApi';

const api = new KitsuneVetApi();

export default function ConsultaFuncionario() {

    const cookie = Cookies.getJSON('Login');

    return(
        
        <div>

            <div className="menu">
                    <div className="submenu">
                        <img src={logo} width="20%" height="20%" alt="NotFound"/>

                        <div className="itensmenu">
                                    
                            <h4> {cookie.idCliente} </h4> 

                            <div className="sep"> </div>

                            <h4> {cookie.nomeCliente} </h4> 

                        </div>

                    </div>
                </div>
            
            <div class="corpo">

                <div class="baixo">

                <div class="title">
                    <h1>Agendamentos</h1>
                </div>

                    <table>
                        <tr>
                            <th> Cliente </th>
                            <th> Serviço </th>
                            <th> Data </th>
                            <th> Horário </th>
                            <th> Cancelar </th>
                        </tr>

                        <tr>
                            <td> Jubileu </td>
                            <td> atendente </td>
                            <td> 20/08/2020 </td>
                            <td> 13:30 </td>
                            <td> Aprovado </td>
                        </tr>
                    </table>

                </div>

            </div>

        </div>

    );

}