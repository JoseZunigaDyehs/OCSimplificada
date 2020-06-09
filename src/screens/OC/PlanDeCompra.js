import React, { useState } from 'react'
import { useOrden } from 'context'
import { Select, MarginWrapperInputs } from 'components/fieldsForm'
import { Table, Divider, ListItems } from 'components'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { planDeCompraFieldsById } from './data'
import useForm from 'hooks/useForm'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
	wrapper: {
		border: `1px solid ${palette.terniary.dark}`,
		borderRadius: '5px',
		padding: spacing(3),
	},
	title: {
		paddingBottom: spacing(2),
	},
	wrapperSectionTable: {
		paddingRight: spacing(3),
		[breakpoints.down(`sm`)]: {
			paddingRight: spacing(0),
		},
	},
}))

//TODO:
//HEADER
//	Parametrizar todo
//BODY
// Search table // Toggle
// List By Categories
// Button Volver

function Header({ title = '', fieldsById, onFocusHandle, onChangefield }) {
	const classes = useStyles()
	return (
		<Grid container direction="column">
			<Grid item md={8} sm={12}>
				<Typography variant="h4" className={classes.title}>
					{title}
				</Typography>
				<MarginWrapperInputs>
					<Select
						{...fieldsById.anios}
						onChange={onChangefield}
						onFocusHandle={onFocusHandle}
					/>
					<Select
						{...fieldsById.unidad_compra}
						onChange={onChangefield}
						onFocusHandle={onFocusHandle}
					/>
				</MarginWrapperInputs>
			</Grid>
			<Divider />
		</Grid>
	)
}

const tableInit = {
	columns: [],
	datasource: [],
	pagination: null,
}

function PlanDeCompra({
	title = 'Selecciona año del proyecto y Unidad de compra',
	subTitle = 'Selecciona Proyecto',
	tableCategories: tableCategoriesParent = tableInit,
	tableItems: tableItemsParent = tableInit,
}) {
	const classes = useStyles()
	const [tableCategories, setTableCategories] = useState(tableCategoriesParent)
	const [tableItems, setTableItems] = useState(tableItemsParent)
	const [selected, setSelected] = useState([])
	const [isCategories, setIsCategories] = useState(true)
	const { fieldsById, onFocusHandle, onChangefield } = useForm({
		defaultFieldsById: planDeCompraFieldsById,
	})
	const {
		orden: { itemsPlanCompra },
	} = useOrden()
	const removeItem = idItem => {
		console.log(idItem)
	}
	return (
		<Grid container className={classes.wrapper}>
			<Header
				fieldsById={fieldsById}
				onFocusHandle={onFocusHandle}
				onChangefield={onChangefield}
				title={title}
			/>
			<Grid md={8} sm={12}>
				<Grid
					container
					item
					direction="column"
					className={classes.wrapperSectionTable}
				>
					<Typography>
						{isCategories
							? subTitle
							: `Selecciona uno o más ítems del proyecto `}
					</Typography>
					<Table {...tableCategories} />
				</Grid>
			</Grid>
			<Grid md={4} sm={12}>
				{itemsPlanCompra.map(({ nombre, items }) => (
					<React.Fragment>
						<Typography variant="h4" className={classes.title}>
							{nombre}
						</Typography>
						<ListItems items={items} removeItem={removeItem} />
					</React.Fragment>
				))}
			</Grid>
		</Grid>
	)
}

export default PlanDeCompra
