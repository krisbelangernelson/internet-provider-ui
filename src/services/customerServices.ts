import axios, { type AxiosError } from 'axios'
import { type Customer } from '@/types/customer'

// TODO: move to config
const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
  headers: {
    'Content-type': 'application/json'
  }
})

// interface ErrorResponseData {
//   message: string
// }

const registerCustomer = async (body: Customer): Promise<Customer | string> => {
  return await apiClient.post<Customer>('/auth/register', body).then((response) => response.data)
  // .catch((error: AxiosError) => {
  //   console.error(error) // eslint-disable-line no-console
  //   if (error?.response !== undefined) {
  //     if (error.response.data !== undefined) {
  //       throw new Error((error.response.data as ErrorResponseData).message)
  //     }
  //   }
  //   throw new Error(error.message)
  // })
}

const customerServices = { registerCustomer }

export default customerServices
