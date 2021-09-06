import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Times from './pages/Times'
import Parceiros from './pages/Parceiros'
import Contato from './pages/Contato'
import GlobalStyle from './assets/styles/global';


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
        </Switch>

    );

}

export default Routes;