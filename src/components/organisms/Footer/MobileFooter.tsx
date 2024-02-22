import { type ReactElement } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import Stack from 'react-bootstrap/Stack'
import Accordion from 'react-bootstrap/Accordion'

const MobileFooter = (): ReactElement => (
  <Container className="mt-5">
    <Row style={{ minHeight: '200px', padding: '1rem' }} className="mob-col-desk-row">
      <Col>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <Link to="/internet" className="fw-bold">
                Internet
              </Link>
            </Accordion.Header>
            <Accordion.Body>
              <Stack>
                <Link to="/internet">Our plans</Link>
                <Link to="/internet/how-it-works">How it works</Link>
              </Stack>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <Link to="#" className="fw-bold">
                Why Ping!?
              </Link>
            </Accordion.Header>
            <Accordion.Body>
              <Stack>
                <Link to="#">Our company</Link>
                <Link to="#">Social engagement</Link>
                <Link to="#">Rewards</Link>
              </Stack>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <Link to="#" className="fw-bold">
                Help
              </Link>
            </Accordion.Header>
            <Accordion.Body>
              <Stack>
                <Link to="#">FAQ</Link>
                <Link to="#">Support</Link>
              </Stack>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <Link to="#" className="fw-bold mb-2">
                Socials
              </Link>
            </Accordion.Header>
            <Accordion.Body>
              <Stack>
                <Link to="#">Facebook</Link>
                <Link to="#">LinkedIn</Link>
                <Link to="#">YouTube</Link>
              </Stack>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Row>
  </Container>
)

export default MobileFooter
