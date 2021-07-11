import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';


const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    console.log('asas', defaultHistory)
    const history = defaultHistory ?? createMemoryHistory({
        initialEntries: [initialPath]
    });
    history.listen(onNavigate);
    ReactDOM.render(< App history={history}
    />, el)
    return {
        onParentNavigate: ({ pathname: nextPathname }) => {
            const { pathname } = history.location;
            if (pathname !== nextPathname) {
                history.push(nextPathname)
            }
        }
    }
}


if (process.env.NODE_ENV === 'development') {
    const marketingDiv = document.querySelector('#marketing-div')
    if (marketingDiv) {
        mount(marketingDiv, { defaultHistory: createBrowserHistory() })
    }
}

export { mount };