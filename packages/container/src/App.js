import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import Header from './components/Header';
import Progress from './components/Progress';
const AuthLazy = lazy(() => import('./components/AuthApp'));
const MarketingLazy = lazy(() => import('./components/MarketingApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

export default () => {

  const [isSignedIn, setSignedIn] = useState(false)

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <div>
            <Header isSignedIn={isSignedIn} onSignOut={() => setSignedIn(false)} />
            <Suspense fallback={<Progress />}>
              <Switch>
                <Route path="/auth/">
                  <AuthLazy onSignIn={() => setSignedIn(true)} />
                </Route>
                <Route path="/" component={MarketingLazy} />
              </Switch>
            </Suspense>
          </div>
        </BrowserRouter>
      </StylesProvider>
    </div>
  )
}

