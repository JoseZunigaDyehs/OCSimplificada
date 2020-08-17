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
	ordenId: '2241-09-AG20',
	convenioMarco: '123-12-COtoS',
	regionId: `13`,
	regionLabel: 'Metropolitana de Santiago',
	withDireccionDespacho: true, // Si puede tener dirección de despacho
	direccionDespacho: {
		id: 1,
		label: 'Primera direccion 1111',
		comunaId: '13110',
		comunaLabel: 'Santiago',
	},
	detalleProductos: {
		productos: [
			{ nombre: 'Producto  1', unitario: 58890, cantidad: 2, id: 123456 },
			{ nombre: 'Producto  2', unitario: 58890, cantidad: 1, id: 123457 },
			{ nombre: 'Producto  3', unitario: 58890, cantidad: 1, id: 123458 },
		],
		subtotal: 143667844,
	},
	pago30Dias: true,

	nombreOC: 'Este es el nombre de la OC',
	despachoObservacion: 'Este es la instruccion de despacho',
	plazoPago: '3',
	pagoJustificacion: 'Esta es la justificación',
	nombreContactoCompra: 'Maite',
	apellidoContactoCompra: 'Ignacy',
	telefonoContactoCompra: '987675536', //TODO: Agregar el +56
	emailContactoCompra: 'ma.ignacy@gmail.com',
	nombreContactoPago: 'Maite',
	apellidoContactoPago: 'Ignacy',
	telefonoContactoPago: '987675536', //TODO: Agregar el +56
	emailContactoPago: 'ma.ignacy@gmail.com',
	indicacionesFactura: 'indicacion de la factura',
	emailEnvioFactura: 'ma.ignacy@gmail.com',
	asociarPlanCompra: '2',
	documentosAdjuntar: '1',
	autoriza: '2',
	proyectosPlanCompra: [], // Listado Seleccionado
	direccionEnvioFactura: direccionesFactura[0], // Listado Seleccionado
	autorizadores: [], // Listado Seleccionado
	documentosAdjuntos: [], // Listado y state

	direccionesFactura, // Listado
	proyectos: [], //Listado
	autorizadoresData: [], // Listado
	itemsByProyectoId: {}, // Listado Items por proyecto (Plandecompras)
	resumeOC: {
		razonSocialProveedor: 'Razón Social Proveedor',
		rut: '96.000.000-0',
		neto: 5000133,
		impuestos: 60987,
		total: 1080954,
	},
	totals: {
		totalConvenio: 120000,
		subtotal: 120000,
		iva: 22800,
		impuestos: 0,
		totalFinal: 142800,
	},
}
