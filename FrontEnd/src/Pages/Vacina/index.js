
import React, { useRef, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './vacinacao.css';
import Cabecalho from '../../Components/Cabecalho';
import Rodape from '../../Components/Rodape';

import LoadingBar from 'react-top-loading-bar';
import KitsuneVetApi from '../../services/KitsuneVetApi';
import { useHistory } from "react-router-dom";

const api = new KitsuneVetApi();

export default function Vacina()  {

    const [IdCliente, setIdCliente] = useState('');
    const [IdPet, setIdPet] = useState('');
    const [Vacina, setVacinas] = useState('');
    const [Horario, setHorario] = useState('');
    const [Data, setData] = useState('');
    const [Observacoes, setObservacoes] = useState('');
    const [Local, setLocal] = useState('');

    let history = useHistory();

    const loadingBar = useRef(null);

    const AgendarVacinaClick = async () => {

        try {

            loadingBar.current.continuousStart();

            const request = {
                Vacina : Vacina,
                Data : Data,
                Local: Local,
                IdCliente: IdCliente,
                IdPet: IdPet,
                Observacoes: Observacoes,
                IdCliente: ,
                IdPet: IdPet
            };

            const resp = await api.AgendarVacina(request);

            toast.success("Logado!");

            loadingBar.current.complete();

        }

        catch (e) {
            if(e.response.data.erro){
                toast.error(e.response.data.erro);

                loadingBar.current.complete();
            }

            else
                toast.error('Houve um erro! Tente novamente.');

                loadingBar.current.complete();
        }


    }

    return (
        <body>
            
            <Cabecalho />

            <div class="inicio">

                <div class="fera">

                    <div class="container4">
                        <img src="../Vacinação/imagens/semfundocachorrin.png" width="250px" height="250px" />
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
                                
                                <select>
                                    <option value="" disabled selected> </option>
                                    <option>  </option>
                                    <option>  </option>
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
                                
                                <input type="time" id="time" name="time" 
                                    value = {Horario}
                                    onChange ={x => setHorario(x.target.value)}
                                />
                                
                                <input type="date" id="fdate" name="fdate" 
                                    value = {Data}
                                    onChange ={x => setData(x.target.value)}                                
                                />

                                <select 
                                    value ={Local}
                                    onChange ={x => setLocal(x.target.value)}
                                >
                                    <option value="" disabled selected> </option>
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
                            <button onClick={AgendarVacinaClick} > Agendar </button>
                        </div>

                    </div> 
                    
                    <div class="container5">
                        <img src="../Vacinação/imagens/gatinnn.png" width="300px" height="300px" />
                    </div>

                </div>

            </div>

            <Rodape />
            
        </body>
    );

}