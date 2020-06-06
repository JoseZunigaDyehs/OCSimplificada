import React from 'react'
import { useOrden } from 'context'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { RadioButton } from 'components/fieldsForm'
import { makeStyles } from '@material-ui/core/styles'
import { Divider, PlanDeCompra } from 'components'

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

function Step3({ title = '', fieldsById, onChange, onFocusHandle }) {
	const classes = useStyles()

	const {
		orden: { direccionesFactura },
	} = useOrden()
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
				<PlanDeCompra />
			</Grid>
		</Grid>
	)
}

export default Step3
