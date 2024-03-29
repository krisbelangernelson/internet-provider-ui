import { type FC } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import HeroDesktop from '@/assets/images/hero-woman-350px.jpg'
import HeroMobile from '@/assets/images/hero-woman-200px.jpg'
import Image from 'react-bootstrap/Image'
import { useNavigate } from 'react-router-dom'
import './HeroSection.scss'
import { ROUTES, FORMS } from '@/constants'

const HeroSection: FC = () => {
  const navigate = useNavigate()

  return (
    <section className="section-dark pb-md-5">
      <Container>
        <Row>
          <Col className="text-center mb-4">
            <Row className="xs-col-lg-row justify-content-center">
              <Col className="align-self-center">
                <h1 style={{ fontSize: '3rem' }}>
                  <span className="primary">Unleash</span> the Speed.
                  <br />
                  Power Up with <span className="primary">Ping!</span>
                </h1>
                <Row className="justify-content-center my-4">
                  <h5 className="text-start w-75">
                    Experience next-level internet for streaming, gaming, and everything in between.
                  </h5>
                </Row>

                <div className="d-flex justify-content-center">
                  <Stack direction="horizontal" gap={3}>
                    <Button
                      type="button"
                      variant="primary"
                      onClick={() => {
                        navigate(ROUTES.internet)
                      }}
                    >
                      {FORMS.buttons.explorePlans.label}
                    </Button>
                    <Button
                      type="button"
                      variant="outline-primary"
                      onClick={() =>
                        document.getElementById('features-summary')?.scrollIntoView({ behavior: 'smooth' })
                      }
                    >
                      Learn More
                    </Button>
                  </Stack>
                </div>
              </Col>
              <Col className="align-self-center d-flex justify-content-center">
                <div id="outer-ring">
                  <div id="outer-ring-filler">
                    <div id="inner-ring">
                      <div id="inner-ring-filler">
                        <picture>
                          <source media="(min-width:768px)" srcSet={HeroDesktop as string} />
                          <Image src={HeroMobile as string} roundedCircle loading="lazy" />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection
