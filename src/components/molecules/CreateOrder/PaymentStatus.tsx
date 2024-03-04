import { useStripe } from '@stripe/react-stripe-js'
import { useEffect, useState, type FC } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { useNavigate, useSearchParams } from 'react-router-dom'
import FORMS from '@/constants/forms'
import { ROUTES } from '@/constants'
import { getPaymentStatus } from '@/utils/utils'
import type { StripePaymentStatus, CreateOrder } from '@/types/order'
import { useMutation } from '@tanstack/react-query'
import orderService from '@/services/orderService'
import logger from '@/utils/logger'

const PaymentStatus: FC = () => {
  const stripe = useStripe()
  const navigate = useNavigate()
  const [paymentStatus, setPaymentStatus] = useState<StripePaymentStatus>({
    title: null,
    message: null,
    isError: false
  })
  const [searchParams] = useSearchParams()

  // TODO: use notification component to show error
  const { mutateAsync: createOrder } = useMutation({
    mutationFn: async (body: CreateOrder) => await orderService.createOrder(body)
  })

  // TODO: custom hook
  useEffect(() => {
    if (stripe == null) {
      return
    }

    const clientSecret = searchParams.get('payment_intent_client_secret')

    if (clientSecret == null) {
      return
    }

    // TODO: handle errors?
    void stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      const status = getPaymentStatus(paymentIntent)
      setPaymentStatus(status)

      if (!status.isError) {
        const data = {
          offerId: searchParams.get('offer_id') ?? '',
          line1: searchParams.get('line1') ?? '',
          line2: searchParams.get('line2') ?? '',
          city: searchParams.get('city') ?? '',
          state: searchParams.get('state') ?? '',
          postal_code: searchParams.get('postal_code') ?? '',
          country: searchParams.get('country') ?? '',
          customerId: searchParams.get('customer_id') ?? ''
        }

        void createOrder(data).catch((error: Error) => {
          logger.error(error, 'createOrder')
        })
      }

      // Prevents a reorder
      navigate(ROUTES.orderCompleted, { replace: true })
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
