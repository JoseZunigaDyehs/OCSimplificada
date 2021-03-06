import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ spacing, fontWeights, fontSizes }) => ({
	label: {
		// paddingBottom: spacing(1),
		fontWeight: fontWeights[3],
		fontSize: fontSizes[1],
	},
}))
function TextWrapper({ label, subLabel, className = '' }) {
	const classes = useStyles()
	return (
		<Grid className={className}>
			{label && <Typography className={classes.label}>{label}</Typography>}
			{typeof subLabel === 'string' ? (
				<Typography>{subLabel}</Typography>
			) : (
				subLabel
			)}
		</Grid>
	)
}

export default TextWrapper
