import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useState, useEffect, type FC } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { type Stripe } from '@stripe/stripe-js'
import axios from 'axios'
import CheckoutForm from './CheckoutForm'
import { type OrderNavigateState } from '@/types/order'
import { useLocation } from 'react-router-dom'

interface Props {
  stripePromise: Stripe | null
}

interface StripeIntent {
  clientSecret: string
  amount: number
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

  // TODO: useMutation, config url
  useEffect(() => {
    void axios
      .post('http://localhost:3002/api/v1/stripe/create-payment-intent', {
        plan: `${serviceSelected}-${speed}`
      })
      .then(async (response) => {
        const { clientSecret, amount } = (await response.data) as StripeIntent
        setClientSecret(clientSecret)
        setTotal(amount)
      })
      .catch((error) => {
        console.error(error)
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
