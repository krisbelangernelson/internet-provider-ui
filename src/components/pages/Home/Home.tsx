import { type ReactElement } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useNotificationContext } from '@/providers/notification/NotificationContext'
import Button from 'react-bootstrap/Button'

const Home = (): ReactElement => {
  const { setShow } = useNotificationContext()
  return (
    <Container>
      <Row>
        <Col className="text-center">Home Page</Col>
        <Button
          onClick={() => {
            setShow(true, { title: 'title', message: 'meesage' })
          }}
        >
          Modal
        </Button>
      </Row>
    </Container>
  )
}

export default Home
