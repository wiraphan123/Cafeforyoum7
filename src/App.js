import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import withHelmet from './utils/withHelmet'
import routes from './config/routes'
import GlobalStyle from './components/GlobalStyle'
import NavBar from './components/NavBar/index'
function App () {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Suspense fallback='...loading'>
          <NavBar />
          <Switch>
            {Object.keys(routes).map(routeKey => (
              <Route
                key={routeKey}
                {...routes[routeKey]}
                // AutoGenerate
                // path={routes[routeKey].path}
                // exact={routes[routeKey].exact}
                // components={routes[routeKey].components}
              />
            ))}
          </Switch>
        </Suspense>
      </Router>
    </>
  )
}
export default withHelmet('Cafe for you')(App)