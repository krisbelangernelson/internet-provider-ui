import { type ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Order = (): ReactElement => {
  const { plan } = useParams()
  return (
    <Container>
      <Row>
        <Col>Order- {plan}</Col>
      </Row>
    </Container>
  )
}

export default Order
