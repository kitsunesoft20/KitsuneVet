
import React, { useEffect, useState } from 'react'

import './exame.css';

import Cabecalho from '../../Components/Cabecalho'
import Rodape from '../../Components/Rodape'

export default function Exame(props)  {

    const [logado,setLogado] = useState(false);
    const [emailP,setEmailP] = useState('');
    const [idCliente,setidCliente] = useState('');
    const [nomeCliente,setNomeCliente] = useState('');

    useEffect(() => {
        if(props.location.state !== undefined)
        {
            setLogado(true);
            setEmailP(props.location.state.email);
            setidCliente(props.location.state.idCliente);
            setNomeCliente(props.location.state.nomeCliente);
        }
    });

    const af = {
        email: emailP,
        idCliente: idCliente,
        logado: logado,
        nomeCliente: nomeCliente
    };

    const[Exame,setExame]= useState('')
    const[Pet,setPet]= useState('')
    const[TpExame,setTpExame]= useState('')
    const[DtAtendimento,setDtAtendimento]= useState('')
    const[Horario,setHorario]= useState('')
    const[local,setlocal]= useState('')
    const[Endereco,setEndereco]= useState('')

    return (
        <body>

            <Cabecalho props={af}/>

            <form >
                <div class="tudo">
                    <div class= "quase">
            
                        <div class="nome">
                            <h1>Exames</h1>
                        </div>
                
                        <div class="um">
                            <select name="pet" placeholder="pet">
                                <option value="Pet"> Pet </option>
                                <option value="Nome"> Nome </option>
                            </select>
                        </div>
                
                        <div class="dois">
                            <select name="Tipo" placeholder="tipo">
                                <option value="Tipo de Exame"> Tipo de Exame </option>
                                <option value="Oftalmologista"> Oftalmologista </option>
                            </select>
                        </div>
                
                        <div class="tres">
                            <h3>Data do Atendimento</h3>
                            <input type="date" />
                        </div>
                
                        <div class="quatro">
                            <h3>Horário</h3>   
                            <div class="for">
                                <input type="time" />
                            </div>
                        </div>
                
                        <div class="cinco">
                            <select name="loc" placeholder="loc">
                                <option value="local"> local </option>
                                <option value="Nome"> endereço </option>
                            </select>
                        </div>
                
                        <div class="seis">
                            <input type="text" placeholder="Observações" />
                        </div>
                    
                        <div class="sete">
                            <button class= "bt"><h3>Prosseguir</h3></button>
                        </div>
            
                    </div>

                </div>   

            </form>
            
            <Rodape/>

        </body>
    );

}