import { type FC } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ServiceAvailability from '@/components/molecules/ServiceAvailability/ServiceAvailability'
import Payment from '@/components/molecules/CreateOrder/Payment'
import { type Stripe } from '@stripe/stripe-js'
import SectionLayout from '@/components/templates/SectionLayout/SectionLayout'
import useRedirect from '@/hooks/useRedirect'
import Customer from './Customer'
import { ROUTES, MAIN_HEADERS } from '@/constants'
import { useCustomerContext } from '@/providers/customer/CustomerContext'

interface Props {
  page?: string
  stripePromise: Stripe | null
}

// TODO: convert into HOC for the 3 section to be pages and be DRY?
// use an Outlet instead
const Order: FC<Props> = ({ page, stripePromise }) => {
  const {
    state: {
      serviceSelection: { serviceType, offerName }
    }
  } = useCustomerContext()

  useRedirect(serviceType === '', ROUTES.internet)

  let section = null

  if (page === 'customer') {
    section = <Customer />
  } else if (page === 'payment') {
    section = <Payment stripePromise={stripePromise} />
  } else {
    section = <ServiceAvailability />
  }

  const title = (
    <>
      {MAIN_HEADERS.ordering}{' '}
      <span className="primary">
        {serviceType?.toUpperCase()}-{offerName?.toUpperCase()}
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
