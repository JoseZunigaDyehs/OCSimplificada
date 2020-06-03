import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { TextInput, RadioButton } from 'components/fieldsForm'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
	title: {
		paddingBottom: spacing(2),
	},
	wrapper: {
		marginRight: spacing(4),
		[breakpoints.down(`sm`)]: {
			marginRight: spacing(0),
		},
	},
	plazoEntrega: {
		margin: spacing(4, 0, 0, 0),
	},
	button: {
		marginTop: spacing(1),
	},
}))

function Step2({
	title = '',
	fieldsById,
	onChange,
	onFocusHandle,
	//setModalConfig,
}) {
	const classes = useStyles()
	return (
		<Grid container direction="column">
			<Typography variant="h5" className={classes.title}>
				{title}
			</Typography>
			<Grid container>
				<Grid item md={8} xs={12}>
					<Grid className={classes.wrapper}>
						<RadioButton
							{...fieldsById.plazo_pago}
							onChange={onChange}
							onFocusHandle={onFocusHandle}
						/>
					</Grid>
				</Grid>
				<Grid item md={4} xs={12}>
					<TextInput
						{...fieldsById.pago_observacion}
						onChange={onChange}
						onFocusHandle={onFocusHandle}
					/>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Step2
