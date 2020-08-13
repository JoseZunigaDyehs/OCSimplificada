import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SelectMui from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import InputAdornment from '@material-ui/core/InputAdornment'
import InputWrapper from './InputWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { colors } from 'config/theme'
import {
	faExclamationCircle,
	faCheckCircle,
	faAngleDown,
	faAngleUp,
} from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles(({ spacing, fontSizes, palette }) => ({
	root: {},
	iconStatus: {
		marginRight: spacing(1),
		cursor: 'pointer',
	},
	iconSelect: {
		fontSize: fontSizes[4],
		color: palette.secondary.light,
		cursor: 'pointer',
	},
}))

function IconInput({ status, open, onClick }) {
	const classes = useStyles()
	return (
		<InputAdornment onClick={onClick}>
			{status === 'default' || status === 'focused' ? null : (
				<FontAwesomeIcon
					color={status === 'error' ? colors.error.main : colors.success.main}
					icon={status === 'error' ? faExclamationCircle : faCheckCircle}
					className={classes.iconStatus}
				/>
			)}
			{open ? (
				<FontAwesomeIcon icon={faAngleUp} className={classes.iconSelect} />
			) : (
				<FontAwesomeIcon icon={faAngleDown} className={classes.iconSelect} />
			)}
		</InputAdornment>
	)
}

function Select({
	name,
	value,
	required,
	onChange,
	disabled,
	isValid,
	type,
	status,
	onFocusHandle,
	items,
	withoutSelectPlaceholder = true,
	...rest
}) {
	const [open, setOpen] = useState(false)
	const onToggleHandle = () => {
		setOpen(!open)
	}
	return (
		<InputWrapper
			name={name}
			value={value}
			required={required}
			isValid={isValid}
			type={type}
			status={status}
			{...rest}
		>
			<SelectMui
				onOpen={onToggleHandle}
				onClose={onToggleHandle}
				open={open}
				variant="outlined"
				onChange={({ target: { value } }) => onChange({ name, value })}
				id={name}
				name={name}
				disabled={disabled}
				value={value}
				endAdornment={
					<IconInput status={status} onClick={onToggleHandle} open={open} />
				}
				onFocus={() => {
					onFocusHandle({ name, isFocused: true })
				}}
				onBlur={() => {
					onFocusHandle({ name, isFocused: false })
				}}
			>
				{withoutSelectPlaceholder && <MenuItem value={-1}>Selecciona</MenuItem>}
				{items.map(x => (
					<MenuItem key={x.id} value={x.id}>
						{x.label}
					</MenuItem>
				))}
			</SelectMui>
		</InputWrapper>
	)
}

export default Select
