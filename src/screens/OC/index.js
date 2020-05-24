import React from 'react'
import Grid from '@material-ui/core/Grid'
import Step1 from './Steps/Step1'
import { OCForm } from './data'
import useForm from 'hooks/useForm'

function OC() {
  const { fieldsById, onFocusHandle, onChangefield } = useForm({
    defaultFieldsById: OCForm.fieldsById,
  })
  return (
    <Grid container>
      <Step1
        title="1. Despacho"
        onChange={onChangefield}
        fieldsById={fieldsById}
        onFocusHandle={onFocusHandle}
      />
    </Grid>
  )
}

export default OC
