import { type ReactElement } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import { Stack } from 'react-bootstrap'

const Footer = (): ReactElement => (
  <Container className="mt-5">
    <Row style={{ minHeight: '200px', padding: '1rem' }}>
      <Col>
        <Stack>
          <Link to="/internet" className="fw-bold mb-2">
            Internet
          </Link>
          <Link to="/internet">Our plans</Link>
          <Link to="/internet/how-it-works">How it works</Link>
        </Stack>
      </Col>
      <Col>
        <Stack>
          <Link to="#" className="fw-bold mb-2">
            Why Ping!?
          </Link>
          <Link to="#">Our company</Link>
          <Link to="#">Social engagement</Link>
          <Link to="#">Rewards</Link>
        </Stack>
      </Col>
      <Col>
        <Stack>
          <Link to="#" className="fw-bold mb-2">
            Help
          </Link>
          <Link to="#">FAQ</Link>
          <Link to="#">Support</Link>
        </Stack>
      </Col>
      <Col>
        <Stack>
          <Link to="#" className="fw-bold mb-2">
            Socials
          </Link>
          <Link to="#">Facebook</Link>
          <Link to="#">LinkedIn</Link>
          <Link to="#">YouTube</Link>
        </Stack>
      </Col>
    </Row>
  </Container>
)

export default Footer
