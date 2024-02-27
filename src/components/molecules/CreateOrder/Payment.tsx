import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useState, useEffect, type FC } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { type Stripe } from '@stripe/stripe-js'
import type { OrderNavigateState } from '@/types/order'
import { useLocation } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import orderServices from '@/services/orderServices'
import CheckoutForm from './CheckoutForm'

interface Props {
  stripePromise: Stripe | null
}

interface PaymentBody {
  plan: string
}

const Payment: FC<Props> = ({ stripePromise }) => {
  const [clientSecret, setClientSecret] = useState('')
  const [total, setTotal] = useState(0)
  const params = useLocation()
  const { serviceSelected, speed, customer } = (params.state as OrderNavigateState) ?? {}

  // Don't allow payment access without customer info
  if (customer === undefined) {
    window.location.href = '/internet'
  }

  const { mutateAsync: stripePayment } = useMutation({
    mutationFn: async (body: PaymentBody) => await orderServices.stripePaymenIntent(body)
  })

  useEffect(() => {
    void stripePayment({
      plan: `${serviceSelected}-${speed}`
    })
      .then((response) => {
        const { clientSecret, amount } = response
        setClientSecret(clientSecret)
        setTotal(amount)
      })
      .catch((error) => {
        console.error(error) // eslint-disable-line no-console
      })
  }, [])

  return (
    <>
      <Row>
        <Col className="fs-2 mb-2">Payment</Col>
      </Row>
      <Row className="text-center">
        <Col md={{ span: 8, offset: 2 }} lg={{ span: 4, offset: 4 }}>
          {clientSecret !== '' && stripePromise != null && (
            <>
              <div className="fs-3 mb-2 primary">Total: ${total}</div>
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm customer={customer} />
              </Elements>
            </>
          )}
        </Col>
      </Row>
    </>
  )
}

export default Payment
