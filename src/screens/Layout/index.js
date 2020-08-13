import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Header } from 'components'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ spacing }) => ({
	root: {
		padding: spacing(3, 4),
	},
	wrapper: {
		maxWidth: '1300px',
	},
}))

function Layout({ children }) {
	const { root, wrapper } = useStyles()
	return (
		<Grid container className={root}>
			<Header />
			{children}
		</Grid>
	)
}

export default Layout

// <Grid container className={root} justify="center">
// <Grid className={wrapper}> */}
// </Grid> */}
// </Grid>
