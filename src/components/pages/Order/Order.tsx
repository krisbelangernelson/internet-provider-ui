import { type ReactElement, type FC } from 'react'
import { useLocation } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ServiceAvailability from '@/components/molecules/ServiceAvailability/ServiceAvailability'
import CustomerForm from '@/components/molecules/CreateOrder/CustomerForm'
// import { type Customer } from '@/types/customer'
import Payment from '@/components/molecules/CreateOrder/Payment'
import { type Stripe } from '@stripe/stripe-js'
import { type OrderNavigateState } from '@/types/order'

interface Props {
  page?: string
  stripePromise: Stripe | null
}

const Order: FC<Props> = ({ page, stripePromise }): ReactElement => {
  const params = useLocation()
  const { serviceSelected, speed } = (params.state as OrderNavigateState) ?? {}

  if (serviceSelected === undefined || speed === undefined) {
    window.location.href = '/internet'
  }

  let section = null

  if (page === 'customer') {
    section = <CustomerForm />
  } else if (page === 'payment') {
    section = <Payment stripePromise={stripePromise} />
  } else {
    section = <ServiceAvailability />
  }

  return (
    <Container className="text-center">
      <Row>
        <Col className="fs-2">
          Ordering{' '}
          <span className="primary">
            {serviceSelected?.toUpperCase()}-{speed?.toUpperCase()}
          </span>
        </Col>
      </Row>
      <Row>
        <Col>{section}</Col>
      </Row>
    </Container>
  )
}

export default Order
