import React from 'react'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ spacing, palette }) => ({
	loading: {
		background: `trasparent`,
	},
	icon: {
		color: palette.primary.main,
	},
}))

function Loader({ height = `100vh`, type = 'default' }) {
	const classes = useStyles()
	const sizeIcon = type == 'input' ? '20px' : '56px'
	return (
		<Grid
			className={classes.loading}
			item
			container
			xs={12}
			justify="center"
			alignItems="center"
			style={{ height }}
		>
			<CircularProgress
				style={{
					height: sizeIcon,
					width: sizeIcon,
				}}
				className={classes.icon}
			/>
		</Grid>
	)
}

export default Loader
