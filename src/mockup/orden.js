export const direccionesDespacho = [
	{ id: 1, label: 'Primera direccion 1111', comunaId: '13110' },
	{ id: 2, label: 'Segunda direccion 2222', comunaId: '13110' },
	{ id: 3, label: 'Tercera direccion 3333', comunaId: '13110' },
]
export const direccionesFactura = [
	{ id: 1, label: 'Primera direccion factura 1111, Región de Nuble' },
	{
		id: 2,
		label: 'Segunda direccion factura 2222, Región Metropoliltana de Santiago',
	},
	{
		id: 3,
		label: 'Tercera direccion factura 3333, Región, Region de Valparaíso',
	},
]
export const ordenDataMock = {
	ordenId: '500977-140-CM20',
	convenioMarco: 'CM 18/2006-TTO, INTEGRAL DE VITRECTOMÍA Y OTROS',
	regionId: `13`,
	regionLabel: 'Metropolitana de Santiago',
	withDireccionDespacho: true,
	diasHabiles: 10,
	direccionesDespacho: [], //Llena al abrir componente
	direccionDespacho: direccionesDespacho[0],
	pago30Dias: true,
	direccionesFactura,
	direccionEnvioFactura: direccionesFactura[0],
}
