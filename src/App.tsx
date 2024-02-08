import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function App(): React.ReactElement {
  return (
    <Container fluid>
      <Row>
        <Col>App loaded</Col>
      </Row>
    </Container>
  )
}
