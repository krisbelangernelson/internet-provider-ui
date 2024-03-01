import { type CustomerRegister } from '@/types/customer'

export interface OrderNavigateState {
  serviceSelected?: string
  speed?: string
  price?: number
  customer?: CustomerRegister
}

export interface StripeConfig {
  publishableKey: string
}

export interface StripeIntent {
  clientSecret: string
  amount: number
}

export interface StripePaymentStatus {
  title: string | null
  message: string | null
  isError: boolean
}
