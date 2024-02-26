import { type ReactElement, useState, type ChangeEvent } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Stack from 'react-bootstrap/Stack'
import Alert from 'react-bootstrap/Alert'
import { useNavigate, useLocation } from 'react-router-dom'
import { type OrderNavigateState } from '@/types/order'

// TODO: make an autocomplete with real addresses
// https://www.canadapost-postescanada.ca/ac/support/api/

const ServiceAvailability = (): ReactElement => {
  const navigate = useNavigate()
  const [isSearching, setIsSearching] = useState(false)
  const [isFound, setIsFound] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [address, setAddress] = useState('')
  const params = useLocation()
  const { serviceSelected, speed, price } = (params.state as OrderNavigateState) ?? {}

  const onClick = (): void => {
    setIsSearching(true)
    setTimeout(() => {
      setIsSearching(false)
      setIsFound(true)
      setHasSearched(true)
    }, 1000)
  }

  const onClickNext = (): void => {
    navigate('/order/customer', {
      state: {
        serviceSelected,
        speed,
        price
      }
    })
  }

  const handleAddress = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget
    setAddress(value)
  }

  return (
    <Container>
      <Row>
        <Col className="fs-1 mb-2">Service Availability</Col>
      </Row>
      <Row className="d-flex flex-column">
        <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
          <div className="mb-2 text-start">Verify that this service is available at your address</div>
          <Stack direction="horizontal" gap={3}>
            <Form.Group as={Col} controlId="firstName">
              <Form.Control type="address" placeholder="Enter address" onChange={handleAddress} value={address} />
            </Form.Group>

            {!isFound ? (
              <Button variant="primary" type="submit" onClick={onClick} disabled={isSearching || address === ''}>
                {isSearching ? (
                  <>
                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                    <span className="ms-1">Searching...</span>
                  </>
                ) : (
                  <>Search</>
                )}
              </Button>
            ) : (
              <Button type="submit" onClick={onClickNext}>
                Next
              </Button>
            )}
          </Stack>
          <Stack direction="horizontal" gap={3}>
            {hasSearched && (
              <Alert variant="success" className="mt-2">
                Your address qualifies for this service!
              </Alert>
            )}
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default ServiceAvailability