import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { RadioButton, FileInput } from 'components/fieldsForm'
import { makeStyles } from '@material-ui/core/styles'
import { Divider, ListItems } from 'components'
import { useOrden } from 'context'

const useStyles = makeStyles(({ spacing, fontWeights, breakpoints }) => ({
	rootWrapper: {
		marginTop: spacing(5),
	},
	root: {
		flexGrow: 1,
	},
	title: {
		fontWeight: fontWeights[0],
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
	titleProject: {
		paddingBottom: spacing(1),
	},
}))

function Step4({ title = '', fieldsById, onChange, onFocusHandle }) {
	const classes = useStyles()
	const {
		orden: { documentosAdjuntos },
		setOrderState,
	} = useOrden()
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
	const nextDocumentosAdjuntos = getDocumentosAdjuntos()
	const inputProps = {
		onChange: onChange,
		onFocusHandle: onFocusHandle,
	}
	const { asociar_plan_compra } = fieldsById

	return (
		<Grid
			container
			direction="column"
			className={asociar_plan_compra.value === '1' ? classes.rootWrapper : ''}
		>
			<Typography variant="h3" className={classes.title}>
				{title}
			</Typography>
			<Grid container spacing={3} className={classes.root}>
				<Grid item md={8} xs={12}>
					<Grid className={classes.wrapper}>
						<Divider />
						<RadioButton {...fieldsById.documentos_adjuntar} {...inputProps} />
						<FileInput
							files={documentosAdjuntos}
							onChange={handleOnChangeFile}
						/>
					</Grid>
				</Grid>
				<Grid item md={4} xs={12}>
					<Typography variant="h5" className={classes.titleProject}>
						Documentos solicitados
					</Typography>
					{nextDocumentosAdjuntos.length > 0 ? (
						<ListItems
							items={nextDocumentosAdjuntos}
							removeItem={handleRemoveFile}
						/>
					) : (
						<Typography>No existen documentos asociados</Typography>
					)}
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Step4
