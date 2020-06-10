import React from 'react'
import { Select } from 'components/fieldsForm'
import { Table, Divider, ListItems, Button } from 'components'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { planDeCompraFieldsById } from './data'
import useForm from 'hooks/useForm'
import { makeStyles } from '@material-ui/core/styles'

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

//TODO:
//HEADER
//	Parametrizar todo
//BODY
// Search table // Toggle
// List By Categories
// Button Volver

function PlanDeCompra({
	title = '',
	subTitle = '',
	table = {},
	items,
	goBack = null,
	removeItem,
}) {
	const classes = useStyles()
	const { fieldsById, onFocusHandle, onChangefield } = useForm({
		defaultFieldsById: planDeCompraFieldsById,
	})
	return (
		<Grid item sm={12}>
			<Grid container className={classes.wrapper} spacing={3}>
				<Grid item md={8} sm={12}>
					<Typography variant="h4" className={classes.title}>
						{title}
					</Typography>
					<Grid item md={12} container className={classes.root} spacing={3}>
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
						<Typography>{subTitle}</Typography>
						<Table {...table} />
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
					{items.map(({ nombre, items }) => (
						<React.Fragment>
							<Typography variant="h5" className={classes.titleProject}>
								{nombre}
							</Typography>
							<ListItems items={items} removeItem={removeItem} />
						</React.Fragment>
					))}
				</Grid>
			</Grid>
		</Grid>
	)
}

export default PlanDeCompra
