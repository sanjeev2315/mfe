import React from 'react';
import { Switch, MemoryRouter, Route } from 'react-router';
import { StylesProvider } from '@material-ui/styles';

import Landing from './Landing';
import Pricing from './Pricing';

export const AppComponent = () => {
    return <>
    <StylesProvider>
        <MemoryRouter>
        <Switch>
            <Route exact path="/pricing" component={Pricing}/>
            <Route  path="/" component={Landing}/>            
        </Switch>
        </MemoryRouter>
    </StylesProvider>
    </>
}


