import { PaymentElement, AddressElement } from '@stripe/react-stripe-js'
import { type FC } from 'react'
import ButtonSpinner from '@/components/atoms/ButtonSpinner/ButtonSpinner'
import './CheckoutForm.scss'
import FORMS from '@/constants/forms'
import useCheckoutForm from './useCheckoutForm'

interface CheckoutFormProps {
  customerId: string | undefined
}

// TODO: Prefill address form?
// https://docs.stripe.com/elements/address-element/collect-addresses?platform=web#prefill-address-form
const CheckoutForm: FC<CheckoutFormProps> = ({ customerId }) => {
  const { data, handlers } = useCheckoutForm(customerId)
  const { message, isProcessing, stripe, elements } = data
  const { handleSubmit, setAddress } = handlers

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
