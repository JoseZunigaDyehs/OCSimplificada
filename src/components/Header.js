import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { useOrden } from 'context/OrdenContext'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ spacing }) => ({
  wrapper: {
    paddingBottom: spacing(3),
  },
}))

function Header() {
  const classes = useStyles()
  const {
    orden: { ordenId, convenioMarco },
  } = useOrden()
  return (
    <Grid
      container
      justify="space-between"
      alignItems="flex-start"
      className={classes.wrapper}
    >
      <Grid>
        <Typography variant="h2">{`Orden de compra ${ordenId}`}</Typography>
        <Typography variant="subtitle1">{`${convenioMarco}.`}</Typography>
      </Grid>
      <Button>Volver</Button>
    </Grid>
  )
}

export default Header
