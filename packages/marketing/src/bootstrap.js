import React from 'react';
import ReactDOM from 'react-dom';

import { AppComponent } from './App';


const mount = (el) => {    
    ReactDOM.render( <AppComponent/>  , el)         
}


if(process.env.NODE_ENV==='development'){
    const marketingDiv = document.querySelector('#marketing-div')
    if(marketingDiv){
        mount(marketingDiv)
    }
}

export {mount};
