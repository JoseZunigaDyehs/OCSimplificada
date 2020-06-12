import React, { useState, useEffect, useRef } from 'react'
import { useOrden } from 'context'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { RadioButton } from 'components/fieldsForm'
import { makeStyles } from '@material-ui/core/styles'
import { Divider, Button } from 'components'
import PlanDeCompra from '../PlanDeCompra'
import { proyectos, itemsByProyectoId } from 'mockup'

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
	const tableProyectos = useRef(tableInit)
	const tableItems = useRef(tableInit)
	const {
		orden: { itemsPlanCompra },
		setItemsPlanCompra,
	} = useOrden()

	const asociarHandle = id => {
		const { dataSource } = tableItems.current
		const nextItemsPlanCompra = itemsPlanCompra
		const itemToAdd = dataSource.find(x => x.id === id)
		const index = nextItemsPlanCompra.findIndex(
			({ id }) => itemToAdd.proyectoId === id
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
		setItemsPlanCompra(nextItemsPlanCompra)
		const nextDataSource = dataSource.filter(
			({ id: idDataSource }) => idDataSource !== id
		)
		tableItems.current = {
			...tableItems.current,
			dataSource: nextDataSource,
		}
	}
	const proyectoOnClickHandle = id => {
		const nextTableItems = {
			columns: [
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
			],
			dataSource: itemsByProyectoId[id],
		}
		tableItems.current = nextTableItems
		setIsItem(true)
	}
	const goBack = () => {
		setIsItem(false)
	}
	const removeItem = item => {
		const { dataSource } = tableItems.current
		const nextDataSource = [...dataSource]
		nextDataSource.push(item)
		tableItems.current = {
			...tableItems.current,
			dataSource: nextDataSource,
		}
		//REMOVER DEL LOS ITEMS
	}
	useEffect(() => {
		const nextTableProyectos = {
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
		tableProyectos.current = nextTableProyectos
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	console.log(tableItems.current.dataSource)
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
						table={isItem ? tableItems.current : tableProyectos.current}
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
