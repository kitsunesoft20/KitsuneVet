
import React, { useState } from 'react'

import './CirurgiaPet.css'

import Cabecalho from '../../Components/Cabecalho'
import Rodape from '../../Components/Rodape'

import imagem1 from './imagens/cirurgia01.png';
import imagem2 from './imagens/gatinho.png';

export default function Cirurgia(props)  {

    const[TipoCirurgia,setTipoCirurgia]=useState('');
    const[Observacoes,setObservacoes]=useState('');
    const[DtCirurgia,setDtCirurgia]=useState('');
    const[Horario,setHorario]=useState('');
    const[local,setlocal]=useState('');
    const[Pet,setPet]=useState('');

    return (
        <body>
            
            <Cabecalho infoLogin={props}/>

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
                                <h4>Local: </h4>
                                <h4> Pet: </h4>

                            </div>
                                        
                            <form class="formularios">

                            <select name="cirurgias" id="cirurgias" placeholder="cirurgias">
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
                            

                                <input type="text" id="fname" name="fname" />
                                
                                <input type="date" id="fdate" name="fdate" />

                                <input type="time" id="time" name="time" />

                                <select name="local">
                                    <option value="" disabled selected> </option>
                                    <option value="KitsuneVet Santo Amaro"> KitsuneVet Santo Amaro </option>
                                    <option value="KitsuneVet Jardim São Bernardo"> KitsuneVet Jardim São Bernardo </option>
                                </select>

                                <select name="tipodepet" id="tipodepet" placeholder="tipodepet">
                                    <option value="" disabled selected> </option>
                                    <option value="gato"> Gato </option>
                                    <option value="cachorro"> Cachorro </option>
                                </select>

                            </form>

                        </div>

                        <div class="ana">
                            <input type="submit" value="Agendar Cirurgia" />
                        </div>

                    </div> 
                    
                    <div class="container5">
                        <img src={imagem2} width="300px" height="300px" alt="erro"/>
                    </div>

                </div>

            </div>
            
            <Rodape />

        </body>
    );

}