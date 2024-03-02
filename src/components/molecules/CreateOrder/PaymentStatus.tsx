import { useStripe } from '@stripe/react-stripe-js'
import { useEffect, useState, type FC } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import FORMS from '@/constants/forms'
import { ROUTES } from '@/constants'
import { getPaymentStatus } from '@/utils/utils'
import type { StripePaymentStatus } from '@/types/order'

const PaymentStatus: FC = () => {
  const stripe = useStripe()
  const navigate = useNavigate()
  const [paymentStatus, setPaymentStatus] = useState<StripePaymentStatus>({
    title: null,
    message: null,
    isError: false
  })

  // TODO: custom hook
  useEffect(() => {
    if (stripe == null) {
      return
    }

    const clientSecret =
      new URLSearchParams(window.location.search).get('payment_intent_client_secret') ?? 'secret undefined'

    void stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      setPaymentStatus(getPaymentStatus(paymentIntent))
    })
  }, [stripe])

  return (
    <Alert variant={paymentStatus.isError ? 'danger' : 'success'}>
      <Alert.Heading>{paymentStatus.title}</Alert.Heading>
      <p>{paymentStatus.message}</p>
      {paymentStatus.isError ? (
        <>
          <hr />
          <div className="d-flex justify-content-end">
            <Button
              onClick={() => {
                navigate(-1)
              }}
              variant="outline-danger"
            >
              {FORMS.buttons.payment.failed}
            </Button>
          </div>
        </>
      ) : (
        <Button
          onClick={() => {
            navigate(ROUTES.login)
          }}
          variant="outline-success"
        >
          {FORMS.buttons.login.label}
        </Button>
      )}
    </Alert>
  )
}

export default PaymentStatus
