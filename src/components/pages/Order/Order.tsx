import { type FC } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SectionLayout from '@/components/templates/SectionLayout/SectionLayout'
import { Outlet } from 'react-router-dom'
import useRedirect from '@/hooks/useRedirect'
import { ROUTES, MAIN_HEADERS } from '@/constants'
import { useCustomerContext } from '@/providers/customer/CustomerContext'

const Order: FC = () => {
  const {
    state: {
      serviceSelection: { serviceType, offerName }
    }
  } = useCustomerContext()

  useRedirect(serviceType === '', ROUTES.internet)

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
        <Col>
          <Outlet />
        </Col>
      </Row>
    </SectionLayout>
  )
}

export default Order
