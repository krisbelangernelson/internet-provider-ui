import { type FC, useState, useMemo } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ServiceSelection from '@/components/molecules/ServiceSelection/ServiceSelection'
import SpeedSelection from '@/components/molecules/SpeedSelection/SpeedSelection'
import { useQuery } from '@tanstack/react-query'
import internetService from '@/services/internetService'
import { INTERNET_PAGE } from '@/constants'
import Loading from '@/components/atoms/Loading/Loading'
import HelpMeChoose from '@/components/atoms/HelpMeChoose/HelpMeChoose'
import Error from '@/components/atoms/Error/Error'

const Internet: FC = () => {
  const [serviceSelected, setServiceSelected] = useState<string>('')

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['internet-services'],
    queryFn: internetService.findAll,
    enabled: true,
    retry: false
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

  if ((isLoading || sortedOffers === undefined) && !isError) {
    return <Loading />
  }

  if (isError || sortedOffers === undefined) {
    return <Error title="API Error" error={error} caller="Internet" />
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
      <Row className={`mb-2 xs-col-md-row ${disabledStyle}`}>
        <Col>
          <span className="fs-2">{INTERNET_PAGE.chooseSpeed}</span>
        </Col>
        <Col>
          <div className="d-flex justify-content-end fs-6 pe-1">
            <HelpMeChoose sortedOffers={sortedOffers} disabledStyle={disabledStyle} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <SpeedSelection serviceSelected={serviceSelected} speedOffers={[...sortedOffers].reverse()} />
        </Col>
      </Row>
    </Container>
  )
}

export default Internet
