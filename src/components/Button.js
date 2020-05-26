import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

//TODO: OUTLINED
//TODO: COLOR
const useStyles = makeStyles(({ palette }) => ({
  primary: {
    '&:hover': {
      color: 'white',
      backgroundColor: palette.primary.dark,
    },
  },
  secondary: {
    '&:hover': {
      backgroundColor: 'white',
      color: palette.primary.main,
      borderColor: palette.primary.main,
    },
  },
  success: {
    backgroundColor: palette.success.main,
    '&:hover': {
      backgroundColor: palette.success.dark,
    },
  },
  error: {
    backgroundColor: palette.error.main,
    '&:hover': {
      backgroundColor: palette.error.dark,
    },
  },
}))

/**
 *
 * VARIANT =  'contained' (DEFAULT) 'outlined'
 * TYPE = primary, secondary(VOLVER), success, error
 */

function ButtonWrapper({
  onClick,
  disabled,
  variant = 'contained',
  type = 'default',
  className = '',
  children,
}) {
  const classes = useStyles()

  return (
    <Button
      variant={variant}
      color={type}
      disabled={disabled}
      className={`${classes[type]} ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default ButtonWrapper
