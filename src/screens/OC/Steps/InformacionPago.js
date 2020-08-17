import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { TextInput, RadioButton } from 'components/fieldsForm'
import { Divider, TextWrapper } from 'components'
import { useOrden } from 'context'
import { useStyles } from '../styles/useInformacionPagoStyles'

function InformacionPago({
	title = '',
	fieldsById,
	onChange,
	onFocusHandle,
	setModalConfig,
}) {
	const classes = useStyles()

	const {
		orden: { direccionEnvioFactura, pago30Dias, direccionesFactura },
	} = useOrden()
	const openModal = () => {
		setModalConfig({
			show: true,
			type: 'direccionesFactura',
			data: {
				direcciones: direccionesFactura,
				withUpsert: false,
			},
		})
	}
	const inputProps = {
		onChange: onChange,
		onFocusHandle: onFocusHandle,
	}

	return (
		<Grid container direction="column">
			<Grid container spacing={1} className={classes.root}>
				<Grid item md={9} xs={12}>
					<Divider />
					<Typography variant="h3" className={classes.title}>
						{title}
					</Typography>
					<Grid className={classes.wrapper}>
						<RadioButton {...fieldsById.plazoPago} {...inputProps} />
						{pago30Dias && (
							<Grid container className={classes.wrapperMayor30}>
								<TextInput {...fieldsById.pagoJustificacion} {...inputProps} />
							</Grid>
						)}
						<Grid container direction="column">
							<Typography className={`${classes.titleInput} ${classes.mt3}`}>
								Contacto para esta compra
							</Typography>
							<Typography className={classes.mb}>
								Ingresa el responsable de la recepción del producto o servicio
							</Typography>
							<Grid container className={classes.mb} spacing={3}>
								<TextInput
									{...fieldsById.nombreContactoCompra}
									{...inputProps}
								/>
								<TextInput
									{...fieldsById.apellidoContactoCompra}
									{...inputProps}
								/>
								<TextInput
									{...fieldsById.telefonoContactoCompra}
									{...inputProps}
								/>
								<TextInput
									{...fieldsById.emailContactoCompra}
									{...inputProps}
								/>
							</Grid>
						</Grid>
						<Grid container direction="column">
							<Divider />
							<Typography className={classes.titleInput}>
								Contacto para pago
							</Typography>
							<Typography className={classes.mb}>
								Ingresa el responsable del pago
							</Typography>
							<Grid container className={classes.mb} spacing={3}>
								<TextInput {...fieldsById.nombreContactoPago} {...inputProps} />
								<TextInput
									{...fieldsById.apellidoContactoPago}
									{...inputProps}
								/>
								<TextInput
									{...fieldsById.telefonoContactoPago}
									{...inputProps}
								/>
								<TextInput {...fieldsById.emailContactoPago} {...inputProps} />
							</Grid>
							<Grid container direction="column">
								<Divider />
								<Typography className={classes.titleInput}>
									Información para envío de factura
								</Typography>
								<Grid
									container
									className={classes.wrapperDirection}
									spacing={3}
								>
									<Grid
										item
										md={12}
										container
										alignItems="flex-end"
										className={classes.noPaddingY}
									>
										<TextWrapper
											subLabel={
												direccionEnvioFactura
													? `Dirección: ${direccionEnvioFactura.label}.`
													: 'No tiene dirección.'
											}
										/>
										<Typography onClick={openModal} className={classes.button}>
											Cambiar dirección
										</Typography>
									</Grid>
									<TextInput
										{...fieldsById.indicacionesFactura}
										{...inputProps}
									/>
									<TextInput
										{...fieldsById.emailEnvioFactura}
										{...inputProps}
									/>
								</Grid>
								<Divider />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default InformacionPago
