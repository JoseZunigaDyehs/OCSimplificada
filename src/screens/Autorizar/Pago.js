import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { TextWrapper } from 'components'

function Pago({ classes }) {
	return (
		<Grid item md={7} sm={12} container>
			<Grid item md={12}>
				<Typography variant="h3" className={classes.mb}>
					Pago
				</Typography>
			</Grid>
			<Grid item md={6} sm={12}>
				<TextWrapper
					label="Plazo de pago"
					subLabel="akjshajsdh"
					className={classes.mb}
				/>
			</Grid>
			<Grid item md={6} sm={12}>
				<TextWrapper
					label="Contacto para esta compra"
					subLabel="akjshajsdh"
					className={classes.mb}
				/>
			</Grid>
			<Grid item md={6} sm={12}>
				<TextWrapper
					label="Dirección de envío de factura"
					subLabel="akjshajsdh"
					className={classes.mb}
				/>
			</Grid>
		</Grid>
	)
}

export default Pago
