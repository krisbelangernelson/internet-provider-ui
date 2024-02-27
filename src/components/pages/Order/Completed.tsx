import { Elements } from '@stripe/react-stripe-js'
import { type Stripe } from '@stripe/stripe-js'
import { type FC } from 'react'
import PaymentStatus from '@/components/molecules/CreateOrder/PaymentStatus'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

interface Props {
  stripePromise: Stripe | null
}

const Completed: FC<Props> = ({ stripePromise }) => {
  return (
    <Elements stripe={stripePromise}>
      <Container className="text-center">
        <Row>
          <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }} className="text-center">
            <PaymentStatus />
          </Col>
        </Row>
      </Container>
    </Elements>
  )
}

export default Completed
