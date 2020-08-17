import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

function Product({ nombre, id, cantidad, img = '/asd', classes }) {
	return (
		<Grid container item md={12}>
			<img className={classes.img} alt="foto" src={img}></img>
			<Grid>
				<Typography className={classes.label}>{nombre}</Typography>
				<Typography className={classes.id}>ID: {id}</Typography>
				<Typography>
					Cantidad {cantidad} Unidad{cantidad > 1 ? '' : 'es'}
				</Typography>
			</Grid>
		</Grid>
	)
}

export default Product
