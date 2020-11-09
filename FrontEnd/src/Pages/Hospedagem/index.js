
import React from 'react'

import './hospedagem.css';
import Cabecalho from '../../Components/Cabecalho';
import Rodape from '../../Components/Rodape';

export default function Hospedagem()  {
    return (
        <body>
    
            <Cabecalho />

            <form class="form">
                <div class = "corp">
                    
                    <div class="mini">

                        <div class="til">
                        <h1>Hospedagem</h1>
                        </div>

                        <div class= "ensa">
                            <select name="pet" placeholder="pet">
                                <option value="Pet"> Pet </option>
                                <option value="Nome"> Nome </option>
                            </select>
                        </div>
                    
                        <div class= "cai">

                            <div class= "su">
                                <h3> Data de Entrada: </h3>
                                <input type="date" />
                            </div>

                            <h3>Horário de Entrada:</h3>
                            <input type="time" />
                        
                        </div>


                        <div class= "hor">

                            <div class="su">
                                <h3> Data de Saída: </h3>
                                <input type="date" />
                            </div>

                            <h3>Horário de Saída: </h3>
                            <input type="time" />

                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                Entregue em casa? (Será levado ao endereço associado a esta conta)
                            </label>
                        </div>

                        <div class= "loc">
                            <select name="Local" placeholder="Local">
                                <option value="Local"> Local</option>
                                <option value="Local"> endereço</option>
                            </select>
                        </div>

                        <div class = "obs">
                            <input type="text" placeholder="Observações" />
                        </div>

                        <div class="but">
                            <button class= "bt"><h3>Prosseguir</h3></button>
                        </div>
                    </div>

                </div>

            </form>  

            <Rodape/>

        </body>

    );

}