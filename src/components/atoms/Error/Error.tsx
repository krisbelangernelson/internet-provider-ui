import { type FC } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { handleAxiosError } from '@/utils/handleError'

interface ErrorProps {
  title: string
  error: Error | null
  caller?: string
}

const Error: FC<ErrorProps> = ({ title, error, caller }) => {
  return (
    <Container className="text-center">
      <Row className="mb-2 align-items-center">
        <Col>
          <span className="fs-2">{title}</span>
        </Col>
      </Row>
      <Row className="mb-2 align-items-center">
        <Col>{handleAxiosError(error as unknown as Error, caller)}</Col>
      </Row>
    </Container>
  )
}

export default Error
