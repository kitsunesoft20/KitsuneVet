
import React, { useEffect, useState } from 'react'

import './CirurgiaPet.css'
import Cabecalho from '../../Components/Cabecalho'
import Rodape from '../../Components/Rodape'

import imagem1 from './imagens/cirurgia01.png';
import imagem2 from './imagens/gatinho.png';

import Cookies from 'js-cookie';

import LoadingBar from 'react-top-loading-bar';
import KitsuneVetApi from '../../services/KitsuneVetApi';

const api = new KitsuneVetApi();

export default function Cirurgia()  {

    const[TipoCirurgia,setTipoCirurgia]=useState('');
    const[Observacoes,setObservacoes]=useState('');
    const[DtCirurgia,setDtCirurgia]=useState('');
    const[Horario,setHorario]=useState('');
    const[local,setlocal]=useState('');
    const[Pet,setPet]=useState('');

    const cookie = Cookies.getJSON('Login');

    let history = useHistory();
    const loadingBar = useRef(null);

    const salvarClick = async () => {

        try {

            loadingBar.current.continuousStart();

            const request = {
                IdPet: Pet,
                IdCliente: cookie.IdCliente,
                Cirurgia: TipoCirurgia,
                Data: DtCirurgia,
                Local: local,
                Observacoes: Observacoes
            };

            const resp = await api.AgendarCirurgia(request);

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
                        <img src={imagem1} width="300px" height="300px" alt="erro"/>
                    </div>

                    <div class="container3">

                        <div class="box4"> 
                            {'{'} Cirurgia {'}'}
                        </div>

                        <div class="elsa">

                            <div class="dsformularios">

                                <h4> Tipo de Cirurgia: </h4>
                                <h4> Observações: </h4>
                                <h4> Data da Cirurgia:</h4>
                                <h4> Horario: </h4>
                                <h4> Local: </h4>
                                <h4> Pet: </h4>

                            </div>
                                        
                            <form class="formularios">

                                <select 
                                    value = {TipoCirurgia}
                                    onChange={x => setTipoCirurgia(x.target.value)}
                                >
                                    <option value="" disabled selected> </option>
                                    <option value="ortopédicas"> Ortopédicas </option>
                                    <option value="coluna"> Coluna </option>
                                    <option value="abdominais"> Abdominais </option>
                                    <option value="Cárdicas">Cárdicas  </option>  
                                    <option value="biopsias de fígado"> Biopsias de fígado </option>
                                    <option value="biopsias de baço"> Biopsias de baço </option>
                                    <option value="biopsias de pulmão"> Biopsias de pulmão </option>
                                    <option value="biopsias de pele"> Biopsias de pele </option>
                                    <option value="remoção de tumores "> Remoção de tumores  </option>
                                    <option value="oftálmicas">Oftálmicas</option>
                                    <option value="oncológicas">Oncológicas</option>
                                    <option value="torax">Tórax</option>
                                    <option value="hemilaminectomia">Hemilaminectomia</option>
                                    <option value="fenestração ">Fenestração </option>
                                    <option value="amputação">Amputação</option>
                                    <option value="castração">Castração</option>
                                </select>
                            

                                <input type="text" 
                                value = {Observacoes}
                                onChange={x => setObservacoes(x.target.value)}
                                />
                                
                                <input type="date" 
                                value = {DtCirurgia}
                                onChange={x => setDtCirurgia(x.target.value)}
                                />

                                <input type="time" 
                                value = {Horario}
                                onChange={x => setHorario(x.target.value)}
                                />

                                <select 
                                value = {local}
                                onChange={x => setlocal(x.target.value)}
                                >
                                    <option value="" disabled selected> </option>
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

                        <div class="ana">
                            <button onClick={salvarClick}> Agendar </button>
                        </div>

                    </div> 
                    
                    <div class="container5">
                        <img src={imagem2} width="300px" height="300px" alt="erro"/>
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