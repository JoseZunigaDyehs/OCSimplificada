import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import {
	InformacionOC,
	InformacionPago,
	PlanDeCompras,
	Autorizacion,
} from './Steps'
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
	const [loading, setLoading] = useState(true)
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
	const { setOrderState, isDisabledForm, orden } = useOrden()
	let history = useHistory()

	const onClose = () => {
		setModalConfig(modalConfigInit)
	}
	const saveOC = () => {}
	const handleOnAccept = () => {
		history.push('/autorizar')
	}

	useEffect(() => {
		try {
			setLoading(true)
			//LLENAR LA WEA
			const keys = Object.keys(fieldsById)
			const nextFieldsById = fieldsById
			keys.forEach(key => {
				nextFieldsById[key] = {
					...nextFieldsById[key],
					value: orden[key],
				}
			})
			setFieldsById(nextFieldsById)
			setLoading(false)
		} catch (error) {
			// TODO: FEEDBACK
		}
	}, [])

	//USE EFFECT INPUTS
	useEffect(() => {
		const togglePago30Dias = () => {
			const isPago30Dias = fieldsById.plazoPago.value === '3'
			const { pagoJustificacion } = fieldsById
			setOrderState({ pago30Dias: isPago30Dias })
			pagoJustificacion.required = isPago30Dias
			setFieldsById({ ...fieldsById, pagoJustificacion })
		}
		togglePago30Dias()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fieldsById.plazoPago.value])

	if (loading) {
		return 'LOADING'
	}

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
			<InformacionOC title="Información de la orden de compra" {...props} />
			<InformacionPago title="Información sobre el pago" {...props} />
			<PlanDeCompras title="Plan de compras" {...props} />
			<Autorizacion title="Autorización" {...props} />
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
