import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Divider } from 'components'
import { formatThousand } from 'utils'

function Totals({
	totalConvenio,
	subtotal,
	iva,
	impuestos,
	totalFinal,
	classes,
}) {
	return (
		<Grid item md={5} sm={12} className={classes.wrapper} container>
			<Grid item md={5} container justify="flex-end">
				<Typography className={classes.id}>Total del convenio</Typography>
			</Grid>
			<Grid item md={7} container justify="flex-end">
				<Typography className={classes.id}>
					${formatThousand(totalConvenio)}
				</Typography>
			</Grid>
			<Grid item md={12}>
				<Divider />
			</Grid>
			<Grid item md={5} container justify="flex-end">
				<Typography className={`${classes.id} ${classes.pb}`}>
					Subtotal
				</Typography>
			</Grid>
			<Grid item md={7} container justify="flex-end">
				<Typography className={`${classes.id} ${classes.pb}`}>
					${formatThousand(subtotal)}
				</Typography>
			</Grid>
			<Grid item md={5} container justify="flex-end">
				<Typography className={classes.pb}>IVA 19%</Typography>
			</Grid>
			<Grid item md={7} container justify="flex-end">
				<Typography className={classes.pb}>${formatThousand(iva)}</Typography>
			</Grid>
			<Grid item md={5} container justify="flex-end">
				<Typography className={classes.pb}>Impuestos especificos</Typography>
			</Grid>
			<Grid item md={7} container justify="flex-end">
				<Typography className={classes.pb}>
					${formatThousand(impuestos)}
				</Typography>
			</Grid>
			<Grid item md={12}>
				<Divider />
			</Grid>
			<Grid item md={5} container justify="flex-end">
				<Typography className={classes.id}>Total final</Typography>
			</Grid>
			<Grid item md={7} container justify="flex-end">
				<Typography className={classes.id}>
					${formatThousand(totalFinal)}
				</Typography>
			</Grid>
		</Grid>
	)
}

export default Totals
