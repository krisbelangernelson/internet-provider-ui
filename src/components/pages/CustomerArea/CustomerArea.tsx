import { type FC } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import customerService from '@/services/customerService'
import { useQuery } from '@tanstack/react-query'
import Loading from '@/components/atoms/Loading/Loading'
import SectionLayout from '@/components/templates/SectionLayout/SectionLayout'
import LoginNoAccess from '@/components/atoms/LoginNoAccess/LoginNoAccess'
import Logout from '@/components/atoms/Logout/Logout'
import useIsLoggedIn from '@/hooks/useIsLoggedIn'
import { useNotificationContext } from '@/providers/notification/NotificationContext'
import RegisterCustomerArea from '@/components/atoms/RegisterCustomerArea/RegisterCustomerArea'

// TODO: consts
const CustomerArea: FC = () => {
  const isLoggedIn = useIsLoggedIn()
  const { showErrorNotification } = useNotificationContext()

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['customer-area'],
    queryFn: customerService.customerArea,
    enabled: true,
    retry: false
  })

  if ((isLoading || data === undefined) && !isError) {
    return <Loading />
  }

  if (isError) {
    showErrorNotification({ error, caller: 'CustomerArea' })
  }

  return (
    <SectionLayout title="Customer Area">
      <Row>
        <Col>
          {isLoggedIn ? (
            <>
              <div>Your Service</div>
              <div>{JSON.stringify(data)}</div>
              <Logout />
            </>
          ) : (
            <>
              <LoginNoAccess />
              <RegisterCustomerArea className="mt-3" />
            </>
          )}
        </Col>
      </Row>
    </SectionLayout>
  )
}
export default CustomerArea
