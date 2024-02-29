import SectionLayout from '@/components/templates/SectionLayout/SectionLayout'
import { type FC } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const NotFound: FC = () => (
  <SectionLayout title="Oops...">
    <Row>
      <Col>That page doesn&apos;t exist</Col>
    </Row>
  </SectionLayout>
)

export default NotFound
