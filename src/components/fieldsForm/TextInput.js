import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputWrapper from './InputWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { colors } from 'config/theme'
import {
	faExclamationCircle,
	faCheckCircle,
} from '@fortawesome/free-solid-svg-icons'

const useTextAreaStyles = makeStyles(({ spacing }) => ({
	textarea: {
		padding: spacing(1),
	},
}))

const styles = makeStyles(() => ({
	root: {
		'& input:valid + fieldset': {
			borderWidth: 0,
		},
		'& $notchedOutline': {
			borderWidth: 0,
		},
		'&:hover $notchedOutline': {
			borderWidth: 0,
		},
		'&$focused $notchedOutline': {
			borderWidth: 0,
		},
	},
	focused: {},
	notchedOutline: {
		borderWidth: 0,
	},
}))

function IconInput({ status, type }) {
	if (status === 'default' || status === 'focused') return null
	return (
		<InputAdornment>
			<FontAwesomeIcon
				color={status === 'error' ? colors.error.main : colors.success.main}
				icon={status === 'error' ? faExclamationCircle : faCheckCircle}
			/>
		</InputAdornment>
	)
}

function TextInput({
	name,
	value,
	placeholder = '',
	required,
	onChange,
	disabled,
	isValid,
	type,
	status,
	onFocusHandle,
	rows = 4,
	mode,
	...rest
}) {
	const classes = styles()
	const classesTextArea = useTextAreaStyles()
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
			<OutlinedInput
				startAdornment={
					mode === 'phone' ? (
						<InputAdornment position="start">+56</InputAdornment>
					) : null
				}
				onChange={({ target: { name, value } }) => onChange({ name, value })}
				id={name}
				classes={classes}
				className={type === 'textarea' ? classesTextArea.textarea : ''}
				multiline={type === 'textarea'}
				rows={rows}
				name={name}
				disabled={disabled}
				placeholder={placeholder}
				value={value === null ? '' : value}
				endAdornment={<IconInput status={status} type={type} />}
				onFocus={({ target: { name } }) => {
					onFocusHandle({ name, isFocused: true })
				}}
				onBlur={({ target: { name } }) => {
					onFocusHandle({ name, isFocused: false })
				}}
			/>
		</InputWrapper>
	)
}

export default TextInput
