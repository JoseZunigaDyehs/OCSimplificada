import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputWrapper from './InputWrapper'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette }) => ({
	root: {
		'&$checked': {
			color: palette.primary.main,
		},
	},
}))

function RadioButton({
	name,
	onChange,
	required,
	isValid,
	type,
	value,
	items,
	status,
	...rest
}) {
	const classes = useStyles()
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
			<RadioGroup
				color="primary"
				aria-label="gender"
				name={name}
				value={value}
				onChange={({ target: { value } }) => {
					onChange({ value, name })
				}}
			>
				{items.map(x => (
					<FormControlLabel
						key={`${name}-${x.id}`}
						value={x.id.toString()}
						control={<Radio />}
						label={x.label}
						classes={{ root: classes.label }}
					/>
				))}
			</RadioGroup>
		</InputWrapper>
	)
}

export default RadioButton
