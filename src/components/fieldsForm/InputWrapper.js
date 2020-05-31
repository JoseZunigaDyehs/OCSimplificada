import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
  ({ spacing, fontSizes, palette, fontWeights }) => ({
    label: {
      paddingBottom: spacing(1),
      textTransform: 'uppercase',
      fontSize: fontSizes[0],
      color: palette.secondary.light,
      fontWeight: fontWeights[2],
      letterSpacing: '.5px',
    },
    invalidText: {
      fontSize: fontSizes[0],
    },
    inputWrapper: {
      border: `1px solid`,
      borderRadius: '5px',
    },
    default: {
      borderColor: palette.secondary.light,
    },
    error: {
      borderColor: palette.error.main,
    },
    success: {
      borderColor: palette.success.main,
    },
    focused: {
      borderColor: palette.primary.main,
    },
    wrapper: {
      marginBottom: spacing(3),
    },
  }),
)

function InputWrapper({
  label,
  required,
  rule,
  type,
  status = 'default',
  value,
  md = 12,
  children,
}) {
  const classes = useStyles()
  const getMessage = ({ type, label }) => {
    switch (type) {
      case 'select':
        return `* Seleccione ${label.toLowerCase()}`
      default:
        return `* Escribe ${label.toLowerCase()}`
    }
  }

  const message = rule.message || getMessage({ type, label })
  const getRestCharsValid = () => {
    const { max } = rule
    if (!value) {
      return `0/${max}`
    }
    const rest = max - value.length
    return `${rest}/${max}`
  }
  return (
    <Grid item md={md} className={classes.wrapper}>
      <Typography color="secondary" className={classes.label}>{`${label} ${
        required ? `(*)` : ``
      }`}</Typography>
      <Grid className={`${classes.inputWrapper} ${classes[status]}`}>
        {children}
      </Grid>
      <Grid container justify="space-between">
        <Typography color="error" className={classes.invalidText}>
          {status === 'error' && message}
        </Typography>
        {type === 'textarea' && (
          <Typography className={classes.invalidText}>
            {getRestCharsValid()}
          </Typography>
        )}
      </Grid>
    </Grid>
  )
}

export default InputWrapper
