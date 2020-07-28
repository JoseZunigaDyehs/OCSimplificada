import { OC, Autorizar } from 'screens'

export const routes = [
	{
		key: 1,
		path: `/`,
		title: `Crear OC`,
		component: OC,
	},
	{
		key: 2,
		path: `/autorizar`,
		title: `Autorizar`,
		component: Autorizar,
	},
]
