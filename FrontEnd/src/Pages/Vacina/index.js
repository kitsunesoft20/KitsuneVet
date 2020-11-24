
import React, { useEffect, useRef, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './vacinacao.css';
import Cabecalho from '../../Components/Cabecalho';
import Rodape from '../../Components/Rodape';

import LoadingBar from 'react-top-loading-bar';
import KitsuneVetApi from '../../services/KitsuneVetApi';
import { useHistory } from "react-router-dom";

import imagem1 from './imagens/doguinho.png'
import imagem2 from './imagens/gatinnn.png'

import Cookies from 'js-cookie';

const api = new KitsuneVetApi();

export default function Vacina()  {

    const [Pet, setPet] = useState('');
    const [Vacina, setVacinas] = useState('');
    const [Horario, setHorario] = useState('');
    const [Data, setData] = useState('');
    const [Observacoes, setObservacoes] = useState('');
    const [Local, setLocal] = useState('');

    const cookie = Cookies.getJSON('Login');
    let history = useHistory();
    const loadingBar = useRef(null);

    const salvarClick = async () => {

        try {

            loadingBar.current.continuousStart();

            const request = {
                IdCliente: cookie.idCliente,
                IdPet: Pet,
                Vacina : Vacina,
                Data : Data,
                Local: Local,
                Observacoes: Observacoes,
            };

            const resp = await api.AgendarVacina(request);

            toast("Agendado com Sucesso! 😼");
            await loadingBar.current.complete();

            window.setTimeout(() => 
                history.push( '/' ), 2000
            );

        }

        catch (e) {
            if(e.response.data.erro){
                toast.error(e.response.data.erro);
                await loadingBar.current.complete();
            }
                
            else{
                toast.error('Houve um erro! Tente novamente.');
                await loadingBar.current.complete();
            }
        }

    }

    return (
        <body>

            <LoadingBar
                height={4}
                color='#f11946'
                ref={loadingBar} 
            />
            
            <Cabecalho />

            <div class="inicio">

                <div class="fera">

                    <div class="container4">
                        <img src={imagem1} width="250px" height="250px" alt="erro" />
                    </div>

                    <div class="container3">

                        <div class="box4"> 
                            {'{'}Vacinação{'}'}
                        </div>

                        <div class="elsa">

                            <div class="dsformularios">
                                <h4> Pet:</h4>
                                <h4> Vacinas de Cachorro:</h4>
                                <h4> Vacinas de Gato: </h4>
                                <h4> Horario:</h4>
                                <h4> Data de Atendimento: </h4>
                                <h4> Local: </h4>
                                <h4> Observações: </h4>
                            </div>

                                        
                            <form class="formularios">
                                
                                <select
                                value={Pet}
                                onChange ={x => setPet (x.target.value)}
                                >
                                    <option value="" disabled selected> Selecione uma opção </option>
                                    {cookie.pets.map(item =>
                                        <option value={item.idPet}>{item.nomePet}</option>
                                    )}
                                    
                                </select>
                                
                                <select name="vacinasCachorro">
                                    <option value="" disabled selected> </option>
                                    <option value="v8 ou v10"> V8 ou V10 </option>
                                    <option value="gripe canina"> Gripe Canina </option>
                                    <option value="giardíese"> Giardíese </option>
                                    <option value="antí-rábica"> Antí-rábica(Raiva) </option>
                                </select>


                                <select name="vacinasGato">
                                    <option value="" disabled selected> </option>
                                    <option value="quádrupla felina"> Quádrupla Felina(1 Dose) </option>
                                    <option value="quádrupla felina"> Quádrupla Felina(2 Dose) </option>
                                    <option value="quádrupla felina"> Quádrupla Felina(3 Dose) </option>
                                    <option value="antí-rábica"> Antí-rábica(Raiva) </option>
                                    <option value="quádrupla felina"> Quádrupla dose unica(A partir do 1 ano de idade)</option>
                                </select>
                                
                                <input type="time"
                                    value = {Horario}
                                    onChange ={x => setHorario(x.target.value)}
                                />
                                
                                <input type="date"
                                    value = {Data}
                                    onChange ={x => setData(x.target.value)}                                
                                />

                                <select 
                                    value ={Local}
                                    onChange ={x => setLocal(x.target.value)}
                                >
                                    <option value="" disabled selected> Selecione uma opção </option>
                                    <option value="KitsuneVet Santo Amaro"> KitsuneVet Santo Amaro </option>
                                    <option value="KitsuneVet Jardim São Bernardo"> KitsuneVet Jardim São Bernardo </option>
                                </select>

                                <input type="text" 
                                    value={Observacoes}
                                    onChange ={x => setObservacoes(x.target.value)}                                
                                />

                            </form>

                        </div>

                        <div class="ana">
                            <button onClick={salvarClick} > Agendar </button>
                        </div>

                    </div> 
                    
                    <div class="container5">
                        <img src={imagem2} width="300px" height="300px" alt="erro" />
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
            
        </body>
    );

}