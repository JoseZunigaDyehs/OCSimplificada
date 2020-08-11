import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
	({ spacing, fontSizes, palette, fontWeights, breakpoints }) => ({
		label: {
			paddingBottom: spacing(1),
			textTransform: 'uppercase',
			fontSize: fontSizes[0],
			color: palette.secondary.light,
			fontWeight: fontWeights[2],
			letterSpacing: '.5px',
		},
		labelRadio: {
			color: '#000',
			fontWeight: fontWeights[3],
			textTransform: 'initial',
			fontSize: fontSizes[1],
			paddingBottom: 0,
		},
		invalidText: {
			fontSize: fontSizes[0],
		},
		inputWrapper: {
			border: `1px solid`,
			borderRadius: '5px',
			width: '100%',
		},
		noBorder: {
			borderColor: 'transparent',
		},
		default: {
			borderColor: palette.secondary.light,
		},
		error: {
			borderColor: palette.error.main,
		},
		success: {
			borderColor: palette.success.main,
		},
		focused: {
			borderColor: palette.primary.main,
		},
		wrapper: {
			flexBasis: 'auto',
			position: 'relative',
			paddingBottom: '0 !important',
		},
		bottomWrapper: {
			position: 'absolute',
			bottom: '-20px',
		},
		//PADDING POSITION
		left: {
			paddingLeft: spacing(2),
			[breakpoints.down('sm')]: {
				paddingLeft: 0,
			},
		},
		right: {
			paddingRight: spacing(2),
			[breakpoints.down('sm')]: {
				paddingRight: 0,
			},
		},
	})
)

function InputWrapper({
	label,
	required,
	rule,
	type,
	status = 'default',
	value,
	md = 12,
	paddingPosition,
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
				{children}
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
