import React, { useState, useEffect } from 'react'
import { ModalWrapper, ItemList, Button } from 'components'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { useOrden } from 'context'
import { direccionesDespacho } from 'mockup'
import useForm from 'hooks/useForm'
import { TextInput, Select } from 'components/fieldsForm'
//import API from 'config/api'

const useStyles = makeStyles(({ spacing }) => ({
  direccionesWrapper: {
    padding: spacing(2, 0),
  },
}))

function UpsertDireccion({ direccionId, comunas, orden }) {
  const upsertFormInit = () => {
    let nextFieldsById = {
      comunas: {
        name: 'comunas',
        required: true,
        rule: { type: 'select', min: 5, max: 50 },
        label: 'Comunas',
        isValid: true,
        type: 'select',
        value: -1,
        status: 'default',
        items: comunas,
      },
      direccion: {
        name: 'direccion',
        required: true,
        rule: { type: 'empty' },
        label: 'Dirección',
        isValid: true,
        status: 'default',
        type: 'text',
        value: '',
      },
    }
    if (direccionId) {
      const { direccionesDespacho } = orden
      const direccion = direccionesDespacho.find((x) => x.id === direccionId)
      nextFieldsById = {
        comunas: {
          ...nextFieldsById.comunas,
          value: direccion.comunaId,
          status: 'success',
        },
        direccion: {
          ...nextFieldsById.direccion,
          value: direccion.name,
          status: 'success',
        },
      }
    }
    return nextFieldsById
  }
  const { fieldsById, onFocusHandle, onChangefield } = useForm({
    defaultFieldsById: upsertFormInit(),
  })
  return (
    <Grid container>
      <Select
        onFocusHandle={onFocusHandle}
        onChange={onChangefield}
        {...fieldsById.comunas}
      />
      <TextInput
        onFocusHandle={onFocusHandle}
        onChange={onChangefield}
        {...fieldsById.direccion}
      />
      <Grid container justify="center">
        <Button variant="text">Cancelar</Button>
        <Button color="primary">Aceptar</Button>
      </Grid>
    </Grid>
  )
}

function DirectionModal({ modal: { data }, typeDirection, ...props }) {
  const classes = useStyles()
  const [direccionSelectId, setDireccionSelectId] = useState(null)
  const [isUpserting, setIsUpserting] = useState(false)
  const [upsertId, setUpsertId] = useState(null)
  const { setDireccionDespacho, setDireccionesDespacho, orden } = useOrden()
  const { regionLabel, comunas } = data

  const onSelectDireccion = (id) => {
    if (id === direccionSelectId) {
      return setDireccionSelectId(null)
    }
    setDireccionSelectId(id)
  }
  const openUpsert = (id = null) => {
    setUpsertId(id)
    setIsUpserting(true)
  }
  const onAcceptHandle = () => {
    setDireccionDespacho()
  }
  useEffect(() => {
    if (orden[typeDirection].length === 0) {
      //API.getDireccionesDespacho(orden.ordenId)
      setDireccionesDespacho(direccionesDespacho)
    }
  }, [])
  return (
    <ModalWrapper
      title="Direcciones de despacho"
      onAccept={onAcceptHandle}
      withButtons={!isUpserting}
      {...props}
    >
      <Grid container>
        <Typography variant="h4">{`Región ${regionLabel}`}</Typography>
        <Grid container className={classes.direccionesWrapper}>
          {isUpserting ? (
            <UpsertDireccion
              direccionId={upsertId}
              comunas={comunas}
              orden={orden}
            />
          ) : (
            orden[typeDirection].map((direccion, index) => (
              <ItemList
                key={index}
                {...direccion}
                onChange={onSelectDireccion}
                checkedId={direccionSelectId}
                openUpsert={openUpsert}
              />
            ))
          )}
        </Grid>
      </Grid>
    </ModalWrapper>
  )
}

export default DirectionModal
