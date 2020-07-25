import React, { useState, useEffect } from 'react'
import { ModalWrapper, Button } from 'components'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import ItemList from './ItemList'
import { makeStyles } from '@material-ui/core/styles'
import { useOrden } from 'context'
import { direccionesDespacho } from 'mockup'
import useForm from 'hooks/useForm'
import { TextInput, Select } from 'components/fieldsForm'
//import API from 'config/api'
//Test

const useStyles = makeStyles(({ spacing }) => ({
  direccionesWrapper: {
    padding: spacing(2, 0),
  },
}))

function UpsertDireccion({
  direccionId,
  comunas,
  orden,
  goBack,
  edit,
  create,
}) {
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
        md: 6,
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
        md: 6,
      },
    }
    if (direccionId) {
      const { direccionesDespacho } = orden
      const direccion = direccionesDespacho.find(x => x.id === direccionId)
      nextFieldsById = {
        comunas: {
          ...nextFieldsById.comunas,
          value: direccion.comunaId,
          status: 'success',
        },
        direccion: {
          ...nextFieldsById.direccion,
          value: direccion.label,
          status: 'success',
        },
      }
    }
    return nextFieldsById
  }
  const { fieldsById, onFocusHandle, onChangefield, format } = useForm({
    defaultFieldsById: upsertFormInit(),
  })
  const upsertHandle = () => {
    const nextData = format()
    if (direccionId) {
      edit(nextData)
    } else {
      create(nextData)
    }
  }
  return (
    <Grid container>
      <Grid container>
        <Select
          paddingPosition={'right'}
          onFocusHandle={onFocusHandle}
          onChange={onChangefield}
          {...fieldsById.comunas}
        />
        <TextInput
          paddingPosition={'left'}
          onFocusHandle={onFocusHandle}
          onChange={onChangefield}
          {...fieldsById.direccion}
        />
      </Grid>
      <Grid container justify="center">
        <Button variant="text" onClick={goBack}>
          Volver
        </Button>
        <Button onClick={upsertHandle} color="success">
          {direccionId ? 'Editar' : 'Crear'}
        </Button>
      </Grid>
    </Grid>
  )
}

function DirectionModal({ modal: { data }, typeDirection, onClose, ...props }) {
  const classes = useStyles()
  const { setOrderState, orden } = useOrden()
  const [direccionSelectId, setDireccionSelectId] = useState(
    orden.direccionDespacho ? orden.direccionDespacho.id : null,
  )
  const [isUpserting, setIsUpserting] = useState(false)
  const [upsertId, setUpsertId] = useState(null)
  const { regionLabel = '', comunas, withUpsert = true } = data

  const onSelectDireccion = id => {
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
    const nextDireccion = orden[typeDirection].find(
      x => x.id === direccionSelectId,
    )
    if (typeDirection === 'direccionesDespacho') {
      setOrderState({ direccionDespacho: nextDireccion })
    } else {
      setOrderState({ direccionEnvioFactura: nextDireccion })
    }
    onClose()
  }
  const goBack = () => {
    setIsUpserting(false)
    setUpsertId(null)
  }
  const edit = nextData => {
    const direcciones = orden[typeDirection]
    const nextDirecciones = direcciones.map(x => {
      if (x.id === upsertId) {
        return {
          ...x,
          label: nextData.direccion,
          comunaId: nextData.comunas,
        }
      }
      return x
    })
    setOrderState({ direccionesDespacho: nextDirecciones })
    goBack()
  }
  const create = nextData => {
    const nextDirecciones = orden[typeDirection]
    nextDirecciones.push({
      id: nextDirecciones.length + 1,
      label: nextData.direccion,
      comunaId: nextData.comunas,
    })
    setOrderState({ direccionesDespacho: nextDirecciones })
    goBack()
  }
  useEffect(() => {
    if (orden[typeDirection].length === 0) {
      //API.getDireccionesDespacho(orden.ordenId)
      setOrderState({ direccionesDespacho })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ModalWrapper
      title={`Direcciones de ${
        typeDirection === 'direccionesFactura' ? `envío factura` : `despacho`
      }`}
      onAccept={onAcceptHandle}
      withButtons={!isUpserting}
      maxWidth="800px"
      onClose={onClose}
      {...props}
    >
      <Grid container>
        <Grid container alignItems="center" justify="space-between">
          {regionLabel && (
            <Typography variant="body1">{`Región ${regionLabel}`}</Typography>
          )}
          {withUpsert && !isUpserting && (
            <Button color="primary" variant="text" onClick={() => openUpsert()}>
              + Nueva dirección
            </Button>
          )}
        </Grid>
        <Grid container className={classes.direccionesWrapper}>
          {isUpserting ? (
            <UpsertDireccion
              direccionId={upsertId}
              comunas={comunas}
              orden={orden}
              goBack={goBack}
              edit={edit}
              create={create}
            />
          ) : (
            orden[typeDirection].map((direccion, index) => (
              <ItemList
                key={index}
                {...direccion}
                onChange={onSelectDireccion}
                checkedId={direccionSelectId}
                openUpsert={openUpsert}
                comunas={comunas}
                withUpsert={withUpsert}
              />
            ))
          )}
        </Grid>
      </Grid>
    </ModalWrapper>
  )
}

export default DirectionModal
