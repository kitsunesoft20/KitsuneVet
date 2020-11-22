
import React, { useEffect, useRef, useState } from 'react'

import './banhoetosa.css'
import Cabecalho from '../../Components/Cabecalho';
import Rodape from '../../Components/Rodape';

import imagem1 from './imagens/semfundo02.png';
import imagem2 from './imagens/semfundo03.png';

import LoadingBar from 'react-top-loading-bar';
import KitsuneVetApi from '../../services/KitsuneVetApi';

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
    const [IdCliente, setIdCliente] = useState('');

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
                            <h4> Local: </h4>
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

                            <select name="local">
                                <option value="" disabled selected> </option>
                                <option value="KitsuneVet Santo Amaro"> KitsuneVet Santo Amaro </option>
                                <option value="KitsuneVet Jardim São Bernardo"> KitsuneVet Jardim São Bernardo </option>

                            </select>
    
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