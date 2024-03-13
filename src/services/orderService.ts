import type { StripeConfig, StripeIntent, CreateOrder } from '@/types/order'
import axiosInstance from '@/utils/axios'

const {
  ordersApi: { baseUrl }
} = Resources

const apiClient = axiosInstance(baseUrl)

const stripeConfig = async (): Promise<StripeConfig> => {
  return await apiClient.get<StripeConfig>('/stripe/config').then((response) => response.data)
}

const stripePaymenIntent = async (body: { plan: string }): Promise<StripeIntent> => {
  return await apiClient.post<StripeIntent>('/stripe/create-payment-intent', body).then((response) => response.data)
}

const createOrder = async (body: CreateOrder): Promise<{ code: string }> => {
  return await apiClient.post<{ code: string }>('/order', body).then((response) => response.data)
}

const orderService = { stripeConfig, stripePaymenIntent, createOrder }

export default orderService
