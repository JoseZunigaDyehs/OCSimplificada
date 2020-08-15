import React, { useEffect, useState } from 'react'
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
import { sortBy, handleError } from 'utils'
import API from 'config/api'
import { useFeedback } from 'context'
import { unidadCompra, itemsByProyectoId } from 'mockup'

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
	columns = [],
	items,
	goBack = null,
	removeItem,
	isAutorizadores = true,
}) {
	const classes = useStyles()
	const [loading, setLoading] = useState(false)
	const [dataSource, setDataSource] = useState([])
	const { setFeedback } = useFeedback()
	const {
		fieldsById,
		onFocusHandle,
		onChangefield,
		setFieldsById,
		setLoadingField,
	} = useForm({
		defaultFieldsById: isAutorizadores
			? autorizadoresfiltersFieldsById
			: itemsAsociadosfiltersFieldsById,
	})

	useEffect(() => {
		if (!isAutorizadores) {
			const {
				anios: { value },
			} = fieldsById
			if (value !== -1) {
				const getUnidadCompraByAnio = async value => {
					try {
						setLoadingField({ name: 'unidad_compra', loading: true })
						//const items = await API.getUnidadCompraByAnio(value)
						setTimeout(() => {
							setFieldsById({
								...fieldsById,
								unidad_compra: {
									...fieldsById.unidad_compra,
									items: unidadCompra,
									disabled: false,
									loading: false,
									value: -1,
									isValid: true,
									status: 'default',
								},
							})
						}, 1000)
					} catch (error) {
						setLoadingField({ name: 'unidad_compra', loading: false })
						setFeedback({
							message: handleError(error),
							type: 'error',
							open: true,
						})
					}
				}
				getUnidadCompraByAnio(value)
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fieldsById.anios.value])
	useEffect(() => {
		const {
			unidad_compra: { value },
		} = fieldsById
		if (value !== -1) {
			//TODO: Traer DATA por búsqueda (API)
			const getItemsByProyectoId = async () => {
				try {
					setLoading(true)
					//const itemsByProyectoId = await API.getItemsByProyectoId(value)
					setTimeout(() => {
						setDataSource(itemsByProyectoId[value])
						setLoading(false)
					}, 1000)
				} catch (error) {
					setLoading(false)
					setFeedback({
						message: handleError(error),
						type: 'error',
						open: true,
					})
				}
			}
			getItemsByProyectoId()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fieldsById.unidad_compra.value])
	useEffect(() => {
		const getUnidadCompra = async value => {
			try {
				setLoadingField({ name: 'unidad_compra', loading: true })
				//const items = await API.getUnidadCompra()
				setTimeout(() => {
					setFieldsById({
						...fieldsById,
						unidad_compra: {
							...fieldsById.unidad_compra,
							items: unidadCompra,
							loading: false,
						},
					})
				}, 1000)
			} catch (error) {
				setLoadingField({ name: 'unidad_compra', loading: false })
				setFeedback({
					message: handleError(error),
					type: 'error',
					open: true,
				})
			}
		}
		getUnidadCompra()
	}, [])

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
						<Table
							loading={loading}
							columns={columns}
							dataSource={nextDataSource}
						/>
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
