import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useState, useEffect, type FC } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { type Stripe } from '@stripe/stripe-js'
import type { OrderNavigateState } from '@/types/order'
import { useLocation } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import orderService from '@/services/orderService'
import CheckoutForm from './CheckoutForm'
import logger from '@/utils/logger'
import { PAGE_HEADERS } from '@/constants'

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
  // TODO: make into a hook
  if (customer === undefined) {
    window.location.href = '/internet'
  }

  // TODO: use notification component to show error
  const { mutateAsync: stripePayment } = useMutation({
    mutationFn: async (body: PaymentBody) => await orderService.stripePaymenIntent(body)
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
      .catch((error: Error) => {
        logger.error(error, 'stripePayment')
      })
  }, [])

  return (
    <>
      <Row>
        <Col className="fs-2 mb-2">{PAGE_HEADERS.payment}</Col>
      </Row>
      <Row className="text-center">
        <Col md={{ span: 8, offset: 2 }} lg={{ span: 4, offset: 4 }}>
          {clientSecret !== '' && stripePromise != null && (
            <>
              <div className="fs-3 mb-2 primary">Total: ${total}</div>
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm />
              </Elements>
            </>
          )}
        </Col>
      </Row>
    </>
  )
}

export default Payment
