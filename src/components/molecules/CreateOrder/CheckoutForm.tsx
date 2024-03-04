import { useStripe, useElements, PaymentElement, AddressElement } from '@stripe/react-stripe-js'
import { type FormEvent, useState, type FC } from 'react'
import ButtonSpinner from '@/components/atoms/ButtonSpinner/ButtonSpinner'
import './CheckoutForm.scss'
import APP_ERRORS from '@/constants/appErrors'
import FORMS from '@/constants/forms'
import { ROUTES } from '@/constants'
import type { StripeAddress } from '@/types/order'
import { useCustomerContext } from '@/providers/customer/CustomerContext'

interface CheckoutFormProps {
  customerId: string | undefined
}

const CheckoutForm: FC<CheckoutFormProps> = ({ customerId }) => {
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

  // TODO: Prefill address form?
  // https://docs.stripe.com/elements/address-element/collect-addresses?platform=web#prefill-address-form
  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <AddressElement
        options={{ mode: 'billing', allowedCountries: ['CA'] }}
        onChange={(event) => {
          const address = event.value.address
          setAddress(address)
        }}
      />
      <PaymentElement id="payment-element" className="mt-2" />
      <ButtonSpinner
        isDisabled={stripe == null || elements == null}
        isLoading={isProcessing}
        buttonLabel={FORMS.buttons.payment.label}
        loadingLabel={FORMS.buttons.payment.loadingLabel}
        className="w-100"
      />
      {message != null && <div id="payment-message">{message}</div>}
    </form>
  )
}

export default CheckoutForm
