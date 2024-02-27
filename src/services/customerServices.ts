import axios from 'axios'
import { type Customer } from '@/types/customer'

const {
  customersApi: { baseUrl }
} = Resources

const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-type': 'application/json'
  }
})

const registerCustomer = async (body: Customer): Promise<Customer | string> => {
  return await apiClient.post<Customer>('/auth/register', body).then((response) => response.data)
}

const customerServices = { registerCustomer }

export default customerServices
