import { type ReactElement, useState, useMemo } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ServiceSelection from '@/components/molecules/ServiceSelection/ServiceSelection'
import SpeedSelection from '@/components/molecules/SpeedSelection/SpeedSelection'
import SpeedDetailsModal from '@/components/molecules/SpeedDetailsModal/SpeedDetailsModal'
import { useQuery } from '@tanstack/react-query'
import internetService from '@/services/internetService'
import { INTERNET_PAGE } from '@/constants'
import Loading from '@/components/atoms/Loading/Loading'

const Internet = (): ReactElement => {
  const [serviceSelected, setServiceSelected] = useState<string>('')
  const [speedSelected, setSpeedSelected] = useState<string>('')
  const [modalShow, setModalShow] = useState(false)

  // TODO: use notification component to show error
  const { data, isLoading } = useQuery({
    queryKey: ['internet-services'],
    queryFn: internetService.findAll,
    enabled: true
  })

  const sortedOffers = useMemo(() => {
    if (data !== undefined) {
      let sorted = data.sort((offerA, offerB) => {
        const a = offerA.bandwidth_down
        const b = offerB.bandwidth_down
        return Number(a) - Number(b)
      })
      if (serviceSelected !== '') {
        sorted = sorted.filter((offer) => offer.category === serviceSelected)
      }
      return sorted
    }
  }, [data, serviceSelected])

  const disabledStyle = useMemo(() => {
    if (serviceSelected === '') return 'disabled-look'
    return ''
  }, [serviceSelected])

  if (isLoading || sortedOffers === undefined) {
    return <Loading />
  }

  return (
    <Container>
      <Row className="mb-2 align-items-center">
        <Col>{INTERNET_PAGE.featuredOffer}</Col>
      </Row>
      <Row className="mb-2 align-items-center">
        <Col>
          <span className="fs-2">{INTERNET_PAGE.chooseService}</span>
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
          <span className="fs-2">{INTERNET_PAGE.chooseSpeed}</span>
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
              {INTERNET_PAGE.helpChoose}
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
