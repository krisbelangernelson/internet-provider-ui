import axios, { type AxiosInstance } from 'axios'

const axiosInstance = (baseUrl: string): AxiosInstance =>
  axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-type': 'application/json'
    }
  })

export default axiosInstance
