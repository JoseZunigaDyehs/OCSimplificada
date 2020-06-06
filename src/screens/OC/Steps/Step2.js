import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { TextInput, RadioButton } from 'components/fieldsForm'
import { makeStyles } from '@material-ui/core/styles'
import { Divider, TextWrapper } from 'components'
import MarginWrapperInput from 'components/fieldsForm/MarginWrapperInputs'
import { useOrden } from 'context'

const useStyles = makeStyles(({ spacing, fontWeights, breakpoints }) => ({
	title: {
		fontWeight: fontWeights[0],
	},
	wrapper: {
		marginRight: spacing(4),
		// borderRadius: '5px',
		// border: `1px solid ${palette.secondary.light}`,
		// padding: spacing(3),
		[breakpoints.down(`sm`)]: {
			marginRight: spacing(0),
			marginBottom: spacing(3),
		},
	},
	button: {
		marginTop: spacing(1),
	},
	wrapperDirection: {
		margin: spacing(3, 0, 3, 0),
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
	return (
		<Grid container direction="column">
			<Typography variant="h3" className={classes.title}>
				{title}
			</Typography>
			<Grid container>
				<Grid item md={8} xs={12}>
					<Grid className={classes.wrapper}>
						<Divider />
						<RadioButton
							{...fieldsById.plazo_pago}
							onChange={onChange}
							onFocusHandle={onFocusHandle}
						/>
						{pago30Dias && (
							<TextInput
								{...fieldsById.pago_justificacion}
								onChange={onChange}
								onFocusHandle={onFocusHandle}
							/>
						)}
						<Grid container direction="column">
							<Typography variant="h3" className={classes.title}>
								Contacto para esta compra
							</Typography>
							<Typography>
								Ingresa el responsable de la recepción del producto o servicio
							</Typography>
							<Divider />
							<Grid container>
								<MarginWrapperInput>
									<TextInput
										{...fieldsById.nombre_contacto_compra}
										onChange={onChange}
										onFocusHandle={onFocusHandle}
									/>
									<TextInput
										{...fieldsById.apellido_contacto_compra}
										onChange={onChange}
										onFocusHandle={onFocusHandle}
									/>
									<TextInput
										{...fieldsById.telefono_contacto_compra}
										onChange={onChange}
										onFocusHandle={onFocusHandle}
									/>
									<TextInput
										{...fieldsById.email_contacto_compra}
										onChange={onChange}
										onFocusHandle={onFocusHandle}
									/>
								</MarginWrapperInput>
							</Grid>
						</Grid>
						<Grid container direction="column">
							<Divider />
							<Typography variant="h3" className={classes.title}>
								Contacto para pago
							</Typography>
							<Typography>Ingresa el responsable del pago</Typography>
							<Divider />
							<Grid container>
								<MarginWrapperInput>
									<TextInput
										{...fieldsById.nombre_contacto_pago}
										onChange={onChange}
										onFocusHandle={onFocusHandle}
									/>
									<TextInput
										{...fieldsById.apellido_contacto_pago}
										onChange={onChange}
										onFocusHandle={onFocusHandle}
									/>
									<TextInput
										{...fieldsById.telefono_contacto_pago}
										onChange={onChange}
										onFocusHandle={onFocusHandle}
									/>
									<TextInput
										{...fieldsById.email_contacto_pago}
										onChange={onChange}
										onFocusHandle={onFocusHandle}
									/>
								</MarginWrapperInput>
							</Grid>
							<Grid container direction="column">
								<Divider />
								<Typography variant="h3" className={classes.title}>
									Información para envío de factura
								</Typography>
								<Grid container className={classes.wrapperDirection}>
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
										onChange={onChange}
										onFocusHandle={onFocusHandle}
									/>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item md={4} xs={12}>
					<TextInput
						{...fieldsById.pago_observacion}
						onChange={onChange}
						onFocusHandle={onFocusHandle}
					/>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Step2
