import { type Customer } from '@/types/customer'

export interface OrderNavigateState {
  serviceSelected?: string
  speed?: string
  price?: number
  customer?: Customer
}

export interface StripeConfig {
  publishableKey: string
}
