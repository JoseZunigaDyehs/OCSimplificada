import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useOrden } from 'context/OrdenContext'
import { makeStyles } from '@material-ui/core/styles'
import { Divider } from '@material-ui/core'

const useStyles = makeStyles(({ spacing }) => ({
	wrapper: {
		paddingBottom: spacing(3),
	},
	mb: {
		marginBottom: spacing(1),
	},
	mb_1_3: {
		marginBottom: spacing(1.3),
	},
}))

function Header() {
	const classes = useStyles()
	const {
		orden: { ordenId, convenioMarco },
	} = useOrden()
	return (
		<Grid container alignItems="flex-start" className={classes.wrapper}>
			<Grid item md={9}>
				<Typography
					className={classes.mb}
					variant="h2"
				>{`Orden de compra ${ordenId}`}</Typography>
				<Typography
					variant="subtitle2"
					className={classes.mb_1_3}
				>{`Proveniente desde Compra Ágil ${convenioMarco}.`}</Typography>
				<Divider />
			</Grid>
		</Grid>
	)
}

export default Header
