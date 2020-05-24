//Objeto con keys para validar inputs
//Retorna si es válido o no
//@boolean
export const validator = {
  //Any / Null ni undefined
  null: ({ value }) => value !== null || value !== undefined,
  date: ({ value }) => value !== null || value !== undefined,
  //String / que no esté vacio
  empty: ({ value }) => value && value.trim().length > 0,
  //Number / que sea un número y mayor a 0
  number: ({ value }) => !isNaN(value) && value > 0,
  //String / que sea un teléfono
  phone: ({ value }) => {
    const regex = /\D*([+56]\d[2-9])(\d{4})(\d{4})\D*/
    return value && regex.test(value.trim())
  },
  //String / que sea un email válido
  email: ({ value }) => {
    const regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    return value && regex.test(value.trim())
  },
  //String / min y max del string,
  //pasandole un atributo ranges
  //ranges: Number Array [min,max]
  range: ({ value, min, max }) => {
    return value !== '' && value.length > min && value.length < max
  },
  //String / valida Money
  money: ({ value }) => {
    let nextValue = `${value}`.replace(/\$\s?|(\.*)/g, ``)
    nextValue = parseInt(nextValue, 10)
    return !isNaN(nextValue) && nextValue > 0
  },
  //Any / valida que sea distinto de -1 (Defecto/Seleccione)
  select: ({ value }) => value !== -1,
}
