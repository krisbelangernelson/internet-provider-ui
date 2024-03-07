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

const apiClient = axiosInstance(baseUrl, true)

const registerCustomer = async (body: CustomerRegister): Promise<RegisterResponse> => {
  return await apiClient.post<RegisterResponse>('/auth/register', body).then((response) => response.data)
}

const loginCustomer = async (body: CustomerLogin | undefined): Promise<CustomerResponse> => {
  return await apiClient.post<CustomerResponse>('/auth/login', body).then((response) => response.data)
}

const customerExists = async (body: CustomerExists): Promise<CustomerExistsResponse> => {
  return await apiClient
    .post<CustomerExistsResponse>('/customer/customer-exists', body)
    .then((response) => response.data)
}

const customerArea = async (): Promise<{ message: string }> => {
  return await apiClient.get<{ message: string }>('/customer/customer-area').then((response) => response.data)
}

const logout = async (): Promise<object> => {
  return await apiClient.get<object>('/auth/logout').then((response) => response.data)
}

const autoLoginCheck = async (): Promise<CustomerResponse> => {
  return await apiClient.get<CustomerResponse>('/auth/auto-login-check').then((response) => response.data)
}

const customerService = { registerCustomer, loginCustomer, customerExists, customerArea, logout, autoLoginCheck }

export default customerService
