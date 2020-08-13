import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Divider from './common/Divider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { formatThousand } from 'utils'

const useStyles = makeStyles(
	({ spacing, fontSizes, breakpoints, fontWeights, palette }) => ({
		wrapper: {
			marginTop: spacing(3),
			marginBottom: spacing(2),
			border: `1px solid #e0e0e0`,
			padding: spacing(3),
		},
		subtitle2: {
			fontWeight: fontWeights[3],
			letterSpacing: 0.8,
		},
		mt: {
			marginTop: spacing(2),
		},
		icon: {
			fontSize: fontSizes[5],
			color: palette.primary.main,
			marginLeft: spacing(1),
			cursor: 'pointer',
		},
	})
)

function Items({ data = [] }) {
	const classes = useStyles()
	return (
		<Grid item md={12} container className={classes.mt}>
			{data.map((x, index) => (
				<React.Fragment>
					<Grid item md={4}>
						<Typography variant="body2" className={classes.subtitle2}>
							{x.nombre}
						</Typography>
						<Typography variant="subtitle2">{`Cantidad: ${formatThousand(
							x.cantidad
						)}`}</Typography>
					</Grid>
					<Grid item md={4}>
						{index === 0 && (
							<Typography variant="subtitle2" className={classes.subtitle2}>
								UNITARIO
							</Typography>
						)}
						<Typography variant="subtitle2">{`$ ${formatThousand(
							x.precioUnitario
						)}`}</Typography>
					</Grid>
					<Grid item md={4}>
						{index === 0 && (
							<Typography variant="subtitle2" className={classes.subtitle2}>
								SUBTOTAL
							</Typography>
						)}
						<Typography variant="subtitle2">{`$ ${formatThousand(
							x.precioUnitario * x.cantidad
						)}`}</Typography>
					</Grid>
					{index !== data.length - 1 && (
						<Grid item md={12}>
							<Divider />
						</Grid>
					)}
				</React.Fragment>
			))}
		</Grid>
	)
}

function DetalleProductos({
	data = [
		{ nombre: 'Producto 1', cantidad: 2443, precioUnitario: 58890 },
		{ nombre: 'Producto 2', cantidad: 23, precioUnitario: 58890 },
		{ nombre: 'Producto 3', cantidad: 23, precioUnitario: 58890 },
	],
}) {
	const classes = useStyles()
	const [optional, setOptional] = useState(false)
	return (
		<Grid container className={classes.wrapper}>
			<Grid item md={12} container justify="space-between">
				<Typography variant="h3">Detalle de productos</Typography>
				<FontAwesomeIcon
					icon={optional ? faAngleUp : faAngleDown}
					className={classes.icon}
					onClick={() => setOptional(!optional)}
				/>
			</Grid>
			{optional && <Items data={data} />}
		</Grid>
	)
}

export default DetalleProductos
