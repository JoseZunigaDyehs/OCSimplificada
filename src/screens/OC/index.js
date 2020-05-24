import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Step1 from './Steps/Step1'
import { OCForm } from './data'
import { validator } from 'utils'

//GENERAR DATA DE LOS FIELDS
function OC() {
  const [fieldsById, setFieldsById] = useState(OCForm.fieldsById)
  const validate = ({ value, rule }) => {
    const isValid = validator[rule.type]({ ...rule, value })
    return isValid
  }
  const onFocusHandle = ({ name, isFocused }) => {
    const nextField = fieldsById[name]
    nextField.status = isFocused ? 'focused' : 'default'
    setFieldsById((prev) => ({
      ...prev,
      [name]: { ...[name], ...nextField },
    }))
  }
  const getStatus = ({ isValid, required, type, value, status }) => {
    if (required) {
      return isValid ? 'success' : 'error'
    } else {
      if (!isValid) {
        if (type === 'select') {
          return value !== -1
            ? 'error'
            : status === 'focused'
            ? 'focused'
            : 'default'
        } else {
          return value !== ''
            ? 'error'
            : status === 'focused'
            ? 'focused'
            : 'default'
        }
      }
      return 'success'
    }
  }
  const onChangefield = ({ name, value }) => {
    const nextField = fieldsById[name]
    nextField.value = value
    nextField.isValid = validate(nextField)
    nextField.status = getStatus({ ...nextField })
    setFieldsById((prev) => ({
      ...prev,
      [name]: { ...[name], ...nextField },
    }))
  }
  //const isAllValid = () => {}
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
