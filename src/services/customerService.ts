import type { CustomerRegister, RegisterResponse, CustomerLogin, CustomerResponse } from '@/types/customer'
import axiosInstance from '@/utils/axios'

const {
  customersApi: { baseUrl }
} = Resources

const apiClient = axiosInstance(baseUrl)

const registerCustomer = async (body: CustomerRegister): Promise<RegisterResponse> => {
  return await apiClient.post<RegisterResponse>('/auth/registerr', body).then((response) => response.data)
}

const loginCustomer = async (body: CustomerLogin): Promise<CustomerResponse> => {
  return await apiClient.post<CustomerResponse>('/auth/login', body).then((response) => response.data)
}

const emailExists = async (email: string): Promise<{ exists: boolean }> => {
  return await apiClient.post<{ exists: boolean }>('/auth/email-exists', { email }).then((response) => response.data)
}

const customerService = { registerCustomer, loginCustomer, emailExists }

export default customerService
