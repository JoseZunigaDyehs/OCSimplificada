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
export const anios = [
	{ id: '2020', label: '2020' },
	{ id: '2019', label: '2019' },
	{ id: '2018', label: '2018' },
	{ id: '2017', label: '2017' },
	{ id: '2016', label: '2016' },
	{ id: '2015', label: '2015' },
	{ id: '2014', label: '2014' },
	{ id: '2013', label: '2013' },
	{ id: '2014', label: '2014' },
]
export const unidadCompra = [
	{ id: '1', label: 'Unidad 1' },
	{ id: '2', label: 'Unidad 2' },
	{ id: '3', label: 'Unidad 3' },
	{ id: '4', label: 'Unidad 4' },
	{ id: '5', label: 'Unidad 5' },
]
export const proyectos = [
	{ id: '1', nombre: 'Proyecto 1' },
	{ id: '2', nombre: 'Proyecto 2' },
	{ id: '3', nombre: 'Proyecto 3' },
]
export const itemsByProyectoId = {
	'1': [
		{
			id: '1',
			nombre: 'Item 1',
			proyectoId: '1',
			proyectoNombre: 'Proyecto 1',
		},
		{
			id: '2',
			nombre: 'Item 2',
			proyectoId: '1',
			proyectoNombre: 'Proyecto 1',
		},
		{
			id: '3',
			nombre: 'Item 3',
			proyectoId: '1',
			proyectoNombre: 'Proyecto 1',
		},
		{
			id: '4',
			nombre: 'Item 4',
			proyectoId: '1',
			proyectoNombre: 'Proyecto 1',
		},
		{
			id: '5',
			nombre: 'Item 5',
			proyectoId: '1',
			proyectoNombre: 'Proyecto 1',
		},
	],
	'2': [
		{
			id: '6',
			nombre: 'Item 6',
			proyectoId: '2',
			proyectoNombre: 'Proyecto 2',
		},
		{
			id: '7',
			nombre: 'Item 7',
			proyectoId: '2',
			proyectoNombre: 'Proyecto 2',
		},
		{
			id: '8',
			nombre: 'Item 8',
			proyectoId: '2',
			proyectoNombre: 'Proyecto 2',
		},
	],
	'3': [
		{
			id: '11',
			nombre: 'Item 11',
			proyectoId: '3',
			proyectoNombre: 'Proyecto 3',
		},
		{
			id: '12',
			nombre: 'Item 12',
			proyectoId: '3',
			proyectoNombre: 'Proyecto 3',
		},
		{
			id: '13',
			nombre: 'Item 13',
			proyectoId: '3',
			proyectoNombre: 'Proyecto 3',
		},
		{
			id: '14',
			nombre: 'Item 14',
			proyectoId: '3',
			proyectoNombre: 'Proyecto 3',
		},
		{
			id: '15',
			nombre: 'Item 15',
			proyectoId: '3',
			proyectoNombre: 'Proyecto 3',
		},
	],
}

const autorizadoresData = [
	{ id: '1', nombre: 'Nombre 1', apellido: 'Apellido 1', cargo: 'Cargo 1' },
	{ id: '2', nombre: 'Nombre 2', apellido: 'Apellido 2', cargo: 'Cargo 2' },
	{ id: '3', nombre: 'Nombre 3', apellido: 'Apellido 3', cargo: 'Cargo 3' },
	{ id: '4', nombre: 'Nombre 4', apellido: 'Apellido 4', cargo: 'Cargo 4' },
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
	proyectosPlanCompra: [],
	proyectos,
	itemsByProyectoId,
	documentosAdjuntos: [],
	autorizadoresData,
	autorizadores: [],
}
