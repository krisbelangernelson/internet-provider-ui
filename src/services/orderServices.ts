import type { StripeConfig, StripeIntent } from '@/types/order'
import { axiosInstance } from '@/utils/utils'

const {
  ordersApi: { baseUrl }
} = Resources

const apiClient = axiosInstance(baseUrl)

export const stripeConfig = async (): Promise<StripeConfig> => {
  return await apiClient.get<StripeConfig>('/stripe/config').then((response) => response.data)
}

export const stripePaymenIntent = async (body: { plan: string }): Promise<StripeIntent> => {
  return await apiClient.post<StripeIntent>('/stripe/create-payment-intent', body).then((response) => response.data)
}

const orderServices = { stripeConfig, stripePaymenIntent }

export default orderServices
