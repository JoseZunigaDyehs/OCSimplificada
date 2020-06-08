import React, { useState } from 'react'
import { useOrden } from 'context'
import { Select, MarginWrapperInputs } from 'components/fieldsForm'
import { Table, Divider } from 'components'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { planDeCompraFieldsById } from './data'
import useForm from 'hooks/useForm'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ spacing, palette }) => ({
	wrapper: {
		border: `1px solid ${palette.terniary.dark}`,
		borderRadius: '5px',
		padding: spacing(3),
	},
	title: {
		paddingBottom: spacing(2),
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

function PlanDeCompra() {
	const classes = useStyles()
	const [tableCategories, setTableCategories] = useState({
		columns: [],
		datasource: [],
		pagination: null,
	})
	const [tableItems, setTableItems] = useState({
		columns: [],
		datasource: [],
		pagination: null,
	})
	const [selected, setSelected] = useState([])
	const [isCategories, setIsCategories] = useState(true)
	const { fieldsById, onFocusHandle, onChangefield } = useForm({
		defaultFieldsById: planDeCompraFieldsById,
	})
	const { orden } = useOrden()
	return (
		<Grid container className={classes.wrapper}>
			<Header
				fieldsById={fieldsById}
				onFocusHandle={onFocusHandle}
				onChangefield={onChangefield}
				title="Selecciona año del proyecto y Unidad de compra"
			/>
			<Grid md={8} sm={12}>
				<Typography>
					{isCategories
						? `Selecciona Proyecto`
						: `Selecciona uno o más ítems del proyecto `}
				</Typography>
				<Table />
			</Grid>
			<Grid md={4} sm={12}></Grid>
		</Grid>
	)
}

export default PlanDeCompra
