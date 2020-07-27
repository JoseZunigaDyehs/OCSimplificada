import React, { useEffect } from 'react'
import { Select } from 'components/fieldsForm'
import { Table, Divider, ListItems, Button } from 'components'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {
	itemsAsociadosfiltersFieldsById,
	autorizadoresfiltersFieldsById,
} from './data'
import useForm from 'hooks/useForm'
import { makeStyles } from '@material-ui/core/styles'
import { sortBy } from 'utils'

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
	title: {
		paddingBottom: spacing(2),
	},
	titleProject: {
		paddingBottom: spacing(1),
	},
	wrapperSectionTable: {
		paddingRight: spacing(3),
		[breakpoints.down(`sm`)]: {
			paddingRight: spacing(0),
		},
	},
	root: {
		flexGrow: 1,
	},
	wrapper: {
		border: `1px solid ${palette.terniary.dark}`,
		borderRadius: '5px',
		padding: spacing(2),
	},
	button: {
		marginBottom: spacing(1),
	},
}))

//Esta wea tiene que servir para dos cosas, pasarle un type
function PlanDeCompra({
	title = '',
	subTitle = '',
	dataSource = [],
	columns = [],
	items,
	goBack = null,
	removeItem,
	isAutorizadores = true,
}) {
	const classes = useStyles()
	const { fieldsById, onFocusHandle, onChangefield, setFieldsById } = useForm({
		defaultFieldsById: isAutorizadores
			? autorizadoresfiltersFieldsById
			: itemsAsociadosfiltersFieldsById,
	})

	useEffect(() => {
		if (!isAutorizadores) {
			const {
				anios: { value },
				unidad_compra,
			} = fieldsById
			if (value !== -1) {
				if (unidad_compra.value !== -1) {
					//TODO: Buscar DATA (API)
				}
				setFieldsById({
					...fieldsById,
					unidad_compra: {
						...fieldsById.unidad_compra,
						disabled: false,
					},
				})
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fieldsById.anios])
	useEffect(() => {
		const {
			unidad_compra: { value },
		} = fieldsById
		if (value !== -1) {
			//TODO: Traer DATA por búsqueda (API)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fieldsById.unidad_compra.value])

	const nextDataSource = sortBy({ array: dataSource, key: 'nombre' })

	return (
		<Grid item sm={12}>
			<Grid container className={classes.wrapper} spacing={3}>
				<Grid item md={8} sm={12}>
					<Typography variant="h4" className={classes.title}>
						{title}
					</Typography>
					<Grid item md={12} container className={classes.root} spacing={3}>
						{!isAutorizadores && (
							<Select
								{...fieldsById.anios}
								onChange={onChangefield}
								onFocusHandle={onFocusHandle}
							/>
						)}
						<Select
							{...fieldsById.unidad_compra}
							onChange={onChangefield}
							onFocusHandle={onFocusHandle}
						/>
					</Grid>
				</Grid>
				<Grid item md={12}>
					<Divider />
				</Grid>
				<Grid item md={8} sm={12}>
					<Grid
						container
						item
						direction="column"
						className={classes.wrapperSectionTable}
					>
						{subTitle && <Typography>{subTitle}</Typography>}
						<Table columns={columns} dataSource={nextDataSource} />
					</Grid>
				</Grid>
				<Grid item md={4} sm={12}>
					{goBack && (
						<Button
							className={classes.button}
							variant="text"
							color="primary"
							onClick={goBack}
						>
							Volver a proyectos
						</Button>
					)}
					{items.length > 0 ? (
						isAutorizadores ? (
							<ListItems items={items} removeItem={removeItem} />
						) : (
							items.map(({ nombre, items }) => (
								<React.Fragment>
									<Typography variant="h5" className={classes.titleProject}>
										{nombre}
									</Typography>
									<ListItems items={items} removeItem={removeItem} />
								</React.Fragment>
							))
						)
					) : (
						<Typography className={classes.titleProject}>
							{isAutorizadores
								? 'No existen autorizadores a esta Orden de Compra'
								: 'No existen asociados a esta Orden de Compra'}
						</Typography>
					)}
				</Grid>
			</Grid>
		</Grid>
	)
}

export default PlanDeCompra
