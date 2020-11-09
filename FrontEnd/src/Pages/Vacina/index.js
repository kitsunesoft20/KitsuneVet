
import React from 'react'

import './vacinacao.css';
import Cabecalho from '../../Components/Cabecalho';
import Rodape from '../../Components/Rodape';

export default function Vacina()  {
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
                                <h4> Observações: </h4>
                            </div>

                                        
                            <form class="formularios">
                                
                                <select name="tipodepet" id="tipodepet" placeholder="tipodepet">
                                    <option value="" disabled selected> </option>
                                    <option value="feminino"> Gato </option>
                                    <option value="masculino"> Cachorro </option>
                                </select>
                                
                                <select name="vacinacachorro" id="vacinacachorro" placeholder="vacinacachorro">
                                    <option value="" disabled selected> </option>
                                    <option value="v8 ou v10"> V8 ou V10 </option>
                                    <option value="gripe canina"> Gripe Canina </option>
                                    <option value="giardíese"> Giardíese </option>
                                    <option value="antí-rábica"> Antí-rábica(Raiva) </option>
                                </select>


                                <select name="vacinagato" id="vacinagato" placeholder="vacinagato">
                                    <option value="" disabled selected> </option>
                                    <option value="quádrupla felina"> Quádrupla Felina(1 Dose) </option>
                                    <option value="quádrupla felina"> Quádrupla Felina(2 Dose) </option>
                                    <option value="quádrupla felina"> Quádrupla Felina(3 Dose) </option>
                                    <option value="antí-rábica"> Antí-rábica(Raiva) </option>
                                    <option value="quádrupla felina"> Quádrupla dose unica(A partir do 1 ano de idade)</option>
                                </select>
                                
                                <input type="time" id="time" name="time" />
                                
                                <input type="date" id="fdate" name="fdate" />

                                <input type="text" id="fname" name="fname" />

                            </form>

                        </div>

                        <div class="ana">
                            <input type="submit" value="Agendar" />
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