import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from 'config/theme'
import { routes } from 'routes'
import Header from 'components/Header'
import { OrdenProvider } from 'context/OrdenContext'
import Layout from 'screens/Layout'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <OrdenProvider>
        <Layout>
          <Router>
            <Switch>
              {routes.map(({ path, component }) => (
                <Route key={path} path={path} exact component={component} />
              ))}
              <Redirect to={routes[0].path} />
            </Switch>
          </Router>
        </Layout>
      </OrdenProvider>
    </ThemeProvider>
  )
}

export default App
