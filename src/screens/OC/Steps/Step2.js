import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { TextInput, RadioButton } from 'components/fieldsForm'
import { Divider, TextWrapper } from 'components'
import { useOrden } from 'context'
import { useStyles } from '../styles/useStep2Styles'

function Step2({
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
						<RadioButton {...fieldsById.plazo_pago} {...inputProps} />
						{pago30Dias && (
							<Grid container className={classes.wrapperMayor30}>
								<TextInput {...fieldsById.pago_justificacion} {...inputProps} />
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
									{...fieldsById.nombre_contacto_compra}
									{...inputProps}
								/>
								<TextInput
									{...fieldsById.apellido_contacto_compra}
									{...inputProps}
								/>
								<TextInput
									{...fieldsById.telefono_contacto_compra}
									{...inputProps}
								/>
								<TextInput
									{...fieldsById.email_contacto_compra}
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
								<TextInput
									{...fieldsById.nombre_contacto_pago}
									{...inputProps}
								/>
								<TextInput
									{...fieldsById.apellido_contacto_pago}
									{...inputProps}
								/>
								<TextInput
									{...fieldsById.telefono_contacto_pago}
									{...inputProps}
								/>
								<TextInput
									{...fieldsById.email_contacto_pago}
									{...inputProps}
								/>
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
									<TextInput {...fieldsById.indicaciones} {...inputProps} />
									<TextInput
										{...fieldsById.email_envio_factura}
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

export default Step2
