import React from 'react'
import DirectionModal from './DirectionModal'

const modalType = {
  direction: (props) => <DirectionModal {...props} />,
}

function ModalConfig({ type = 'direction', ...rest }) {
  return modalType[type](rest)
}

export default ModalConfig
