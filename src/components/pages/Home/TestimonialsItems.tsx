import { type FC } from 'react'
import Col from 'react-bootstrap/Col'

interface TestimonialsItemsProps {
  quote: string
  citation: string
}

const TestimonialsItems: FC<TestimonialsItemsProps> = ({ quote, citation }) => (
  <Col sm={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 0 }}>
    <div className="p-3 bg-light rounded">
      <blockquote>
        <p className="fw-bold">{quote}</p>
        <cite>- {citation}</cite>
      </blockquote>
    </div>
  </Col>
)

export default TestimonialsItems
