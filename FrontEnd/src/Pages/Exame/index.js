
import React, { useEffect, useRef, useState } from 'react'

import './exame.css';
import Cabecalho from '../../Components/Cabecalho'
import Rodape from '../../Components/Rodape'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cookies from 'js-cookie';

import LoadingBar from 'react-top-loading-bar';
import KitsuneVetApi from '../../services/KitsuneVetApi';
import { useHistory } from 'react-router-dom';

const api = new KitsuneVetApi();

export default function Exame()  {

    const[Exame,setExame]= useState('')
    const[Pet,setPet]= useState('')
    const[DtAtendimento,setDtAtendimento]= useState('')
    const[Horario,setHorario]= useState('')
    const[local,setlocal]= useState('')
    const[Observacoes,setObservacoes]= useState('')

    const cookie = Cookies.getJSON('Login');

    let history = useHistory();
    const loadingBar = useRef(null);

    const salvarClick = async () => {

        try {

            loadingBar.current.continuousStart();

            const request = {
                IdCliente: cookie.idCliente,
                IdPet: Pet,
                Exame: Exame,
                Data: DtAtendimento,
                Local: local,
                Observacoes: Observacoes
            };

            const resp = await api.AgendarExame(request);

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

            <form >
                <div class="tudo">
                    <div class= "quase">
            
                        <div class="nome">
                            <h1>Exames</h1>
                        </div>
                
                        <select
                        value={Pet}
                        onChange ={x => setPet (x.target.value)}
                        >
                                <option value="" disabled selected> Selecione uma opção </option>
                                {cookie.pets.map(item =>
                                    <option value={item.idPet}>{item.nomePet}</option>
                                )}
                                
                        </select>
                
                        <div class="dois">

                            <select 
                            value={Exame}
                            onChange ={x => setExame (x.target.value)}
                            >
                                <option value="" disabled selected> Selecione uma opção </option>
                                <option value="Oftalmologista"> Oftalmologista </option>
                            </select>

                        </div>
                
                        <div class="tres">

                            <h3>Data do Atendimento</h3>
                            <input type="date" 
                            value={DtAtendimento}
                            onChange ={x => setDtAtendimento (x.target.value)}
                            />
                        </div>
                
                        <div class="quatro">

                            <h3>Horário</h3>   
                            <div class="for">
                                <input type="time" 
                                value={Horario}
                                onChange ={x => setHorario (x.target.value)}
                                />
                            </div>

                        </div>
                
                        <div class="cinco">

                            <select name="local"
                            value={local}
                            onChange ={x => setlocal (x.target.value)}
                            >
                                <option value="" disabled selected> Selecione uma opção </option>
                                <option value="KitsuneVet Santo Amaro"> KitsuneVet Santo Amaro </option>
                                <option value="KitsuneVet Jardim São Bernardo"> KitsuneVet Jardim São Bernardo </option>
                            </select>

                        </div>
                
                        <div class="seis">
                            <input type="text" placeholder="Observações" 
                            value={Observacoes}
                            onChange ={x => setObservacoes (x.target.value)}
                            />
                        </div>
                    
                        <div class="sete">
                            <button className="bt" onClick={salvarClick}> Agendar </button>
                        </div>
            
                    </div>

                </div>   

            </form>
            
            <Rodape/>

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