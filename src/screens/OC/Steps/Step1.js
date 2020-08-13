import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { capitalize } from 'utils'
import { useRegionComunas, useOrden } from 'context'
import { TextInput, FileInput } from 'components/fieldsForm'
import { TextWrapper, ListItems, DetalleProductos } from 'components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import ResumeOC from '../ResumeOC'
import { useStyles } from '../styles/useStep1Styles'

function Step1({ title = '', fieldsById, onChange, onFocusHandle }) {
	const classes = useStyles()
	const [optional, setOptional] = useState(false)
	const [comunas, setComunas] = useState([])
	const [comunaLabel, setComunaLabel] = useState('')
	const {
		orden: {
			regionId,
			regionLabel,
			direccionDespacho,
			withDireccionDespacho,
			documentosAdjuntos,
		},
		setOrderState,
	} = useOrden()
	const { getComunas } = useRegionComunas()
	const handleOnChangeFile = documentosAdjuntos => {
		setOrderState({ documentosAdjuntos })
	}
	const handleRemoveFile = file => {
		const nextFiles = Array.from(documentosAdjuntos).filter(
			(x, index) => index !== file.id
		)
		setOrderState({ documentosAdjuntos: nextFiles })
	}
	const getDocumentosAdjuntos = () => {
		return Array.from(documentosAdjuntos).map((x, index) => ({
			id: index,
			nombre: x.name,
		}))
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

	const nextDocumentosAdjuntos = getDocumentosAdjuntos()
	const direccion = withDireccionDespacho
		? direccionDespacho
			? `${direccionDespacho.label}, ${comunaLabel}, Región ${capitalize(
					regionLabel
			  )}`
			: 'No existe dirección.'
		: 'No aplica para productos virtuales.'
	const inputProps = {
		onChange: onChange,
		onFocusHandle: onFocusHandle,
	}
	return (
		<Grid container direction="column">
			<Grid container spacing={1} className={classes.root}>
				<Grid item md={9} xs={12}>
					<Typography className={classes.title} variant="h2">
						{title}
					</Typography>
					<Grid className={classes.wrapperInputs}>
						<Typography variant="h5" className={classes.titleInput}>
							Nombre de la orden de compra
						</Typography>
						<TextInput {...fieldsById.nombreOC} {...inputProps} />
						<TextWrapper
							label="Dirección de entrega"
							subLabel={direccion}
							className={classes.mt}
						/>
						<Grid
							container
							item
							md={12}
							alignItems="center"
							className={classes.optional}
						>
							<Grid
								container
								onClick={() => setOptional(!optional)}
								className={classes.pointer}
							>
								<Typography variant="subtitle2">
									{`${
										optional ? 'Quitar' : 'Agregar'
									} instrucciones de despacho (opcional)`}
								</Typography>
								<FontAwesomeIcon
									icon={optional ? faAngleUp : faAngleDown}
									className={classes.icon}
								/>
							</Grid>
							{optional && (
								<Grid container className={classes.wrapperOptional}>
									<TextInput
										{...fieldsById.despacho_observacion}
										onChange={onChange}
										onFocusHandle={onFocusHandle}
									/>
								</Grid>
							)}
						</Grid>
						<Grid item md={12} className={classes.optional}>
							<Typography
								variant="h5"
								className={`${classes.titleInput} ${classes.mt}`}
							>
								Documentos asociados a la orden de compra
							</Typography>
							<Grid item md={12} container wrap="nowrap" className={classes.mb}>
								<Typography variant="body2">
									Te recordamos que las compras provenientes de Compra Ágil, no
									necesitan resoluciones ni actos administrativos.
								</Typography>
								<Typography variant="subtitle2" className={classes.link}>
									Saber más
								</Typography>
							</Grid>
							<FileInput
								files={documentosAdjuntos}
								onChange={handleOnChangeFile}
							/>
							<Typography
								variant="h5"
								className={`${classes.titleInput} ${classes.mt}`}
							>
								Archivos adjuntados
							</Typography>
							<Grid item md={5} sm={12}>
								{nextDocumentosAdjuntos.length > 0 ? (
									<ListItems
										items={nextDocumentosAdjuntos}
										removeItem={handleRemoveFile}
									/>
								) : (
									<Typography variant="body2">
										No existen documentos asociados
									</Typography>
								)}
							</Grid>
						</Grid>
					</Grid>
					<DetalleProductos />
				</Grid>
				<Grid item md={3} xs={12}>
					<ResumeOC />
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Step1
