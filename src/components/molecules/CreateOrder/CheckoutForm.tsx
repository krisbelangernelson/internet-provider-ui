import { useStripe, useElements, PaymentElement, AddressElement } from '@stripe/react-stripe-js'
import { type FormEvent, useState, type FC } from 'react'
import ButtonSpinner from '@/components/atoms/ButtonSpinner/ButtonSpinner'
import './CheckoutForm.scss'
import APP_ERRORS from '@/constants/appErrors'
import FORMS from '@/constants/forms'

const CheckoutForm: FC = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [message, setMessage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const confirmPayment = async (): Promise<void> => {
    if (stripe != null && elements != null) {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/order/completed`
        }
      })

      if (error.type === 'card_error' || error.type === 'validation_error') {
        setMessage(error.message ?? 'error.message undefined')
      } else {
        setMessage(APP_ERRORS.unexpectedError)
      }

      setIsProcessing(false)
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setIsProcessing(true)
    void confirmPayment()
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <AddressElement options={{ mode: 'shipping', allowedCountries: ['CA'] }} />
      <PaymentElement id="payment-element" className="mt-2" />
      <ButtonSpinner
        isDisabled={stripe == null || elements == null}
        isLoading={isProcessing}
        buttonLabel={FORMS.payment.label}
        loadingLabel={FORMS.payment.loadingLabel}
        className="w-100"
      />
      {message != null && <div id="payment-message">{message}</div>}
    </form>
  )
}

export default CheckoutForm
