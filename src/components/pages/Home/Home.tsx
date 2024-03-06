import { type ReactElement } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Home = (): ReactElement => {
  return (
    <Container>
      <Row>
        <Col className="text-center">Home Page</Col>
      </Row>
    </Container>
  )
}

export default Home
