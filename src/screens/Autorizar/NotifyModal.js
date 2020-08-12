import React from 'react'
import { ModalWrapper } from 'components'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(({ spacing, shadows, palette }) => ({
	wrapper: {
		backgroundColor: palette.terniary.main,
		padding: spacing(4, 3),
		borderRadius: 6,
		boxShadow: shadows[1],
	},
	root: {
		padding: spacing(1, 0, 3, 0),
	},
}))

function NotifyModal({ oc = '234234234', estado = 'Autorizada' }) {
	const classes = useStyles()
	return (
		<ModalWrapper
			title="Comprobante de la orden de compra"
			withClose={false}
			onAcceptText="Ir a la ficha de la Orden de Compra"
			onCancelText="Volver al carro de compras"
			buttonsOrientation="horizontal"
			maxWidth="800px"
		>
			<Grid container justify="space-around" className={classes.root}>
				<Grid item md={5} className={classes.wrapper}>
					<Typography variant="h5">Orden de compra</Typography>
					<Typography variant="h3">N° {oc}</Typography>
				</Grid>
				<Grid item md={5} className={classes.wrapper}>
					<Typography variant="h5">Estado de la Orden de Compra</Typography>
					<Typography variant="h3">N° {estado}</Typography>
				</Grid>
			</Grid>
		</ModalWrapper>
	)
}

export default NotifyModal
