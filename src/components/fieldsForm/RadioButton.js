import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputWrapper from './InputWrapper'

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
					/>
				))}
			</RadioGroup>
		</InputWrapper>
	)
}

export default RadioButton
