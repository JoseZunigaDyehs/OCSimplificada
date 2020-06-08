import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Step1 from './Steps/Step1'
import Step2 from './Steps/Step2'
import Step3 from './Steps/Step3'
import { OCForm } from './data'
import useForm from 'hooks/useForm'
import ModalConfig from './ModalConfig'
import { useOrden } from 'context'

const modalConfigInit = {
	show: false,
	type: '',
	data: null,
}
function OC() {
	const [modalConfig, setModalConfig] = useState(modalConfigInit)
	const { fieldsById, onFocusHandle, onChangefield, setFieldsById } = useForm({
		defaultFieldsById: OCForm.fieldsById,
	})
	const { setPago30Dias } = useOrden()
	const onClose = () => {
		setModalConfig(modalConfigInit)
	}

	//USE EFFECT INPUTS
	useEffect(() => {
		const togglePago30Dias = () => {
			const isPago30Dias = fieldsById.plazo_pago.value === '2'
			const { pago_justificacion } = fieldsById
			setPago30Dias(isPago30Dias)
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
	return (
		<Grid container>
			<Step1 title="1. Despacho" {...props} />
			<Step2 title="2. Pago" {...props} />
			<Step3 title="3. Plan de compra" {...props} />
			{modalConfig.show && (
				<ModalConfig modal={modalConfig} onClose={onClose} />
			)}
		</Grid>
	)
}

export default OC
