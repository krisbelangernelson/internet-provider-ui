import { type FC, useState, type ChangeEvent } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Alert from 'react-bootstrap/Alert'
import { useNavigate } from 'react-router-dom'
import ButtonSpinner from '@/components/atoms/ButtonSpinner/ButtonSpinner'
import { ROUTES, MAIN_HEADERS, SERVICE_AVAILABILITY, FORMS } from '@/constants'

// TODO: make an autocomplete with real addresses
// https://apidocs.geoapify.com/playground
// https://apidocs.geoapify.com/docs/geocoding/address-autocomplete/#autocomplete

// TODO: verify if address exists as order
const ServiceAvailability: FC = () => {
  const navigate = useNavigate()
  const [isSearching, setIsSearching] = useState(false)
  const [isFound, setIsFound] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [address, setAddress] = useState('')

  const onClickSearch = (): void => {
    setIsSearching(true)
    setTimeout(() => {
      setIsSearching(false)
      setIsFound(true)
      setHasSearched(true)
    }, 1000)
  }

  const onClickNext = (): void => {
    navigate(ROUTES.orderCustomer)
  }

  const handleAddress = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget
    setAddress(value)
  }

  return (
    <Container>
      <Row>
        <Col className="fs-1 mb-2">{MAIN_HEADERS.serviceAvailability}</Col>
      </Row>
      <Row className="d-flex flex-column">
        <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
          <div className="mb-2 text-start">{SERVICE_AVAILABILITY.verifyLabel}</div>
          <Stack direction="horizontal" gap={3}>
            <Form.Group as={Col} controlId="firstName">
              <Form.Control type="address" placeholder="Enter address" onChange={handleAddress} value={address} />
            </Form.Group>

            {!isFound ? (
              <ButtonSpinner
                onClick={onClickSearch}
                isDisabled={isSearching || address === ''}
                isLoading={isSearching}
                buttonLabel={FORMS.buttons.search.label}
                loadingLabel={FORMS.buttons.search.loadingLabel}
              />
            ) : (
              <Button type="submit" onClick={onClickNext}>
                {FORMS.buttons.next.label}
              </Button>
            )}
          </Stack>
          <Stack direction="horizontal" gap={3}>
            {hasSearched && (
              <Alert variant="success" className="mt-2">
                {SERVICE_AVAILABILITY.qualifiedLabel}
              </Alert>
            )}
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default ServiceAvailability
