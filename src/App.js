import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from 'config/theme'
import { routes } from 'routes'
import { OrdenProvider, RegionComunasProvider, FeedbackProvider } from 'context'
import Layout from 'screens/Layout'
import './assets/main.css'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<FeedbackProvider>
				<OrdenProvider>
					<RegionComunasProvider>
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
					</RegionComunasProvider>
				</OrdenProvider>
			</FeedbackProvider>
		</ThemeProvider>
	)
}

export default App
