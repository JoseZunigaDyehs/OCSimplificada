import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { capitalize } from 'utils'
import { useRegionComunas, useOrden } from 'context'
import { TextArea } from 'components/fieldsForm'

//TEXTAREA
function Step1({ title = '', fieldsById, onChange }) {
  const {
    orden: { regionId },
  } = useOrden()
  const { regiones } = useRegionComunas()
  const region = regiones.find(({ id }) => id === regionId).label
  return (
    <Grid container>
      <Typography>{title}</Typography>
      <Typography>{`Región ${capitalize(region)}`}</Typography>
      <Grid>
        <Grid item md={9}></Grid>
        <Grid item md={3}>
          <TextArea {...fieldsById.despacho_observacion} onChange={onChange} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Step1
