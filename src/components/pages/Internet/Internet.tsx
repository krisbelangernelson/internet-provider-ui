import { type ReactElement, useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ServiceSelection from '@/components/molecules/ServiceSelection/ServiceSelection'
import SpeedSelection from '@/components/molecules/SpeedSelection/SpeedSelection'

const Internet = (): ReactElement => {
  const [serviceSelected, setServiceSelected] = useState<string>('home')
  const [selectedSpeed, setSelectedSpeed] = useState<string>('')

  useEffect(() => {
    if (serviceSelected !== '' && selectedSpeed !== '') {
      window.location.href = `/order/${serviceSelected}-${selectedSpeed}`
    }
  }, [serviceSelected, selectedSpeed])

  return (
    <Container>
      <Row className="mb-2 align-items-center">Featured Offer</Row>
      <Row className="mb-2 align-items-center">
        <Col>
          <span className="fs-2">1. Choose Your Service</span>
        </Col>
        <Col>
          <div className="d-flex justify-content-end fs-6">
            <a href="/internet/how-it-works" className="fw-bold">
              Help me choose
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <ServiceSelection serviceSelected={serviceSelected} setServiceSelected={setServiceSelected} />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="mt-5" />
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <span className="fs-2">2. Choose Your Speed</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <SpeedSelection
            serviceSelected={serviceSelected}
            setSelectedSpeed={setSelectedSpeed}
            selectedSpeed={selectedSpeed}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Internet
