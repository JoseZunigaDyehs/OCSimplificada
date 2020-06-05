import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
	root: {
		'& > div': {
			padding: spacing(0, 1.5, 0, 0),
			[breakpoints.down(`sm`)]: {
				padding: 0,
			},
		},
		'& > div:nth-child(2n)': {
			padding: spacing(0, 0, 0, 1.5),
			[breakpoints.down(`sm`)]: {
				padding: 0,
			},
		},
	},
}))

function MarginWrapperInput({ children }) {
	const classes = useStyles()
	return (
		<Grid container className={classes.root}>
			{children}
		</Grid>
	)
}

export default MarginWrapperInput
