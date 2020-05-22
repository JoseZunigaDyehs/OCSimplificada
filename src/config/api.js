import axios from 'axios'

const API = {}
const baseURL = process.env.REACT_APP_API_URL || `http://localhost:8000/api/`

const axiosInstance = axios.create({
  baseURL,
  validateStatus() {
    return true
  },
  withCredentials: true,
})

//TODO: configurar API
axiosInstance.interceptors.response.use(
  (response) => {
    const {
      data: { success, data },
    } = response
    if (success) {
      return data
    } else {
      const {
        data: {
          data: { message },
        },
      } = response
      return Promise.reject(message)
    }
  },
  (error) => Promise.reject(error),
)

API.getToken = (token) => {
  const headers = {}
  if (token) {
    headers.token = token
  }
  return axiosInstance.get(`/getToken`, {
    headers,
  })
}

API.saveToken = (token) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      config.headers.token = token
      config.headers[`Content-Type`] = `application/json`
      return config
    },
    (error) => Promise.reject(error),
  )
}

API.getComunas = (regionId) =>
  axiosInstance.post(`entidad/comuna/search`, {
    columns: `COD_REG`,
    values: regionId,
  })

export default API
