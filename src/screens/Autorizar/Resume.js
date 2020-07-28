import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Divider, TextWrapper } from 'components'
import Product from './Product'

function Resume({ classes }) {
	return (
		<Grid container className={classes.wrapper}>
			<Grid item md={12} className={classes.mb}>
				<Typography variant="h4">Región Metropolitana</Typography>
			</Grid>
			<Grid item md={6}>
				<TextWrapper label="Dirección" subLabel="akjshajsdh" />
			</Grid>
			<Grid item md={6}>
				<TextWrapper label="Plan de entrega" subLabel="akjshajsdh" />
			</Grid>
			<Grid item md={12}>
				<Divider />
			</Grid>
			<Grid item md={12}>
				<Product classes={classes} />
			</Grid>
		</Grid>
	)
}

export default Resume
