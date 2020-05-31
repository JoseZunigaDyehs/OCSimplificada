import { useState } from 'react'
import { validator } from 'utils'

function useForm({ defaultFieldsById }) {
  const [fieldsById, setFieldsById] = useState(defaultFieldsById)

  const getStatus = ({ isValid, required, type, value, status }) => {
    if (required) {
      return isValid ? 'success' : 'error'
    } else {
      if (!isValid) {
        if (type === 'select') {
          return value !== -1
            ? 'error'
            : status === 'focused'
            ? 'focused'
            : 'default'
        } else {
          return value !== ''
            ? 'error'
            : status === 'focused'
            ? 'focused'
            : 'default'
        }
      }
      return 'success'
    }
  }
  const validate = ({ value, rule }) => {
    const isValid = validator[rule.type]({ ...rule, value })
    return isValid
  }
  const onFocusHandle = ({ name, isFocused }) => {
    const nextField = fieldsById[name]
    nextField.status = isFocused ? 'focused' : getStatus({ ...nextField })
    setFieldsById((prev) => ({
      ...prev,
      [name]: { ...[name], ...nextField },
    }))
  }
  const onChangefield = ({ name, value }) => {
    const nextField = fieldsById[name]
    nextField.value = value
    nextField.isValid = validate(nextField)
    nextField.status = getStatus({ ...nextField })
    setFieldsById((prev) => ({
      ...prev,
      [name]: { ...[name], ...nextField },
    }))
  }
  return { fieldsById, onFocusHandle, onChangefield, setFieldsById }
}

export default useForm
