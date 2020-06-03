import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { capitalize } from 'utils'
import { useRegionComunas, useOrden } from 'context'
import { TextInput } from 'components/fieldsForm'
import { makeStyles } from '@material-ui/core/styles'
import { TextWrapper, Button } from 'components'

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
	title: {
		paddingBottom: spacing(2),
	},
	wrapperOutlined: {
		marginRight: spacing(4),
		border: `1px solid ${palette.secondary.light}`,
		borderRadius: '5px',
		padding: spacing(3),
		[breakpoints.down(`sm`)]: {
			marginRight: spacing(0),
		},
	},
	plazoEntrega: {
		margin: spacing(4, 0, 0, 0),
	},
	button: {
		marginTop: spacing(1),
	},
	wrapper: {
		marginBottom: spacing(3),
	},
}))

function Step1({
	title = '',
	fieldsById,
	onChange,
	onFocusHandle,
	setModalConfig,
}) {
	const classes = useStyles()
	const [comunas, setComunas] = useState([])
	const [comunaLabel, setComunaLabel] = useState('')
	const {
		orden: {
			regionId,
			regionLabel,
			direccionDespacho,
			direccionesDespacho,
			withDireccionDespacho,
			diasHabiles,
		},
	} = useOrden()
	const { getComunas } = useRegionComunas()
	const openModal = () => {
		setModalConfig({
			show: true,
			type: 'direction',
			data: {
				regionLabel,
				direcciones: direccionesDespacho,
				comunas,
				withUpsert: false,
			},
		})
	}
	useEffect(() => {
		const getcomunasAPI = async () => {
			try {
				const nextComunas = await getComunas(regionId)
				setComunas(nextComunas)
			} catch (e) {
				console.log(e)
				//ERROR
			}
		}
		getcomunasAPI()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	useEffect(() => {
		if (comunas.length > 0) {
			const nextComunaLabel = direccionDespacho
				? comunas.find(x => x.id === direccionDespacho.comunaId).label
				: ''
			setComunaLabel(nextComunaLabel)
		}
	}, [direccionDespacho, comunas])
	const direccion = withDireccionDespacho
		? direccionDespacho
			? `${direccionDespacho.label}, ${comunaLabel}`
			: 'No existe dirección.'
		: 'No aplica para productos virtuales.'
	return (
		<Grid container direction="column" className={classes.wrapper}>
			<Typography variant="h5" className={classes.title}>
				{title}
			</Typography>
			<Typography className={classes.title}>{`Región ${capitalize(
				regionLabel
			)}`}</Typography>
			<Grid container>
				<Grid item md={8} xs={12}>
					<Grid className={classes.wrapperOutlined}>
						<TextWrapper label="Dirección" subLabel={direccion} />
						{withDireccionDespacho && (
							<Button
								className={classes.button}
								color="primary"
								variant="outlined"
								onClick={openModal}
							>
								Cambiar dirección
							</Button>
						)}
						<TextWrapper
							className={classes.plazoEntrega}
							label="Plazo de entrega"
							subLabel={
								<Typography>
									Tu producto será entregado en un plazo de
									<strong>{` ${diasHabiles} días hábiles`}</strong>, según
									condiciones de despacho para esta región
								</Typography>
							}
						/>
					</Grid>
				</Grid>
				<Grid item md={4} xs={12}>
					<TextInput
						{...fieldsById.despacho_observacion}
						onChange={onChange}
						onFocusHandle={onFocusHandle}
					/>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Step1
