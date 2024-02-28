import { type ReactNode, type FC } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

interface Props {
  children: ReactNode
  title: string | ReactNode
}

const SectionLayout: FC<Props> = ({ children, title }) => {
  return (
    <Container className="text-center">
      <Row>
        <Col className="fs-2">{title}</Col>
      </Row>
      {children}
    </Container>
  )
}

export default SectionLayout
