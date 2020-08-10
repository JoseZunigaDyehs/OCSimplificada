import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { TextInput, RadioButton } from 'components/fieldsForm'
import { makeStyles } from '@material-ui/core/styles'
import { Divider, TextWrapper } from 'components'
import { useOrden } from 'context'

const useStyles = makeStyles(({ spacing, fontSizes, breakpoints }) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		marginTop: spacing(3),
		marginBottom: spacing(1),
	},
	wrapper: {
		marginRight: spacing(4),
		[breakpoints.down(`sm`)]: {
			marginRight: spacing(0),
			marginBottom: spacing(3),
		},
	},
	button: {
		marginTop: spacing(1),
	},
	wrapperDirection: {
		flexGrow: 1,
		padding: spacing(3, 0),
	},
	mb: {
		marginBottom: spacing(1),
	},
}))

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
							<TextInput {...fieldsById.pago_justificacion} {...inputProps} />
						)}
						<Grid container direction="column">
							<Typography variant="h5" className={classes.title}>
								Contacto para esta compra
							</Typography>
							<Typography className={classes.mb}>
								Ingresa el responsable de la recepción del producto o servicio
							</Typography>
							<Grid container className={classes.root} spacing={3}>
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
							<Typography variant="h5" className={classes.title}>
								Contacto para pago
							</Typography>
							<Typography>Ingresa el responsable del pago</Typography>
							<Divider />
							<Grid container className={classes.root} spacing={3}>
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
								<Typography variant="h5" className={classes.title}>
									Información para envío de factura
								</Typography>
								<Grid
									container
									className={classes.wrapperDirection}
									spacing={3}
								>
									<Grid item md={6}>
										<TextWrapper
											label="Dirección"
											subLabel={
												direccionEnvioFactura
													? direccionEnvioFactura.label
													: 'No tiene dirección'
											}
										/>
										<Button
											className={classes.button}
											color="primary"
											variant="outlined"
											onClick={openModal}
										>
											Cambiar dirección
										</Button>
									</Grid>
									<TextInput
										{...fieldsById.email_envio_factura}
										{...inputProps}
									/>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item md={4} xs={12}>
					<TextInput {...fieldsById.pago_observacion} {...inputProps} />
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Step2
