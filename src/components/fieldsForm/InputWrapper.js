import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useStyles } from '../styles/useInputWrapperStyles'
import Loader from 'components/common/Loader'

function InputWrapper({
	label,
	required,
	rule,
	type,
	status = 'default',
	value,
	md = 12,
	paddingPosition,
	loading,
	children,
}) {
	const classes = useStyles()
	const getMessage = ({ type, label }) => {
		switch (type) {
			case 'select':
				return `* Seleccione ${label.toLowerCase()}`
			default:
				return `* Escribe ${label.toLowerCase()}`
		}
	}
	const message = rule.message || getMessage({ type, label })
	const getRestCharsValid = () => {
		const { max } = rule
		if (!value) {
			return `0/${max}`
		}
		const rest = max - value.length
		return `${rest}/${max}`
	}
	return (
		<Grid
			item
			md={md}
			container
			className={`${classes.wrapper} ${classes[paddingPosition]}`}
		>
			<Typography
				color="secondary"
				className={
					type === 'radio'
						? `${classes.labelRadio} ${classes.label}`
						: classes.label
				}
			>{`${label} ${required ? `` : `(opcional)`}`}</Typography>
			<Grid
				className={`${classes.inputWrapper} ${
					type === 'radio' ? classes.noBorder : classes[status]
				}`}
			>
				{loading ? <Loader height="40px" type="input" /> : children}
			</Grid>
			<Grid container justify="space-between" className={classes.bottomWrapper}>
				<Typography color="error" className={classes.invalidText}>
					{status === 'error' && message}
				</Typography>
				{type === 'textarea' && (
					<Typography className={classes.invalidText}>
						{getRestCharsValid()}
					</Typography>
				)}
			</Grid>
		</Grid>
	)
}

export default InputWrapper
