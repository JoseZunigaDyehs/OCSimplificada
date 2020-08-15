import axios from 'axios'

const API = {}
const baseURL = process.env.REACT_APP_API_URL || `https://run.mocky.io/v3/`

const axiosInstance = axios.create({
	baseURL,
	validateStatus() {
		return true
	},
	withCredentials: true,
})

//TODO: configurar API
// axiosInstance.interceptors.response.use(
// 	response => {
// 		const {
// 			data: { success, data },
// 		} = response
// 		if (success) {
// 			return data
// 		} else {
// 			const {
// 				data: {
// 					data: { message },
// 				},
// 			} = response
// 			return Promise.reject(message)
// 		}
// 	},
// 	error => Promise.reject(error)
// )

axiosInstance.interceptors.response.use(
	response => {
		return response.data
	},
	error => Promise.reject(error)
)

API.getToken = token => {
	const headers = {}
	if (token) {
		headers.token = token
	}
	return axiosInstance.get(`/getToken`, {
		headers,
	})
}

API.saveToken = token => {
	axiosInstance.interceptors.request.use(
		config => {
			config.headers.token = token
			config.headers[`Content-Type`] = `application/json`
			return config
		},
		error => Promise.reject(error)
	)
}

API.getRegiones = () =>
	axiosInstance.get('592f1898-d0ae-437e-b67a-9199a2326f2d')

API.getComunas = regionId =>
	axiosInstance.post(`/comuna/search`, {
		columns: `COD_REG`,
		values: regionId,
	})

API.getItemsByProyectoId = ({ anio, unidad_compra }) =>
	axiosInstance.get('8668cce9-fe8d-4367-9448-70e0eaf3f345')

API.getInitialData = () =>
	axiosInstance.get('35c39a3a-8f6d-483e-bf8e-39945d8e22af')

API.getUnidadCompraByAnio = anio =>
	axiosInstance.get('a00c535e-6122-47ba-82fb-18befce919f0', {
		params: { anio },
	})

API.getUnidadCompra = () =>
	axiosInstance.get('35c39a3a-8f6d-483e-bf8e-39945d8e22af')

export default API
