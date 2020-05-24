import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { capitalize } from 'utils'
import { useRegionComunas, useOrden } from 'context'
import { TextInput } from 'components/fieldsForm'
import { makeStyles } from '@material-ui/core/styles'
import { TextWrapper } from 'components'

const useStyles = makeStyles(({ spacing, palette }) => ({
  title: {
    paddingBottom: spacing(2),
  },
  wrapperOutlined: {
    marginRight: spacing(4),
    border: `1px solid ${palette.secondary.light}`,
    borderRadius: '6px',
    padding: spacing(2),
  },
}))

function Step1({ title = '', fieldsById, onChange }) {
  const classes = useStyles()
  const {
    orden: { regionId },
  } = useOrden()
  const { regiones } = useRegionComunas()
  const region = regiones.find(({ id }) => id === regionId).label
  return (
    <Grid container direction="column">
      <Typography className={classes.title}>{title}</Typography>
      <Typography className={classes.title}>{`Región ${capitalize(
        region,
      )}`}</Typography>
      <Grid container>
        <Grid item md={8}>
          <Grid className={classes.wrapperOutlined}>
            <TextWrapper
              label="Dirección"
              subLabel="Dirección no aplica para productos virtuales"
            />
            <TextWrapper
              label="Plazo de entrega"
              subLabel={
                <Typography>
                  Tu producto será entregado en un plazo de{' '}
                  <strong>0 días hábiles</strong>, según condiciones de despacho
                  para esta región
                </Typography>
              }
            />
          </Grid>
        </Grid>
        <Grid item md={4}>
          <TextInput {...fieldsById.despacho_observacion} onChange={onChange} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Step1
