import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Step1 from './Steps/Step1'
import { OCForm } from './data'
import useForm from 'hooks/useForm'
import ModalConfig from './ModalConfig'

const modalConfigInit = {
  show: false,
  type: '',
  data: null,
}
function OC() {
  const [modalConfig, setModalConfig] = useState(modalConfigInit)
  const { fieldsById, onFocusHandle, onChangefield } = useForm({
    defaultFieldsById: OCForm.fieldsById,
  })
  const onClose = () => {
    setModalConfig(modalConfigInit)
  }
  console.log(modalConfig)
  return (
    <Grid container>
      <Step1
        title="1. Despacho"
        onChange={onChangefield}
        fieldsById={fieldsById}
        onFocusHandle={onFocusHandle}
        setModalConfig={setModalConfig}
      />
      {modalConfig.show && (
        <ModalConfig modal={modalConfig} onClose={onClose} />
      )}
    </Grid>
  )
}

export default OC
