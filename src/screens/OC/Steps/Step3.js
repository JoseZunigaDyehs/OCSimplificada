import React, { useState, useEffect, useRef } from 'react'
import { useOrden } from 'context'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { RadioButton } from 'components/fieldsForm'
import { makeStyles } from '@material-ui/core/styles'
import { Divider, Button } from 'components'
import PlanDeCompra from '../PlanDeCompra'

const useStyles = makeStyles(({ spacing, fontWeights, breakpoints }) => ({
  title: {
    fontWeight: fontWeights[0],
  },
  wrapper: {
    marginRight: spacing(4),
    [breakpoints.down(`sm`)]: {
      marginRight: spacing(0),
      marginBottom: spacing(3),
    },
  },
  button: {
    marginTop: spacing(1),
  },
  wrapperDirection: {
    margin: spacing(3, 0, 3, 0),
  },
  root: { flexGrow: 1 },
}))

const tableInit = {
  columns: [],
  dataSource: [],
  pagination: null,
}

//TODO: Mover lógica de PlanDeCompra acá para ambas tablas, etc......
//VOLVER
//ELIMINAR
function Step3({ title = '', fieldsById, onChange, onFocusHandle }) {
  const classes = useStyles()
  const [isItem, setIsItem] = useState(false)
  const [tableProyectos, setTableProyectos] = useState(tableInit)
  const [tableItemsColumns, setTableItemsColumns] = useState([])
  const proyectoSelected = useRef(null)
  const {
    orden: { itemsPlanCompra, proyectos, itemsByProyectoId },
    setOrderState,
    setItemsByProyectoId,
  } = useOrden()

  const asociarHandle = id => {
    const nextItemsPlanCompra = itemsPlanCompra
    const itemToAdd = itemsByProyectoId[proyectoSelected.current].find(
      x => x.id === id,
    )
    const index = nextItemsPlanCompra.findIndex(
      ({ id }) => itemToAdd.proyectoId === id,
    )
    if (index !== -1) {
      nextItemsPlanCompra[index].items.push(itemToAdd)
    } else {
      nextItemsPlanCompra.push({
        id: itemToAdd.proyectoId,
        nombre: itemToAdd.proyectoNombre,
        items: [itemToAdd],
      })
    }
    setOrderState({ itemsPlanCompra: nextItemsPlanCompra })
    const nextDataSource = itemsByProyectoId[proyectoSelected.current].filter(
      ({ id: idDataSource }) => idDataSource !== id,
    )
    setItemsByProyectoId(nextDataSource, proyectoSelected.current)
  }
  const proyectoOnClickHandle = id => {
    proyectoSelected.current = id
    setIsItem(true)
  }
  const goBack = () => {
    setIsItem(false)
  }
  const removeItem = item => {
    const nextDataSource = itemsByProyectoId[proyectoSelected.current]
    const { proyectoId } = item
    //Obtener los items del proyecto
    const { items } = itemsPlanCompra.find(({ id }) => id === proyectoId)
    //verificar si es el último
    let nextItemsPlanCompra = itemsPlanCompra
    if (items.length === 1) {
      nextItemsPlanCompra = itemsPlanCompra.filter(
        ({ id }) => id !== proyectoId,
      )
    } else {
      nextItemsPlanCompra = itemsPlanCompra.map(x => {
        if (x.id === proyectoId) {
          const nextItems = x.items.filter(({ id }) => id !== item.id)
          return {
            ...x,
            items: nextItems,
          }
        }
        return x
      })
    }
    setOrderState({ itemsPlanCompra: nextItemsPlanCompra })
    nextDataSource.push(item)
    setItemsByProyectoId(nextDataSource, proyectoSelected.current)
  }
  const getTableProyectos = () => {
    return {
      columns: [
        {
          title: 'Nombre proyecto',
          index: 'nombre',
        },
        {
          title: 'Acción',
          align: 'right',
          index: 'accion',
          render: row => {
            return (
              <Button
                variant="text"
                color="primary"
                onClick={() => proyectoOnClickHandle(row.id)}
              >
                Ver Ítems
              </Button>
            )
          },
        },
      ],
      dataSource: proyectos,
    }
  }

  useEffect(() => {
    setTableProyectos(getTableProyectos())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    setTableItemsColumns([
      {
        title: 'Nombre ítem',
        index: 'nombre',
      },
      {
        title: 'Acción',
        align: 'right',
        index: 'accion',
        render: row => {
          return (
            <Button
              variant="text"
              color="primary"
              onClick={() => asociarHandle(row.id)}
            >
              Asociar
            </Button>
          )
        },
      },
    ])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [proyectoSelected.current, itemsByProyectoId[proyectoSelected.current]])

  return (
    <Grid container direction="column">
      <Typography variant="h3" className={classes.title}>
        {title}
      </Typography>
      <Grid container className={classes.root} spacing={3}>
        <Grid item md={8} xs={12}>
          <Grid className={classes.wrapper}>
            <Divider />
            <RadioButton
              {...fieldsById.asociar_plan_compra}
              onChange={onChange}
              onFocusHandle={onFocusHandle}
            />
          </Grid>
        </Grid>
        {fieldsById.asociar_plan_compra.value === '1' && (
          <PlanDeCompra
            dataSource={
              isItem
                ? itemsByProyectoId[proyectoSelected.current]
                : tableProyectos.dataSource
            }
            columns={isItem ? tableItemsColumns : tableProyectos.columns}
            title="Selecciona año del proyecto y Unidad de compra"
            subTitle={isItem ? 'Selecciona Ítem' : 'Selecciona Proyecto'}
            items={itemsPlanCompra}
            goBack={isItem ? goBack : null}
            removeItem={removeItem}
          />
        )}
      </Grid>
    </Grid>
  )
}

export default Step3
