import React from 'react'
import TextField from '@material-ui/core/TextField'
import InputWrapper from './InputWrapper'

function TextArea({ name, value, isRequired, onChange, ...rest }) {
  return (
    <InputWrapper name={name} value={value} isRequired={isRequired} {...rest}>
      <TextField
        onChange={({ target: { name, value } }) => onChange({ name, value })}
        id={name}
        multiline
        rows={4}
        name={name}
      />
    </InputWrapper>
  )
}

export default TextArea
