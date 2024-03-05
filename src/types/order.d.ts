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

export interface StripeAddress {
  line1: string
  line2: string | null
  city: string
  state: string
  country: string
  postal_code: string
}

export interface CreateOrder extends StripeAddress {
  offerId: string
}
