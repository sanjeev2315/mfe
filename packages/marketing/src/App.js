import React from 'react';
import { Switch, MemoryRouter, Route } from 'react-router';
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';

import Landing from './Landing';
import Pricing from './Pricing';

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma'
})

export const AppComponent = () => {
    return <>
    <StylesProvider generateClassName= {generateClassName}>
        <MemoryRouter>
        <Switch>
            <Route exact path="/pricing" component={Pricing}/>
            <Route  path="/" component={Landing}/>            
        </Switch>
        </MemoryRouter>
    </StylesProvider>
    </>
}


