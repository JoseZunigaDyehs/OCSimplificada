import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(({ palette }) => ({
	primary: {
		'&:hover': {
			color: 'white',
			backgroundColor: palette.primary.dark,
		},
	},
	secondary: {
		'&:hover': {
			backgroundColor: 'white',
			color: palette.primary.main,
			borderColor: palette.primary.main,
		},
	},
	success: {
		backgroundColor: palette.success.main,
		'&:hover': {
			backgroundColor: palette.success.dark,
		},
	},
	error: {
		backgroundColor: palette.error.main,
		'&:hover': {
			backgroundColor: palette.error.dark,
		},
	},
	gray: {
		backgroundColor: palette.secondary.light,
		'&:hover': {
			backgroundColor: palette.secondary.main,
		},
	},
}))
const useTextStyles = makeStyles(({ palette }) => ({
	primary: {
		'&:hover': {
			backgroundColor: palette.primary.dark,
		},
	},
	secondary: {
		'&:hover': {
			color: palette.primary.main,
			borderColor: palette.primary.main,
		},
	},
	success: {
		'&:hover': {
			color: palette.success.dark,
		},
	},
	error: {
		color: palette.error.main,
		'&:hover': {
			color: palette.error.dark,
		},
	},
}))

/**
 *
 * VARIANT =  'contained' (DEFAULT) 'outlined', 'text
 * COLOR = primary, secondary, success, error, default
 */
function ButtonWrapper({
	onClick,
	disabled,
	variant = 'contained',
	color = 'default',
	className = '',
	children,
}) {
	const classes = useStyles()
	const textClasses = useTextStyles()
	return (
		<Button
			variant={variant}
			color={color}
			disabled={disabled}
			className={`${
				variant === 'text' ? textClasses[color] : classes[color]
			} ${className}`}
			onClick={onClick}
		>
			{children}
		</Button>
	)
}

export default ButtonWrapper
