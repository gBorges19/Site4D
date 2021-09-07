import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Times from './pages/Times';
import Parceiros from './pages/Parceiros';
import Campeonatos from './pages/Campeonatos';
import Contato from './pages/Contato';
import GlobalStyle from './assets/styles/global';
import Organizacao from './pages/Organizacao';
import Streams from './pages/Streams';
import Midia from './pages/Midia';


function Routes(){

    return(

        <Switch>
            <Route exact path="/">
                <Home />
                <GlobalStyle />
            </Route>
            <Route exact path="/Times">
                <Times />
                <GlobalStyle />
            </Route>
            <Route exact path="/Contato">
                <Contato />
                <GlobalStyle />
            </Route>
            <Route exact path="/Parceiros">
                <Parceiros />
                <GlobalStyle />
            </Route>
            <Route exact path="/Campeonatos">
                <Campeonatos />
                <GlobalStyle />
            </Route>
            <Route exact path="/Organizacao">
                <Organizacao />
                <GlobalStyle />
            </Route>
            <Route exact path="/Streams">
                <Streams />
                <GlobalStyle />
            </Route>
            <Route exact path="/Midia">
                <Midia />
                <GlobalStyle />
            </Route>
        </Switch>

    );

}

export default Routes;