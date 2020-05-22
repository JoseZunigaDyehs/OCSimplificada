import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

function InputWrapper({
  label,
  isRequired,
  isValid,
  value,
  name,
  validator,
  children,
}) {
  return (
    <Grid>
      <Typography>{`${label} ${isRequired && `(*)`}`}</Typography>
      {children}
      {!isValid && validator.message}
    </Grid>
  )
}

export default InputWrapper
