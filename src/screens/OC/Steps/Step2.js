import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { TextInput, RadioButton } from 'components/fieldsForm'
import { makeStyles } from '@material-ui/core/styles'
import { Divider, TextWrapper } from 'components'
import { useOrden } from 'context'

const useStyles = makeStyles(
	({ spacing, fontSizes, breakpoints, palette, fontWeights }) => ({
		root: {
			flexGrow: 1,
		},
		title: {
			marginBottom: spacing(1),
			marginTop: spacing(3),
		},
		titleInput: {
			fontWeight: fontWeights[3],
			color: '#000',
		},
		wrapper: {
			marginRight: spacing(4),
			[breakpoints.down(`sm`)]: {
				marginRight: spacing(0),
				marginBottom: spacing(3),
			},
		},
		button: {
			color: palette.primary.main,
			cursor: 'pointer',
			marginLeft: spacing(1),
		},
		wrapperDirection: {
			flexGrow: 1,
			padding: spacing(1.5, 0, 0, 0),
			marginBottom: spacing(1),
		},
		mb: {
			marginBottom: spacing(1),
		},
		mt: {
			marginTop: spacing(2),
		},
		mt3: {
			marginTop: spacing(3),
		},
		noPaddingY: {
			paddingTop: `${spacing(0)} !important`,
			paddingBottom: `0 !important`,
		},
	})
)

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
