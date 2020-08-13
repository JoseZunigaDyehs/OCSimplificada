import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { Step1, Step2, Step3, Step5 } from './Steps'
import { OCForm } from './data'
import useForm from 'hooks/useForm'
import ModalConfig from './ModalConfig'
import { useOrden } from 'context'
import { Button } from 'components'
import { goBack } from 'utils'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(({ spacing }) => ({
	root: {
		paddingTop: spacing(6),
		marginTop: spacing(4),
	},
	btnBack: {
		marginRight: spacing(3),
	},
}))

//TODO: La idea es cargar toda la data desde un principio
//TODO: Aceptar que valide todo y envíe a otra ruta
const modalConfigInit = {
	show: false,
	type: '',
	data: null,
}
function OC() {
	const classes = useStyles()
	const [modalConfig, setModalConfig] = useState(modalConfigInit)
	const {
		fieldsById,
		onFocusHandle,
		onChangefield,
		setFieldsById,
		isAllValid,
	} = useForm({
		defaultFieldsById: OCForm.fieldsById,
	})
	const { setOrderState, isDisabledForm } = useOrden()
	let history = useHistory()

	const onClose = () => {
		setModalConfig(modalConfigInit)
	}
	const saveOC = () => {}
	const handleOnAccept = () => {
		history.push('/autorizar')
	}

	//USE EFFECT INPUTS
	useEffect(() => {
		const togglePago30Dias = () => {
			const isPago30Dias = fieldsById.plazo_pago.value === '3'
			const { pago_justificacion } = fieldsById
			setOrderState({ pago30Dias: isPago30Dias })
			pago_justificacion.required = isPago30Dias
			setFieldsById({ ...fieldsById, pago_justificacion })
		}
		togglePago30Dias()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fieldsById.plazo_pago.value])

	const props = {
		onChange: onChangefield,
		fieldsById: fieldsById,
		onFocusHandle: onFocusHandle,
		setModalConfig: setModalConfig,
	}
	const isInvalid = isAllValid()
	// const isDisabled = isDisabledForm({ fieldsById, isInvalid })
	const isDisabled = false
	return (
		<Grid container>
			<Step1 title="Información de la orden de compra" {...props} />
			<Step2 title="Información sobre el pago" {...props} />
			<Step3 title="Plan de compras" {...props} />
			<Step5 title="Autorización" {...props} />
			<Grid
				item
				md={12}
				justify="space-between"
				container
				className={classes.root}
			>
				<Grid>
					<Button
						color="secondary"
						variant="outlined"
						onClick={goBack}
						className={classes.btnBack}
					>
						Volver
					</Button>
					<Button color="gray" variant="outlined" onClick={saveOC}>
						Guardar
					</Button>
				</Grid>
				<Button color="success" onClick={handleOnAccept} disabled={isDisabled}>
					Autorizar y enviar
				</Button>
			</Grid>
			{modalConfig.show && (
				<ModalConfig modal={modalConfig} onClose={onClose} />
			)}
		</Grid>
	)
}

export default OC
