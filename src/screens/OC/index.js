import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Step1 from './Steps/Step1'
import { OCForm } from './data'
import { validator } from 'utils'

//GENERAR DATA DE LOS FIELDS
function OC() {
  const [fieldsById, setFieldsById] = useState(OCForm.fieldsById)
  const validate = ({ value, rule }) => {
    return validator[rule.type]({ ...rule, value })
  }
  const onChangefield = ({ name, value }) => {
    const nextField = fieldsById[name]
    nextField.value = value
    nextField.isValid = validate(nextField)
    setFieldsById((prev) => ({
      ...prev,
      [name]: { ...[name], ...nextField },
    }))
  }
  const isAllValid = () => {}
  return (
    <Grid container>
      <Step1
        title="1. Despacho"
        onChange={onChangefield}
        fieldsById={fieldsById}
      />
    </Grid>
  )
}

export default OC
