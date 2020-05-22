import React from 'react'
import TextField from '@material-ui/core/TextField'
import InputWrapper from './InputWrapper'

function TextAreaWrapper(inputProps) {
  return (
    <InputWrapper {...inputProps}>
      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
        variant="outlined"
      />
    </InputWrapper>
  )
}

export default TextAreaWrapper
