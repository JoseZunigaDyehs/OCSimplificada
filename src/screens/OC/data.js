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
		plazo_pago: {
			name: 'plazo_pago',
			label: 'Plazo de pago',
			required: false,
			isValid: true,
			status: 'default',
			type: 'radio',
			placeholder: 'Ingresar observaciones o indicaciones para el pago',
			value: '1',
			items: [
				{
					id: '1',
					label: '30 días contra la recepción conforme de la factura',
				},
				{ id: '2', label: 'Mayor a 30 días' },
			],
			rule: { type: 'null' },
		},
		pago_observacion: {
			name: 'pago_observacion',
			label: 'Observación de pago',
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
