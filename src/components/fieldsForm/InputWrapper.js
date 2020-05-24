import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const getMessage = ({ type, label }) => {
  switch (type) {
    case 'select':
      return `Seleccione ${label.toLowerCase()}`
    default:
      return `Escribe ${label.toLowerCase()}`
  }
}

function InputWrapper({
  label,
  isRequired,
  isValid = true,
  rule,
  children,
  type,
}) {
  const message = rule.message || getMessage({ type, label })
  return (
    <Grid>
      <Typography color="secondary">{`${label} ${
        isRequired && `(*)`
      }`}</Typography>
      {children}
      {!isValid && <Typography>{message}</Typography>}
    </Grid>
  )
}

export default InputWrapper
