import { useState } from 'react'
import { validator } from 'utils'

function useForm({ defaultFieldsById }) {
	const [fieldsById, setFieldsById] = useState(defaultFieldsById)

	const getStatus = ({ required, type, value, rule, isFocused }) => {
		const nextIsValid = validate({ rule, value })
		if (required) {
			return nextIsValid ? 'success' : 'error'
		} else {
			if (!nextIsValid) {
				if (type === 'select') {
					return value !== -1 ? 'error' : isFocused ? 'focused' : 'default'
				} else {
					return value !== '' ? 'error' : isFocused ? 'focused' : 'default'
				}
			}
			return 'success'
		}
	}
	const format = () => {
		const fieldsIds = Object.keys(fieldsById)
		let fieldsFormat = {}
		fieldsIds.forEach(id => {
			fieldsFormat = {
				...fieldsFormat,
				[id]: fieldsById[id].value,
			}
		})
		return fieldsFormat
	}
	const validate = ({ value, rule }) => {
		const isValid = validator[rule.type]({ ...rule, value })
		return isValid
	}
	const isAllValid = () => {
		const fieldsIds = Object.keys(fieldsById)
		const isValid = []
		fieldsIds.forEach(field => {
			const { required, value, rule } = fieldsById[field]
			if (required) {
				if (!validate({ value, rule })) {
					isValid.push(field)
				}
			}
		})
		return isValid.length > 0
	}
	const onFocusHandle = ({ name, isFocused }) => {
		const nextField = fieldsById[name]
		nextField.status = isFocused
			? 'focused'
			: getStatus({ ...nextField, isFocused })
		setFieldsById(prev => ({
			...prev,
			[name]: { ...[name], ...nextField },
		}))
	}
	const onChangefield = ({ name, value }) => {
		const nextField = fieldsById[name]
		let nextValue = value
		if (nextField.rule.type === 'range') {
			nextValue = value.substr(0, nextField.rule.max)
		}
		nextField.value = nextValue
		nextField.isValid = validate(nextField)
		nextField.status = getStatus({ ...nextField })
		setFieldsById(prev => ({
			...prev,
			[name]: { ...[name], ...nextField },
		}))
	}
	const setLoadingField = ({ name, loading }) => {
		setFieldsById({ ...fieldsById, [name]: { ...fieldsById[name], loading } })
	}
	return {
		fieldsById,
		onFocusHandle,
		onChangefield,
		setFieldsById,
		format,
		isAllValid,
		setLoadingField,
	}
}

export default useForm
