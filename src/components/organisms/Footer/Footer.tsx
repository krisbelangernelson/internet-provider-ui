import { type ReactElement } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = (): ReactElement => (
  <Row style={{ minHeight: '200px', padding: '1rem' }}>
    <Col className="text-center">Internet</Col>
    <Col className="text-center">Why Ping!?</Col>
    <Col className="text-center">Help</Col>
    <Col className="text-center">Socials</Col>
  </Row>
)

export default Footer
