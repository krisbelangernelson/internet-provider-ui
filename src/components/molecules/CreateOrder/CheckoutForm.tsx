import { useStripe, useElements, PaymentElement, AddressElement } from '@stripe/react-stripe-js'
import { type FormEvent, useState, type FC } from 'react'
import { useMutation } from '@tanstack/react-query'
import customerServices from '@/services/customerServices'
import { type CustomerRegister } from '@/types/customer'
import Alert from 'react-bootstrap/Alert'
import ButtonSpinner from '@/components/atoms/ButtonSpinner/ButtonSpinner'
import './CheckoutForm.scss'
import APP_ERRORS from '@/constants/appErrors'
import { handleAxiosError } from '@/utils/handleError'
import FORMS from '@/constants/forms'

interface Props {
  customer?: CustomerRegister
}

const CheckoutForm: FC<Props> = ({ customer }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [message, setMessage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const {
    mutate: registerCustomer,
    isPending,
    isError
  } = useMutation({
    mutationFn: async (body: CustomerRegister) => await customerServices.registerCustomer(body),
    onError: (error) => {
      handleAxiosError(error, 'loginCustomer')
      setIsProcessing(false)
    },
    onSuccess: async () => {
      if (!isError && stripe != null && elements != null) {
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
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (customer !== undefined) {
      setIsProcessing(true)
      // TODO: should the customer be created before or after?
      registerCustomer(customer)
    }
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <AddressElement options={{ mode: 'shipping', allowedCountries: ['CA'] }} />
      <PaymentElement id="payment-element" className="mt-2" />
      <ButtonSpinner
        isDisabled={isPending || isProcessing || stripe == null || elements == null}
        isLoading={isProcessing}
        buttonLabel={FORMS.payment.label}
        loadingLabel={FORMS.payment.loadingLabel}
        className="w-100"
      />
      {/* TODO: consolidate these two errors */}
      {isError && <Alert variant="danger">{APP_ERRORS.unexpectedError}</Alert>}
      {message != null && <div id="payment-message">{message}</div>}
    </form>
  )
}

export default CheckoutForm
