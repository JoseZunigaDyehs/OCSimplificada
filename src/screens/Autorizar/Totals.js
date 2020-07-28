import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Divider } from 'components'

function Totals({ classes }) {
	return (
		<Grid item md={5} sm={12} className={classes.wrapper} container>
			<Grid item md={5} container justify="flex-end">
				<Typography className={classes.id}>Total del convenio</Typography>
			</Grid>
			<Grid item md={7} container justify="flex-end">
				<Typography className={classes.id}>$ 120.002</Typography>
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
					$ 120.002
				</Typography>
			</Grid>
			<Grid item md={5} container justify="flex-end">
				<Typography className={classes.pb}>IVA 19%</Typography>
			</Grid>
			<Grid item md={7} container justify="flex-end">
				<Typography className={classes.pb}>$ 22.800</Typography>
			</Grid>
			<Grid item md={5} container justify="flex-end">
				<Typography className={classes.pb}>Impuestos especificos</Typography>
			</Grid>
			<Grid item md={7} container justify="flex-end">
				<Typography className={classes.pb}>$ 0</Typography>
			</Grid>
			<Grid item md={12}>
				<Divider />
			</Grid>
			<Grid item md={5} container justify="flex-end">
				<Typography className={classes.id}>Total final</Typography>
			</Grid>
			<Grid item md={7} container justify="flex-end">
				<Typography className={classes.id}>$ 142.802</Typography>
			</Grid>
		</Grid>
	)
}

export default Totals
