import axios from 'axios'
import { type StripeConfig } from '@/types/order'

const {
  ordersApi: { baseUrl }
} = Resources

const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-type': 'application/json'
  }
})

export const stripeConfig = async (): Promise<StripeConfig> => {
  return await apiClient.get<StripeConfig>('/stripe/config').then((response) => response.data)
}

const orderServices = { stripeConfig }

export default orderServices
