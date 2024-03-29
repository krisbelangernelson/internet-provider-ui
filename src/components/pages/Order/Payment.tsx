import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useState, useEffect, type FC } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { type Stripe } from '@stripe/stripe-js'
import { useLocation } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import orderService from '@/services/orderService'
import CheckoutForm from '@/components/molecules/CheckoutForm/CheckoutForm'
import { MAIN_HEADERS, ROUTES } from '@/constants'
import useRedirect from '@/hooks/useRedirect'
import { useCustomerContext } from '@/providers/customer/CustomerContext'
import type { CustomerRegister } from '@/types/customer'
import { useNotificationContext } from '@/providers/notification/NotificationContext'

interface Props {
  stripePromise: Stripe | null
}

interface PaymentBody {
  plan: string
}

const Payment: FC<Props> = ({ stripePromise }) => {
  const [clientSecret, setClientSecret] = useState('')
  const [total, setTotal] = useState(0)
  const location = useLocation()
  const {
    state: {
      serviceSelection: { serviceType, offerName }
    }
  } = useCustomerContext()
  const { showErrorNotification } = useNotificationContext()

  const { customer } = (location.state as { customer: CustomerRegister }) ?? {}

  useRedirect(customer === undefined, ROUTES.internet)

  const { mutateAsync: stripePayment } = useMutation({
    mutationFn: async (body: PaymentBody) => await orderService.stripePaymenIntent(body)
  })

  useEffect(() => {
    void stripePayment({
      plan: `${serviceType}-${offerName}`
    })
      .then((response) => {
        const { clientSecret, amount } = response
        setClientSecret(clientSecret)
        setTotal(amount)
      })
      .catch((error: Error) => {
        showErrorNotification({ error, caller: 'Payment' })
      })
  }, [])

  return (
    <>
      <Row>
        <Col className="fs-2 mb-2">{MAIN_HEADERS.payment}</Col>
      </Row>
      <Row className="text-center">
        <Col md={{ span: 8, offset: 2 }} lg={{ span: 4, offset: 4 }}>
          {clientSecret !== '' && stripePromise != null && (
            <>
              <div className="fs-3 mb-2 primary">Total: ${total}</div>
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm customerId={customer?.id} />
              </Elements>
            </>
          )}
        </Col>
      </Row>
    </>
  )
}

export default Payment
