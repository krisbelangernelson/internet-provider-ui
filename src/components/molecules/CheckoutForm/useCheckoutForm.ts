import { useStripe, useElements } from '@stripe/react-stripe-js'
import { type FormEvent, useState, type Dispatch, type SetStateAction } from 'react'
import './CheckoutForm.scss'
import APP_ERRORS from '@/constants/appErrors'
import { ROUTES } from '@/constants'
import type { StripeAddress } from '@/types/order'
import { useCustomerContext } from '@/providers/customer/CustomerContext'
import { type Stripe, type StripeElements } from '@stripe/stripe-js'

interface UseCheckoutForm {
  data: { elements: StripeElements | null; isProcessing: boolean; message: string | null; stripe: Stripe | null }
  handlers: {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void
    setAddress: Dispatch<SetStateAction<StripeAddress | null>>
  }
}

const useCheckoutForm = (customerId: string | undefined): UseCheckoutForm => {
  const stripe = useStripe()
  const elements = useElements()
  const [message, setMessage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [address, setAddress] = useState<StripeAddress | null>(null)
  const {
    state: {
      serviceSelection: { offerId }
    }
  } = useCustomerContext()

  const confirmPayment = async (): Promise<void> => {
    setIsProcessing(true)
    if (stripe != null && elements != null) {
      let addressParams = ''
      const customerParam = customerId !== undefined ? `&customer_id=${customerId}` : ''
      const speedParam = offerId != null ? `&offer_id=${offerId}` : ''

      if (address != null) {
        addressParams = new URLSearchParams({
          ...address,
          ...(address.line2 == null ? { line2: '' } : { line2: address.line2 })
        }).toString()
      }

      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}${ROUTES.orderCompleted}?${addressParams}${customerParam}${speedParam}`
        }
      })

      if (error.type === 'card_error' || error.type === 'validation_error') {
        setMessage(error.message ?? 'error.message undefined')
      } else {
        setMessage(APP_ERRORS.unexpectedError)
      }
    }
    setIsProcessing(false)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    void confirmPayment()
  }

  return {
    data: {
      message,
      isProcessing,
      stripe,
      elements
    },
    handlers: {
      handleSubmit,
      setAddress
    }
  }
}

export default useCheckoutForm
