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

// TODO: consts
const CustomerArea: FC = () => {
  const isLoggedIn = useIsLoggedIn()

  // TODO: use notification component to show error
  const { data, isLoading, isError } = useQuery({
    queryKey: ['customer-area'],
    queryFn: customerService.customerArea,
    enabled: true,
    retry: false
  })

  if ((isLoading || data === undefined) && !isError) {
    return <Loading />
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
            <LoginNoAccess />
          )}
        </Col>
      </Row>
    </SectionLayout>
  )
}
export default CustomerArea
