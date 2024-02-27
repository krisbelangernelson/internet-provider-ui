import axios from 'axios'
import { type Customer } from '@/types/customer'

// TODO: move to config
const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
  headers: {
    'Content-type': 'application/json'
  }
})

const registerCustomer = async (body: Customer): Promise<Customer | string> => {
  return await apiClient.post<Customer>('/auth/register', body).then((response) => response.data)
}

const customerServices = { registerCustomer }

export default customerServices
