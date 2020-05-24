export const OCForm = {
  fieldsById: {
    despacho_observacion: {
      name: 'despacho_observacion',
      label: 'Observación de despacho',
      required: false,
      isValid: true,
      status: 'default',
      type: 'textarea',
      placeholder: 'Ingresar observaciones o indicaciones para el despacho',
      value: null,
      rule: { type: 'range', min: 5, max: 50 },
    },
  },
}
