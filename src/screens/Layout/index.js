import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Header } from 'components'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ spacing }) => ({
	root: {
		padding: spacing(3, 4),
	},
}))

function Layout({ children }) {
	const { root } = useStyles()
	return (
		<Grid container className={root}>
			<Header />
			{children}
		</Grid>
	)
}

export default Layout
