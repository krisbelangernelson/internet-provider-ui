import axios, { type AxiosInstance } from 'axios'

const axiosInstance = (baseUrl: string, withCredentials = false): AxiosInstance =>
  axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-type': 'application/json'
    },
    withCredentials
  })

export default axiosInstance
