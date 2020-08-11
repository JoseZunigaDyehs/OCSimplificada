import React, { useState, useEffect } from 'react'
import { useOrden } from 'context'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { RadioButton } from 'components/fieldsForm'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from 'components'
import PlanDeCompra from '../PlanDeCompra'

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
	title: {
		marginBottom: spacing(1),
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

function Step5({ title = '', fieldsById, onChange, onFocusHandle }) {
	const classes = useStyles()
	const [table, setTable] = useState(tableInit)
	const {
		orden: { autorizadores, autorizadoresData },
		setOrderState,
	} = useOrden()

	const handleAsociar = id => {
		const itemToAdd = autorizadoresData.find(x => x.id === id)
		const nextAutorizadores = autorizadores
		nextAutorizadores.push(itemToAdd)
		const nextAutorizadoresData = autorizadoresData.filter(x => x.id !== id)
		setOrderState({
			autorizadores: nextAutorizadores,
			autorizadoresData: nextAutorizadoresData,
		})
	}
	const handleRemoveItem = item => {
		const { id } = item
		const nextAutorizadores = autorizadores.filter(x => x.id !== id)
		const nextAutorizadoresData = autorizadoresData
		nextAutorizadoresData.push(item)
		setOrderState({
			autorizadores: nextAutorizadores,
			autorizadoresData: nextAutorizadoresData,
		})
	}
	const getTableData = dataSource => {
		return {
			columns: [
				{
					title: 'Nombre proyecto',
					index: 'nombre',
				},
				{
					title: 'Apellido',
					index: 'apellido',
				},
				{
					title: 'Cargo',
					index: 'cargo',
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
								Agregar
							</Button>
						)
					},
				},
			],
			dataSource,
		}
	}
	useEffect(() => {
		setTable(getTableData(autorizadoresData))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	useEffect(() => {
		setTable(getTableData(autorizadoresData))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [autorizadores.length])

	return (
		<Grid container direction="column">
			<Typography variant="h3" className={classes.title}>
				{title}
			</Typography>
			<Grid container className={classes.root} spacing={3}>
				<Grid item md={8} xs={12}>
					<Grid className={classes.wrapper}>
						<RadioButton
							{...fieldsById.autoriza}
							onChange={onChange}
							onFocusHandle={onFocusHandle}
						/>
					</Grid>
				</Grid>
				{fieldsById.autoriza.value === '2' && (
					<PlanDeCompra
						dataSource={table.dataSource}
						columns={table.columns}
						title="Selecciona autorizador"
						items={autorizadores}
						removeItem={handleRemoveItem}
						withFilter={false}
					/>
				)}
			</Grid>
		</Grid>
	)
}

export default Step5
