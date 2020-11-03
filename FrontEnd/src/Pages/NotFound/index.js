
import React from 'react'

import birdgif from './imagens/sadbirdgif.gif';

import './notfound.css';

export default function NotFound()  {
    return (
        <body> 

        <div className="divnf">
            <div className="boxnotfound">
                {'{'} 404 NotFound {'}'}
                <p> Ops! Página não encontrada <span> &#128546 </span>; </p>
                <img src={birdgif} width="300px" height="300px" alt=""/>
            </div>
        </div>

        </body>
    );

}