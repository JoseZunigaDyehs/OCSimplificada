export const OCForm = {
  fieldsById: {
    despacho_observacion: {
      name: 'despacho_observacion',
      isRequired: true,
      type: 'textarea',
      value: '',
      rule: { type: 'range', min: 0, max: 50 },
    },
  },
}
