import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Button } from 'components'
import { makeStyles } from '@material-ui/core/styles'
import { goBack } from 'utils'
import Resume from './Resume'
import Pago from './Pago'
import Totals from './Totals'
import NotifyModal from './NotifyModal'
import { useOrden } from 'context'

const useStyles = makeStyles(({ spacing, palette, fontWeights }) => ({
	root: {
		flexGrow: 1,
	},
	wrapper: {
		border: `1px solid ${palette.terniary.dark}`,
		borderRadius: '5px',
		padding: spacing(2),
		marginTop: spacing(2),
		marginBottom: spacing(3),
	},
	mb: {
		marginBottom: spacing(2),
	},
	pb: {
		paddingBottom: spacing(1),
	},
	label: {
		paddingBottom: spacing(1),
		fontWeight: fontWeights[2],
	},
	id: {
		fontWeight: fontWeights[2],
	},
	wrapperPagos: {
		marginTop: spacing(3),
	},
	buttons: {
		paddingTop: spacing(6),
	},
	img: {
		height: '80px',
		width: '80px',
		marginRight: spacing(2),
	},
}))

function Autorizar() {
	const classes = useStyles()
	const [modal, setModal] = useState(false)
	const {
		orden: {
			detalleProductos,
			regionLabel,
			withDireccionDespacho,
			direccionDespacho,
			plazoPago,
			nombreContactoCompra,
			apellidoContactoCompra,
			direccionEnvioFactura,
			totals,
		},
	} = useOrden()
	const onAccept = () => {
		setModal(true)
	}
	const resumeProps = {
		regionLabel,
		withDireccionDespacho,
		direccionDespacho: `${direccionDespacho.label}, ${direccionDespacho.comunaLabel}`,
		detalleProductos,
	}
	const pagoProps = {
		plazoPago,
		contacto: `${nombreContactoCompra} ${apellidoContactoCompra}`,
		direccionEnvioFactura,
	}
	return (
		<Grid container className={classes.root}>
			<Grid item sm={12}>
				<Typography variant="h3">Resumen</Typography>
				<Typography variant="subtitle2">Producto/Servicio</Typography>
			</Grid>
			<Resume {...resumeProps} classes={classes} />
			<Pago {...pagoProps} classes={classes} />
			<Totals {...totals} classes={classes} />
			<Grid
				item
				xs={12}
				justify="space-between"
				container
				className={classes.buttons}
			>
				<Button color="secondary" variant="outlined" onClick={goBack}>
					Volver
				</Button>
				<Button color="success" onClick={onAccept}>
					Autorizar Orden de Compra
				</Button>
			</Grid>
			{modal && <NotifyModal />}
		</Grid>
	)
}

export default Autorizar
