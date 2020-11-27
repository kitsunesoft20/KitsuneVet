
import React from 'react';

import Home from './Pages/Home';
import Cadastrar from './Pages/Cadastrar';
import NotFound from './Pages/NotFound';
import vacina from './Pages/Vacina';
import Cirurgia from './Pages/Cirurgia';
import Exame from './Pages/Exame';
import Hospedagem from './Pages/Hospedagem';
import BanhoeTosa from './Pages/BanhoeTosa';
import Login from './Pages/Login';
import CadastroPet from './Pages/CadastroPet';
import Perfil from './Pages/Perfil';
import AlterarPerfil from './Pages/AlterarPerfil';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default function Routes() {

    return(

    <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/cadastro" component={Cadastrar} />
          <Route path="/login" component={Login} />
          <Route path="/CadastroPet" component={CadastroPet} />
          <Route path="/agendamentohospedagem" component={Hospedagem} />
          <Route path="/agendamentovacina" component={vacina} />
          <Route path="/agendamentocirurgia" component={Cirurgia} />
          <Route path="/agendamentoexame" component={Exame} />
          <Route path="/agendamentobanhoetosa" component={BanhoeTosa} />
          <Route path="/Perfil" component={Perfil} />
          <Route path="/alterarperfil" component={AlterarPerfil} />
          <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>

    )
}