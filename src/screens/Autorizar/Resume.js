import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Divider, TextWrapper } from 'components'
import Product from './Product'

function Resume({
	classes,
	regionLabel,
	withDireccionDespacho,
	direccionDespacho,
	detalleProductos,
}) {
	return (
		<Grid container className={classes.wrapper}>
			<Grid item md={12} className={classes.mb}>
				<Typography variant="h4">{regionLabel}</Typography>
			</Grid>
			{withDireccionDespacho && (
				<Grid item md={6}>
					<TextWrapper label="Dirección" subLabel={direccionDespacho} />
				</Grid>
			)}
			{/* <Grid item md={6}>
				<TextWrapper label="Plan de entrega" subLabel="akjshajsdh" />
			</Grid> */}
			<Grid item md={12}>
				<Divider />
			</Grid>
			{detalleProductos.productos.map((producto, index) => (
				<Grid key={index} item md={3} sm={12}>
					<Product {...producto} classes={classes} />
				</Grid>
			))}
		</Grid>
	)
}

export default Resume
