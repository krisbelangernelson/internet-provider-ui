import type {
  CustomerRegister,
  RegisterResponse,
  CustomerLogin,
  CustomerResponse,
  CustomerExists,
  CustomerExistsResponse
} from '@/types/customer'
import axiosInstance from '@/utils/axios'

const {
  customersApi: { baseUrl }
} = Resources

const apiClient = axiosInstance(baseUrl)

const registerCustomer = async (body: CustomerRegister): Promise<RegisterResponse> => {
  return await apiClient.post<RegisterResponse>('/auth/register', body).then((response) => response.data)
}

const loginCustomer = async (body: CustomerLogin): Promise<CustomerResponse> => {
  return await apiClient.post<CustomerResponse>('/auth/login', body).then((response) => response.data)
}

const customerExists = async (body: CustomerExists): Promise<CustomerExistsResponse> => {
  return await apiClient.post<CustomerExistsResponse>('/auth/customer-exists', body).then((response) => response.data)
}

const customerService = { registerCustomer, loginCustomer, customerExists }

export default customerService
