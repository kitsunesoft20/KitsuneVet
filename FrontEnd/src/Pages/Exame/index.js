
import React from 'react'

import './exame.css';

import Cabecalho from '../../Components/Cabecalho'
import Rodape from '../../Components/Rodape'

export default function Exame()  {
    const[Exames,set]=useState('')
    const[Pet,set]=useState('')
    const[Nome,set]=useState('')
    const[TpExame,set]=useState('')
    const[Oftal,set]=useState('')
    const[DtAtendimento,set]=useState('')
    const[Horario,set]=useState('')
    const[local,set]=useState('')
    const[Endereco,set]=useState('')


    return (
        <body>

            <Cabecalho />

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