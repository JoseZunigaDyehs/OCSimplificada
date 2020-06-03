import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { useRegionComunas, useOrden } from 'context'
import { TextInput, RadioButton } from 'components/fieldsForm'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
	title: {
		paddingBottom: spacing(2),
	},
	wrapper: {
		marginRight: spacing(4),
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
}))

function Step2({
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
	return (
		<Grid container direction="column">
			<Typography variant="h5" className={classes.title}>
				{title}
			</Typography>
			<Grid container>
				<Grid item md={8} xs={12}>
					<Grid className={classes.wrapper}>
						<RadioButton
							{...fieldsById.plazo_pago}
							onChange={onChange}
							onFocusHandle={onFocusHandle}
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

export default Step2
