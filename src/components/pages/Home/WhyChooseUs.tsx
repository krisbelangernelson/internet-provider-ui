import { type FC } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import WhyChooseImg from '@/assets/images/why-choose-595h.jpg'
import LazyBackgroundImg from '@/components/atoms/LazyBackgroundImg/LazyBackgroundImg'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/constants'
import FORMS from '@/constants/forms'
import Button from 'react-bootstrap/Button'

const WhyChooseUs: FC = () => {
  const navigate = useNavigate()

  // TODO: mobile image version
  return (
    <section className="section-dark">
      <LazyBackgroundImg img={WhyChooseImg as string}>
        <div className="p-5">
          <Row className="text-center">
            <Col sm={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }} xxl={{ span: 4, offset: 4 }}>
              <h1 className="primary mb-3" style={{ fontSize: '3rem' }}>
                Why choose us?
              </h1>
              <p className="text-start">
                Experience the frustration-free internet you deserve. Say goodbye to buffering, lag, and dropped
                connections. We offer blazing-fast internet speeds that seamlessly adapt to your online activities,
                whether you&apos;re streaming your favorite shows in 4K, downloading large files, or competing in
                fast-paced online games. With Ping!, you can finally unleash the full potential of your internet
                connection and connect to what matters most.
              </p>
              <Button
                type="button"
                variant="primary"
                onClick={() => {
                  navigate(ROUTES.internet)
                }}
              >
                {FORMS.buttons.chooseUs.label}
              </Button>
            </Col>
          </Row>
        </div>
      </LazyBackgroundImg>
    </section>
  )
}

export default WhyChooseUs
