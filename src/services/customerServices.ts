import { type Customer } from '@/types/customer'
import { axiosInstance } from '@/utils/utils'

const {
  customersApi: { baseUrl }
} = Resources

const apiClient = axiosInstance(baseUrl)

const registerCustomer = async (body: Customer): Promise<Customer | string> => {
  return await apiClient.post<Customer>('/auth/register', body).then((response) => response.data)
}

const customerServices = { registerCustomer }

export default customerServices
