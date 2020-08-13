import React from 'react'
import DividerMui from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ spacing, palette }) => ({
	root: {
		margin: spacing(2, 0),
		color: palette.secondary.dark,
	},
}))

function Divider() {
	const classes = useStyles()
	return <DividerMui className={classes.root} />
}

export default Divider
