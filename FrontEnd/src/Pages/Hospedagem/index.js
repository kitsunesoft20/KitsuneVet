
import React, { useEffect, useRef, useState } from 'react'

import './hospedagem.css';
import Cabecalho from '../../Components/Cabecalho';
import Rodape from '../../Components/Rodape';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cookies from 'js-cookie';

import LoadingBar from 'react-top-loading-bar';
import KitsuneVetApi from '../../services/KitsuneVetApi';
import { useHistory } from 'react-router-dom';

const api = new KitsuneVetApi();

export default function Hospedagem()  {

    const [Pet,setPet]=useState('')
    const [Delivery,setDelivery] = useState('');
    const [DtEntrada,setDtEntrada]=useState('')
    const [DtSaida,setDtSaida]=useState('')
    const [HorarioEntrada,setHorarioEntrada]=useState('')
    const [HorarioSaida,setHorarioSaida]=useState('')
    const [Local, setLocal] = useState('');
    const [Observacoes, setObservacoes] = useState('');

    const cookie = Cookies.getJSON('Login');

    let history = useHistory();
    const loadingBar = useRef(null);

    const salvarClick = async () => {

        try {

            loadingBar.current.continuousStart();

            const request = {
                IdCliente: cookie.idCliente,
                IdPet: Pet,
                Delivery: Delivery,
                DataEntrada: DtEntrada,
                DataSaida: DtSaida,
                Local: Local,
                Observacoes: Observacoes
            };

            const resp = await api.AgendarHotel(request);

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

            <form class="form">
                <div class = "corp">
                    
                    <div class="mini">

                        <div class="til">
                        {'{'} Hospedagem {'}'}
                        </div>

                        <div class= "ensa">
                            <select
                            value={Pet}
                            onChange ={x => setPet (x.target.value)}
                            >
                                <option value="" disabled selected> Selecione uma opção </option>
                                {cookie.pets.map(item =>
                                    <option value={item.idPet}>{item.nomePet}</option>
                                )}
                                
                            </select>
                        </div>
                    
                        <div class= "cai">

                            <div class= "su">

                                <h3> Data de Entrada: </h3>
                                <input type="date" 
                                value={DtEntrada}
                                onChange ={x => setDtEntrada (x.target.value)}
                                />

                            </div>

                            <h3>Horário de Entrada:</h3>

                            <input type="time" 
                            value={HorarioEntrada}
                            onChange ={x => setHorarioEntrada (x.target.value)}
                            />
                        
                        </div>


                        <div class= "hor">

                            <div class="su">

                                <h3> Data de Saída: </h3>
                                <input type="date" 
                                value={DtSaida}
                                onChange ={x => setDtSaida (x.target.value)}

                                />
                            </div>

                            <h3>Horário de Saída: </h3>

                            <input type="time"
                            value={HorarioSaida}
                            onChange ={x => setHorarioSaida (x.target.value)}
                            />

                        </div>

                        <div class="formcheck">

                            <input type="checkbox" 
                            value={Delivery}
                            onChange ={x => setDelivery (Boolean(x.target.value))}
                            />

                            Entregue em casa? (Será levado ao endereço associado a esta conta)

                        </div>

                        <div class= "loc">

                            Local:
                            <select name="Local" placeholder="Local"
                            value={Local}
                            onChange ={x => setLocal (x.target.value)}
                            >
                                <option value="" disabled selected> Selecione uma opção </option>
                                <option value="KitsuneVet Santo Amaro"> KitsuneVet Santo Amaro </option>
                                <option value="KitsuneVet Jardim São Bernardo"> KitsuneVet Jardim São Bernardo </option>
                            </select>

                        </div>

                        <div class = "obs">

                            <input type="text" placeholder="Observações" 
                            value={Observacoes}
                            onChange ={x => setObservacoes (x.target.value)}
                            />

                        </div>

                        <div class="but">
                            <button onClick={salvarClick} class= "bt"> Agendar </button>
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