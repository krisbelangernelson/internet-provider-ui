import { type FC } from 'react'
import { useLocation } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ServiceAvailability from '@/components/molecules/ServiceAvailability/ServiceAvailability'
import CustomerForm from '@/components/molecules/CreateOrder/CustomerForm'
import Payment from '@/components/molecules/CreateOrder/Payment'
import { type Stripe } from '@stripe/stripe-js'
import { type OrderNavigateState } from '@/types/order'
import SectionLayout from '@/components/templates/SectionLayout/SectionLayout'

interface Props {
  page?: string
  stripePromise: Stripe | null
}

// TODO: convert into HOC for the 3 section to be pages and be DRY?
const Order: FC<Props> = ({ page, stripePromise }) => {
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

  const title = (
    <>
      Ordering{' '}
      <span className="primary">
        {serviceSelected?.toUpperCase()}-{speed?.toUpperCase()}
      </span>
    </>
  )

  return (
    <SectionLayout title={title}>
      <Row>
        <Col>{section}</Col>
      </Row>
    </SectionLayout>
  )
}

export default Order
