import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputWrapper from './InputWrapper'

//TODO: ESTILOS PARA STATUS
const styles = ({ palette }) => ({
  root: {
    '& $notchedOutline': {
      borderWidth: 1,
      borderColor: palette.secondary.light,
    },
    '&:hover $notchedOutline': {
      borderWidth: 1,
      borderColor: palette.secondary.light,
    },
    '&$focused $notchedOutline': {
      borderWidth: 1,
      borderColor: palette.primary.main,
    },
  },
  focused: {},
  notchedOutline: {},
})

function TextInput({
  name,
  value,
  placeholder = 'kasdhkjashdkjsadh',
  isRequired,
  onChange,
  classes,
  ...rest
}) {
  return (
    <InputWrapper name={name} value={value} isRequired={isRequired} {...rest}>
      <OutlinedInput
        onChange={({ target: { name, value } }) => onChange({ name, value })}
        id={name}
        classes={classes}
        //multiline
        rows={6}
        name={name}
        placeholder={placeholder}
      />
    </InputWrapper>
  )
}

export default withStyles(styles)(TextInput)
