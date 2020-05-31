import React from 'react'
import CheckBoxMui from '@material-ui/core/Checkbox'

function CheckBox({ name, onChange, value, disabled }) {
  return (
    <CheckBoxMui
      color="primary"
      name={name}
      onChange={onChange}
      checked={value}
      disabled={disabled}
    />
  )
}

export default CheckBox
