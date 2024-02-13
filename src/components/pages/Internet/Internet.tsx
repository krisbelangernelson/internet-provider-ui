import { type ReactElement, useState, useEffect, useMemo } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ServiceSelection from '@/components/molecules/ServiceSelection/ServiceSelection'
import SpeedSelection from '@/components/molecules/SpeedSelection/SpeedSelection'
import SpeedDetailsModal from '@/components/molecules/SpeedDetailsModal/SpeedDetailsModal'
import { offersAvailable } from '@/constants'

const Internet = (): ReactElement => {
  const [serviceSelected, setServiceSelected] = useState<string>('home')
  const [selectedSpeed, setSelectedSpeed] = useState<string>('')
  const [modalShow, setModalShow] = useState(false)

  const sortedOffers = useMemo(() => {
    return offersAvailable.sort((offerA, offerB) => {
      const a = offerA.bandwidthDown
      const b = offerB.bandwidthDown
      return Number(a) - Number(b)
    })
  }, [offersAvailable])

  const speedOffers = sortedOffers.filter((offer) => offer.type === serviceSelected)

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
        <Col>
          <div className="d-flex justify-content-end fs-6">
            <a
              href="#"
              className="fw-bold"
              onClick={() => {
                setModalShow(true)
              }}
            >
              Help me choose
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <SpeedSelection
            serviceSelected={serviceSelected}
            setSelectedSpeed={setSelectedSpeed}
            selectedSpeed={selectedSpeed}
            speedOffers={[...speedOffers].reverse()}
          />
        </Col>
      </Row>
      <SpeedDetailsModal
        show={modalShow}
        onHide={() => {
          setModalShow(false)
        }}
        offers={speedOffers}
      />
    </Container>
  )
}

export default Internet
