
import React, { useRef, useState } from 'react'

import './banhoetosa.css'
import Cabecalho from '../../Components/Cabecalho';
import Rodape from '../../Components/Rodape';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import imagem1 from './imagens/semfundo02.png';
import imagem2 from './imagens/semfundo03.png';

import Cookies from 'js-cookie';

import LoadingBar from 'react-top-loading-bar';
import KitsuneVetApi from '../../services/KitsuneVetApi';
import { useHistory } from 'react-router-dom';

const api = new KitsuneVetApi();

export default function BanhoeTosa()  {

    const [Banho, setBanho] = useState('');
    const [Tosa, setTosa] = useState('');
    const [Unhas, setUnhas] = useState('');
    const [Dentes, setDentes] = useState('');
    const [Observacoes, setObservacoes] = useState('');
    const [Horario, setHorario] = useState('');
    const [Data, setData] = useState('');
    const [Pet, setPet] = useState('');
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
                Banho: Banho,
                Tosa: Tosa,
                Unhas: Unhas,
                Dentes: Dentes,
                Data: Data + "T" + Horario,
                Local: Local
            };

            const resp = await api.AgendarBanhoTosa(request);

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

        <div className="inicioBeT">

            <LoadingBar
                height={4}
                color='#f11946'
                ref={loadingBar} 
            />

            <Cabecalho />
    
            <div className="containerBeT">
    
                <div className="subboxBeT">
                    <img src={imagem1} width="300px" height="300px" alt="erro"/>
                </div>
    
                <div className="subboxBeT2">
    
                    <div className="titBeT"> 
                        {'{'} Banho e Tosa {'}'}
                    </div>

                    <div className="boxBeT">
    
                        <div className="dsformulariosBeT">
                            <h4> Banho: </h4>
                            <h4> Tosa: </h4>
                            <h4> Cuidados com as unhas: </h4>
                            <h4> Cuidados com os dentes: </h4>
                            <h4> Observação: </h4>
                            <h4> Horario: </h4>
                            <h4> Data de Atendimento: </h4>
                            <h4> Local: </h4>
                            <h4> Pet: </h4>
                        </div>
    
                        <form className="formulariosBeT">
                            
                            <input type="checkbox"
                                value= {Banho} 
                                onChange ={x => setBanho(Boolean(x.target.value))}
                            />
                            
                            <input type="checkbox"
                                value={Tosa}
                                onChange ={x => setTosa(Boolean(x.target.value))}
                            />
    
                            <input type="checkbox" 
                            value={Unhas}
                            onChange ={x => setUnhas (Boolean(x.target.value))}
                            />
                            
                            <input type="checkbox" 
                            value={Dentes}
                            onChange ={x => setDentes (Boolean(x.target.value))}
                            />
                           
                            <input type="text" 
                            value={Observacoes}
                            onChange ={x => setObservacoes (x.target.value)}
                            />
                            
                            <input type="time" min="08:00" max="18:00" 
                            value={Horario}
                            onChange ={x => setHorario (x.target.value)}
                            />
                            
                            <input type="date" 
                            value={Data}
                            onChange ={x => setData (x.target.value)}
                            />

                            <select name="local"
                            value={Local}
                            onChange ={x => setLocal (x.target.value)}
                            >
                                <option value="" disabled selected> Selecione uma opção </option>
                                <option value="KitsuneVet Santo Amaro"> KitsuneVet Santo Amaro </option>
                                <option value="KitsuneVet Jardim São Bernardo"> KitsuneVet Jardim São Bernardo </option>
                            </select>
    
                            <select
                            value={Pet}
                            onChange ={x => setPet (x.target.value)}
                            >
                                <option value="" disabled selected> Selecione uma opção </option>
                                {cookie.pets.map(item =>
                                    <option value={item.idPet}>{item.nomePet}</option>
                                )}
                                
                            </select>
    
                        </form>
    
                    </div>
    
                    <div className="botaoBeT">
                        <button onClick={salvarClick}> Agendar </button>
                    </div>
    
                </div> 
                
                <div className="subboxBeT3">
                    <img src={imagem2} width="300px" height="300px" alt="erro"/>
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

        </div>
        
    );

}