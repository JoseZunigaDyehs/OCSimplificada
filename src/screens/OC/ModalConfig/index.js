import React from 'react'
import DirectionModal from './DirectionModal'

const modalType = {
  direction: (props) => {
    return <DirectionModal maxWidth="800px" {...props} />
  },
}

function ModalConfig({ type = 'direction', ...rest }) {
  return modalType[type](rest)
}

export default ModalConfig
