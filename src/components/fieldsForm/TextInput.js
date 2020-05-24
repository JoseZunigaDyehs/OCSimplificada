import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputWrapper from './InputWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { colors } from 'config/theme'
import {
  faExclamationCircle,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons'

const styles = makeStyles(() => ({
  root: {
    '& input:valid + fieldset': {
      borderWidth: 0,
    },
    '& $notchedOutline': {
      borderWidth: 0,
    },
    '&:hover $notchedOutline': {
      borderWidth: 0,
    },
    '&$focused $notchedOutline': {
      borderWidth: 0,
    },
  },
  focused: {},
  notchedOutline: {
    borderWidth: 0,
  },
}))

function IconInput({ status }) {
  if (status === 'default' || status === 'focused') return null
  return (
    <InputAdornment>
      <FontAwesomeIcon
        color={status === 'error' ? colors.error.main : colors.success.main}
        icon={status === 'error' ? faExclamationCircle : faCheckCircle}
      />
    </InputAdornment>
  )
}

function TextInput({
  name,
  value,
  placeholder = 'placeholder',
  required,
  onChange,
  disabled,
  isValid,
  type,
  status,
  onFocusHandle,
  ...rest
}) {
  const classes = styles(isValid)
  return (
    <InputWrapper
      name={name}
      value={value}
      required={required}
      isValid={isValid}
      type={type}
      status={status}
      {...rest}
    >
      <OutlinedInput
        onChange={({ target: { name, value } }) => onChange({ name, value })}
        id={name}
        classes={classes}
        multiline={type === 'textarea'}
        rows={6}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        value={value === null ? '' : value}
        endAdornment={<IconInput status={status} />}
        onFocus={({ target: { name } }) => {
          onFocusHandle({ name, isFocused: true })
        }}
        onBlur={({ target: { name } }) => {
          onFocusHandle({ name, isFocused: false })
        }}
      />
    </InputWrapper>
  )
}

export default TextInput
