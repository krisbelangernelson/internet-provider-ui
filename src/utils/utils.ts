import { type PaymentIntent } from '@stripe/stripe-js'
import type { StripePaymentStatus } from '@/types/order'

export const normalizeInputPhone = (value: string): string => {
  if (value === '') return value
  const currentValue = value.replace(/[^\d]/g, '')
  const cvLength = currentValue.length

  if (cvLength < 4) return currentValue
  if (cvLength < 7) return `${currentValue.slice(0, 3)}-${currentValue.slice(3)}`
  return `${currentValue.slice(0, 3)}-${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`
}

export const keepDigits = (value: string): string => {
  return value.replace(/[^\d]/g, '')
}

// TODO: lang/constants
export const getPaymentStatus = (paymentIntent: PaymentIntent | undefined): StripePaymentStatus => {
  if (paymentIntent != null) {
    switch (paymentIntent.status) {
      case 'succeeded':
        return {
          title: 'Thank you!',
          message: `Your order for $${paymentIntent.amount} has been processed successfully.`,
          isError: false
        }

      case 'processing':
        return {
          title: 'Payment processing.',
          message: "We'll update you when payment is received.",
          isError: false
        }

      case 'requires_payment_method':
        return {
          title: 'Payment failed.',
          message: 'Please try another payment method.',
          isError: true
        }

      default:
        return {
          title: 'Error.',
          message: 'Something went wrong.',
          isError: true
        }
    }
  }
  return { title: null, message: null, isError: false }
}
