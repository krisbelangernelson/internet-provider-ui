import { useStripe } from '@stripe/react-stripe-js'
import { useEffect, useState, type ReactElement } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const PaymentStatus = (): ReactElement => {
  const stripe = useStripe()
  const navigate = useNavigate()
  const [message, setMessage] = useState<string | null>(null)
  const [title, setTitle] = useState<string | null>(null)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (stripe == null) {
      return
    }

    const clientSecret =
      new URLSearchParams(window.location.search).get('payment_intent_client_secret') ?? 'client secret undefined'

    void stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      if (paymentIntent != null) {
        switch (paymentIntent.status) {
          case 'succeeded':
            setTitle('Thank you!')
            setMessage(`Your purchase for $${paymentIntent.amount} has been accepted successfully.`)
            break

          case 'processing':
            setTitle('Payment processing.')
            setMessage("We'll update you when payment is received.")
            break

          case 'requires_payment_method':
            setIsError(true)
            setTitle('Payment failed.')
            setMessage('Please try another payment method.')
            break

          default:
            setIsError(true)
            setTitle('Error.')
            setMessage('Something went wrong.')
            break
        }
      }
    })
  }, [stripe, navigate, setMessage])

  return (
    <Alert variant={isError ? 'danger' : 'success'}>
      <Alert.Heading>{title}</Alert.Heading>
      <p>{message}</p>
      {isError ? (
        <>
          <hr />
          <div className="d-flex justify-content-end">
            <Button
              onClick={() => {
                navigate(-1)
              }}
              variant="outline-success"
            >
              Try again
            </Button>
          </div>
        </>
      ) : (
        <>Login</>
      )}
    </Alert>
  )
}

export default PaymentStatus
