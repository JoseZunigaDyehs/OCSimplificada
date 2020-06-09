import React from 'react'
import { useOrden } from 'context'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { RadioButton } from 'components/fieldsForm'
import { makeStyles } from '@material-ui/core/styles'
import { Divider, Button } from 'components'
import PlanDeCompra from '../PlanDeCompra'
import { proyectos } from 'mockup'

const useStyles = makeStyles(({ spacing, fontWeights, breakpoints }) => ({
	title: {
		fontWeight: fontWeights[0],
	},
	wrapper: {
		marginRight: spacing(4),
		// borderRadius: '5px',
		// border: `1px solid ${palette.secondary.light}`,
		// padding: spacing(3),
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
}))

//TODO: Mover lógica de PlanDeCompra acá para ambas tablas, etc......
function Step3({ title = '', fieldsById, onChange, onFocusHandle }) {
	const classes = useStyles()

	const {
		orden: { direccionesFactura },
	} = useOrden()

	const proyectoOnClickHandle = id => {
		console.log(id)
		//TODO: Cambiar de tabla
	}

	const tableProyectos = {
		columns: [
			{
				title: 'Nombre proyecto',
				index: 'nombre',
			},
			{
				title: 'Acción',
				align: 'right',
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

	return (
		<Grid container direction="column">
			<Typography variant="h3" className={classes.title}>
				{title}
			</Typography>
			<Grid container>
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
				<PlanDeCompra
					tableCategories={tableProyectos}
					title="Selecciona año del proyecto y Unidad de compra"
					subTitle="Selecciona Proyecto"
				/>
			</Grid>
		</Grid>
	)
}

export default Step3
