import React, { useState, useEffect, useRef } from 'react'
import { useOrden } from 'context'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { RadioButton } from 'components/fieldsForm'
import { makeStyles } from '@material-ui/core/styles'
import { Divider, Button } from 'components'
import PlanDeCompra from '../PlanDeCompra'

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
	title: {
		marginBottom: spacing(1),
	},
	wrapper: {
		marginRight: spacing(4),
		marginBottom: spacing(1),
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
		orden: { proyectosPlanCompra, itemsByProyectoId, proyectos },
		removeProyectosPlanDeCompra,
	} = useOrden()

	const handleAsociar = id => {
		const nextProyectosPlanCompra = proyectosPlanCompra
		const itemToAdd = itemsByProyectoId[proyectoSelected.current].find(
			x => x.id === id
		)
		const indexProyecto = nextProyectosPlanCompra.findIndex(
			({ id }) => itemToAdd.proyectoId === id
		)
		if (indexProyecto !== -1) {
			nextProyectosPlanCompra[indexProyecto].items.push(itemToAdd)
		} else {
			nextProyectosPlanCompra.push({
				id: itemToAdd.proyectoId,
				nombre: itemToAdd.proyectoNombre,
				items: [itemToAdd],
			})
		}
		const nextDataSource = itemsByProyectoId[proyectoSelected.current].filter(
			({ id: idDataSource }) => idDataSource !== id
		)
		removeProyectosPlanDeCompra({
			proyectosPlanCompra: nextProyectosPlanCompra,
			nextItems: nextDataSource,
			proyectoId: proyectoSelected.current,
		})
	}
	const proyectoOnClickHandle = id => {
		proyectoSelected.current = id
		setIsItem(true)
	}
	const goBack = () => {
		setIsItem(false)
	}
	const handleRemoveItem = item => {
		const { proyectoId, id: itemId } = item
		const nextDataSource = itemsByProyectoId[proyectoId]
		//Obtener los items del proyecto
		const indexProyecto = proyectosPlanCompra.findIndex(
			({ id }) => id === proyectoId
		)
		const { items } = proyectosPlanCompra[indexProyecto]
		let nextProyectosPlanCompra = proyectosPlanCompra
		//verificar si es el último item
		//REMOVER PROYECTO
		if (items.length === 1) {
			nextProyectosPlanCompra = proyectosPlanCompra.filter(
				x => x.id !== proyectoId
			)
		} else {
			nextProyectosPlanCompra = proyectosPlanCompra.map(x => {
				if (x.id === proyectoId) {
					const nextItems = x.items.filter(({ id }) => id !== itemId)
					return {
						...x,
						items: nextItems,
					}
				}
				return x
			})
		}
		nextDataSource.push(item)
		removeProyectosPlanDeCompra({
			proyectosPlanCompra: nextProyectosPlanCompra,
			nextItems: nextDataSource,
			proyectoId,
		})
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
							onClick={() => handleAsociar(row.id)}
						>
							Asociar
						</Button>
					)
				},
			},
		])
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [proyectoSelected.current, itemsByProyectoId])
	const project = proyectos.find(x => x.id === proyectoSelected.current)
	const projectName = project ? project.nombre : ''
	return (
		<Grid container direction="column">
			<Typography variant="h3" className={classes.title}>
				{title}
			</Typography>
			<Grid container className={classes.root} spacing={3}>
				<Grid item md={9} xs={12}>
					<Grid className={classes.wrapper}>
						<RadioButton
							{...fieldsById.asociar_plan_compra}
							onChange={onChange}
							onFocusHandle={onFocusHandle}
						/>
					</Grid>
					<Divider />
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
						subTitle={
							isItem
								? `Selecciona Ítems del proyecto ${projectName}`
								: 'Selecciona Proyecto'
						}
						items={proyectosPlanCompra}
						goBack={isItem ? goBack : null}
						removeItem={handleRemoveItem}
						isAutorizadores={false}
					/>
				)}
			</Grid>
		</Grid>
	)
}

export default Step3
