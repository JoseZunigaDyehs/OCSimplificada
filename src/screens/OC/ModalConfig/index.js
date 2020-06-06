import React from 'react'
import DirectionModal from './DirectionModal'

const modalType = {
	direccionesDespacho: props => {
		return <DirectionModal typeDirection="direccionesDespacho" {...props} />
	},
	direccionesFactura: props => {
		return <DirectionModal typeDirection="direccionesFactura" {...props} />
	},
}

function ModalConfig(props) {
	return modalType[props.modal.type](props)
}

export default ModalConfig
