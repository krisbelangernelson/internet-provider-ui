import { type ReactElement } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import SectionLayout from '@/components/templates/SectionLayout/SectionLayout'

const CustomerAccount = (): ReactElement => (
  <SectionLayout title="Customer Account">
    <Row>
      <Col>
        <div>Area...</div>
      </Col>
    </Row>
  </SectionLayout>
)

export default CustomerAccount
