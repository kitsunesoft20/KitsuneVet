
import React from 'react'

import './banhoetosa.css'
import Cabecalho from '../../Components/Cabecalho';
import Rodape from '../../Components/Rodape';

import imagem1 from './imagens/semfundo02.png';
import imagem2 from './imagens/semfundo03.png';

export default function BanhoeTosa()  {
    return (

        <div className="inicioBeT">

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
                           <h4> Pet: </h4>
                        </div>
    
                        <form className="formulariosBeT">
                            
                            <input type="checkbox" />
                            
                            <input type="checkbox" />
    
                            <input type="checkbox" />
                            
                            <input type="checkbox" />
                           
                            <input type="text" />
                            
                            <input type="time" min="08:00" max="18:00" />
                            
                            <input type="date" />
    
                            <select name="tipodepet" placeholder="tipodepet">
                                <option value="" disabled selected> Selecione uma opção </option>
                                <option value="feminino"> Gato </option>
                                <option value="masculino"> Cachorro </option>
                            </select>
    
                        </form>
    
                    </div>
    
                    <div className="botaoBeT">
                        <button> Agendar </button>
                    </div>
    
                </div> 
                
                <div className="subboxBeT3">
                    <img src={imagem2} width="300px" height="300px" alt="erro"/>
                </div>
    
            </div>
    
            <Rodape />

        </div>
        
    );

}