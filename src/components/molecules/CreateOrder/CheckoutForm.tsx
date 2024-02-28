import { useStripe, useElements, PaymentElement, AddressElement } from '@stripe/react-stripe-js'
import { type FormEvent, useState, type FC } from 'react'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import { useMutation } from '@tanstack/react-query'
import customerServices from '@/services/customerServices'
import { type CustomerRegister } from '@/types/customer'
import Alert from 'react-bootstrap/Alert'
import './CheckoutForm.scss'

interface Props {
  customer?: CustomerRegister
}

const CheckoutForm: FC<Props> = ({ customer }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [message, setMessage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const {
    mutateAsync: registerCustomer,
    isPending,
    isError
  } = useMutation({
    mutationFn: async (body: CustomerRegister) => await customerServices.registerCustomer(body)
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    if (stripe != null && elements != null) {
      setIsLoading(true)

      if (customer !== undefined) {
        // TODO: should the customer be created before or after?
        await registerCustomer(customer).catch((error) => {
          console.error(error) // eslint-disable-line no-console
          setIsLoading(false)
        })

        if (!isPending && !isError) {
          const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
              return_url: `${window.location.origin}/order/completed`
            }
          })

          if (error.type === 'card_error' || error.type === 'validation_error') {
            setMessage(error.message ?? 'error.message undefined')
          } else {
            setMessage('An unexpected error occured.')
          }

          setIsLoading(false)
        }
      }
    }
  }

  return (
    /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
    <form id="payment-form" onSubmit={handleSubmit}>
      <AddressElement options={{ mode: 'shipping', allowedCountries: ['CA'] }} />
      <PaymentElement id="payment-element" className="mt-2" />
      <Button
        variant="primary"
        type="submit"
        disabled={isPending || isLoading || stripe == null || elements == null}
        id="submit"
        className="w-100"
      >
        {isLoading ? (
          <>
            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
            <span className="ms-1">Paying</span>
          </>
        ) : (
          <>Pay Now</>
        )}
      </Button>
      {isError && <Alert variant="danger">An unexpected error occured. Please contact support.</Alert>}
      {message != null && <div id="payment-message">{message}</div>}
    </form>
  )
}

export default CheckoutForm
