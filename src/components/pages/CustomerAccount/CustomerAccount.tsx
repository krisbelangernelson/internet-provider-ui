import { type ReactElement } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import CustomerForm from '@/components/molecules/CreateOrder/CustomerForm'

const CustomerAccount = (): ReactElement => (
  <Container>
    <Row>
      <Col className="text-center">Account</Col>
    </Row>
    <Row>
      <Col>Sign in</Col>
    </Row>
  </Container>
)

export default CustomerAccount
