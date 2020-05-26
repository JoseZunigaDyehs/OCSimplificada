import React from 'react'
import Modal from '@material-ui/core/Modal'

function ModalWrapper({ onClose, children }) {
  return (
    <Modal open={true} onClose={onClose}>
      {children}
    </Modal>
  )
}

export default ModalWrapper
