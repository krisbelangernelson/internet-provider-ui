import { type ReactElement, useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ServiceSelection from '@/components/molecules/ServiceSelection/ServiceSelection'
import SpeedSelection from '@/components/molecules/SpeedSelection/SpeedSelection'
import SpeedDetailsModal from '@/components/molecules/SpeedDetailsModal/SpeedDetailsModal'
import { useQuery } from '@tanstack/react-query'
import { type InternetService } from '@/types/InternetService'
import internetServices from '@/services/internetServices'
import Spinner from 'react-bootstrap/Spinner'

const Internet = (): ReactElement => {
  const [serviceSelected, setServiceSelected] = useState<string>('')
  const [speedSelected, setSpeedSelected] = useState<string>('')
  const [modalShow, setModalShow] = useState(false)
  const [sortedOffers, setSortedOffers] = useState<InternetService[] | undefined>(undefined)
  const [disabledStyle, setDisabledStyle] = useState('')

  const { data, isLoading } = useQuery<InternetService[], Error>({
    queryKey: ['internet-services'],
    queryFn: internetServices.findAll,
    enabled: true
  })

  useEffect(() => {
    if (data !== undefined) {
      let sorted = data.sort((offerA, offerB) => {
        const a = offerA.bandwidth_down
        const b = offerB.bandwidth_down
        return Number(a) - Number(b)
      })
      if (serviceSelected !== '') {
        sorted = sorted.filter((offer) => offer.category === serviceSelected)
      }
      setSortedOffers(sorted)
    }
  }, [data, serviceSelected])

  useEffect(() => {
    if (serviceSelected === '') setDisabledStyle('disabled-look')
    else setDisabledStyle('')
  }, [serviceSelected])

  if (isLoading || sortedOffers === undefined) {
    return (
      <Container>
        <Row>
          <Col className="text-center">
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              style={{ width: '3rem', height: '3rem' }}
            />
          </Col>
        </Row>
      </Container>
    )
  }

  return (
    <Container>
      <Row className="mb-2 align-items-center">
        <Col>Featured Offer</Col>
      </Row>
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
      <Row className={`mb-2 mob-col-desk-row ${disabledStyle}`}>
        <Col>
          <span className="fs-2">2. Choose Your Speed</span>
        </Col>
        <Col>
          <div className="d-flex justify-content-end fs-6 pe-1">
            <a
              href="#"
              className={`fw-bold ${disabledStyle}`}
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
            setSpeedSelected={setSpeedSelected}
            speedSelected={speedSelected}
            speedOffers={[...sortedOffers].reverse()}
          />
        </Col>
      </Row>
      <SpeedDetailsModal
        show={modalShow}
        onHide={() => {
          setModalShow(false)
        }}
        offers={sortedOffers}
      />
    </Container>
  )
}

export default Internet
