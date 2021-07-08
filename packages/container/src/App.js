import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

export const App = () => {
    return  <StylesProvider generateClassName= {generateClassName}>
    <MemoryRouter>
        <div>
            <Header/>
            <MarketingApp/>
        </div>
    </MemoryRouter>
    </StylesProvider>
}

export default App;