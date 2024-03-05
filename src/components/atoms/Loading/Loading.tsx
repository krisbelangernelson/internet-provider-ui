import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import { type ReactElement, type FC } from 'react'

const Loading: FC<{ children?: ReactElement }> = ({ children }) => {
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
          {children !== undefined && <div className="ms-1">{children}</div>}
        </Col>
      </Row>
    </Container>
  )
}

export default Loading
