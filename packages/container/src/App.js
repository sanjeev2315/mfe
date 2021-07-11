import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import Header from './components/Header';
import Progress from './components/Progress';
import { createBrowserHistory } from 'history';
const AuthLazy = lazy(() => import('./components/AuthApp'));
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

const history = createBrowserHistory()
export default () => {
  const [isSignedIn, setSignedIn] = useState(false)

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard')
    }
  }, [isSignedIn])

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <div>
            <Header isSignedIn={isSignedIn} onSignOut={() => setSignedIn(false)} />
            <Suspense fallback={<Progress />}>
              <Switch>
                <Route path="/auth/">
                  <AuthLazy onSignIn={() => setSignedIn(true)} />
                </Route>
                <Route path="/dashboard" >
                  {!isSignedIn && <Redirect to="/" />}
                  <DashboardLazy />
                </Route>
                <Route path="/" component={MarketingLazy} />
              </Switch>
            </Suspense>
          </div>
        </Router>
      </StylesProvider>
    </div>
  )
}

