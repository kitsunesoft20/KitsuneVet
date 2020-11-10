
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
                        {'{'} Hospedagem {'}'}
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

                        <div class="formcheck">
                            <input class="form-check-input" type="checkbox" id="defaultCheck1" />
                            Entregue em casa? (Será levado ao endereço associado a esta conta)
                        </div>

                        <div class= "loc">
                            Local:
                            <select name="Local" placeholder="Local">
                                <option value="" disabled selected> </option>
                                <option value="KitsuneVet Santo Amaro"> KitsuneVet Santo Amaro </option>
                                <option value="KitsuneVet Jardim São Bernardo"> KitsuneVet Jardim São Bernardo </option>
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