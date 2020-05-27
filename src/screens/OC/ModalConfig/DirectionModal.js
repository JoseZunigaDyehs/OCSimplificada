import React from 'react'
import { ModalWrapper } from 'components'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ spacing, palette }) => ({
  direccionesWrapper: {
    padding: spacing(2, 0),
  },
  itemWrapper: {
    border: `1px solid ${palette.secondary.main}`,
    padding: spacing(2, 4),
  },
}))

function Item({ id, name }) {
  const classes = useStyles()
  return (
    <Grid container className={classes.itemWrapper}>
      <Typography>{name}</Typography>
    </Grid>
  )
}

function DirectionModal({ modal: { data, type }, ...props }) {
  const classes = useStyles()
  const { region, direcciones } = data
  return (
    <ModalWrapper title="DIRECCIONES" {...props}>
      <Grid container>
        <Typography variant="h4">{`Región ${region}`}</Typography>
        <Grid container className={classes.direccionesWrapper}>
          {direcciones.map((direccion, index) => (
            <Item key={index} {...direccion} />
          ))}
        </Grid>
      </Grid>
    </ModalWrapper>
  )
}

export default DirectionModal
