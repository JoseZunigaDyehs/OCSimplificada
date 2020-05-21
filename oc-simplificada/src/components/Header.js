import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { useOrden } from 'context/OrdenContext'

function Header() {
  const {
    orden: { ordenId, convenioMarco },
  } = useOrden()
  return (
    <Grid container justify="space-between" alignItems="flex-start">
      <Grid>
        <Typography variant="h1">{`Orden de compra ${ordenId}`}</Typography>
        <Typography variant="subtitle1">{convenioMarco}</Typography>
      </Grid>
      <Button>Volver</Button>
    </Grid>
  )
}

export default Header
