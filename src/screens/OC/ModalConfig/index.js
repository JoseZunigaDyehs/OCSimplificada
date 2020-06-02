import React from 'react'
import DirectionModal from './DirectionModal'

const modalType = {
	direction: props => {
		return <DirectionModal typeDirection="direccionesDespacho" {...props} />
	},
}

function ModalConfig({ type = 'direction', ...rest }) {
	return modalType[type](rest)
}

export default ModalConfig
