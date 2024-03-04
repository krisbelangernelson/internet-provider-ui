import { type FC } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import customerService from '@/services/customerService'
import { useQuery } from '@tanstack/react-query'
import Loading from '@/components/atoms/Loading/Loading'
import SectionLayout from '@/components/templates/SectionLayout/SectionLayout'

const CustomerArea: FC = () => {
  // TODO: use notification component to show error
  const { data, isLoading } = useQuery({
    queryKey: ['customer-area'],
    queryFn: customerService.customerArea,
    enabled: true
  })

  if (isLoading || data === undefined) {
    return <Loading />
  }

  return (
    <SectionLayout title="Customer Area">
      <Row>
        <Col>
          <div>Your Service</div>
          <div>{JSON.stringify(data)}</div>
        </Col>
      </Row>
    </SectionLayout>
  )
}
export default CustomerArea
