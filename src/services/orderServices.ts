import { type StripeConfig } from '@/types/order'
import { axiosInstance } from '@/utils/utils'

const {
  ordersApi: { baseUrl }
} = Resources

const apiClient = axiosInstance(baseUrl)

export const stripeConfig = async (): Promise<StripeConfig> => {
  return await apiClient.get<StripeConfig>('/stripe/config').then((response) => response.data)
}

const orderServices = { stripeConfig }

export default orderServices
