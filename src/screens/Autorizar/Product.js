import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

function Product({ classes }) {
	return (
		<Grid container item md={12}>
			<img className={classes.img} src="aslhkash"></img>
			<Grid>
				<Typography className={classes.label}>kajsglkasgdlashg</Typography>
				<Typography className={classes.id}>ID: 123123</Typography>
				<Typography>kajsglkasgdlashg</Typography>
			</Grid>
		</Grid>
	)
}

export default Product
