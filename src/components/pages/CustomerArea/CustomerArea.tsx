import { type FC, useMemo } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import customerService from '@/services/customerService'
import { useQuery } from '@tanstack/react-query'
import Loading from '@/components/atoms/Loading/Loading'
import SectionLayout from '@/components/templates/SectionLayout/SectionLayout'
import { useCustomerContext } from '@/providers/customer/CustomerContext'
import Button from 'react-bootstrap/Button'
import { ROUTES } from '@/constants'
import FORMS from '@/constants/forms'
import { useNavigate } from 'react-router-dom'

const CustomerArea: FC = () => {
  const {
    state: { customerInfo }
  } = useCustomerContext()
  const navigate = useNavigate()
  // TODO: use notification component to show error
  const { data, isLoading, isError } = useQuery({
    queryKey: ['customer-area'],
    queryFn: customerService.customerArea,
    enabled: true,
    retry: false
  })
  const isLoggedIn = useMemo(() => customerInfo.accessToken === '', [customerInfo.accessToken])

  if ((isLoading || data === undefined) && !isError) {
    return <Loading />
  }

  return (
    <SectionLayout title="Customer Area">
      <Row>
        {isLoggedIn ? (
          <Col>
            <div>You must login to access this area.</div>
            <Button
              onClick={() => {
                navigate(ROUTES.login)
              }}
              className="mt-2"
            >
              {FORMS.buttons.login.label}
            </Button>
          </Col>
        ) : (
          <Col>
            <div>Your Service</div>
            <div>{JSON.stringify(data)}</div>
          </Col>
        )}
      </Row>
    </SectionLayout>
  )
}
export default CustomerArea
