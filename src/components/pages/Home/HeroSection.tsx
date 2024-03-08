import { type FC } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Logo from '@/assets/images/hero-woman-350px.jpg'
import Image from 'react-bootstrap/Image'
import './HeroSection.scss'

const HeroSection: FC = () => {
  return (
    <section className="section-dark mb-md-5">
      <Container>
        <Row>
          <Col className="text-center mb-4">
            <Row className="justify-content-center">
              <Col className="align-self-center">
                <h1 style={{ fontSize: '3rem' }}>
                  <span className="primary">Unleash</span> the Speed.
                  <br />
                  Power Up with <span className="primary">Ping</span>.
                </h1>
                <Row className="justify-content-center my-4">
                  <h5 className="text-start w-75">
                    Experience next-level internet for streaming, gaming, and everything in between.
                  </h5>
                  {/* <h5 className="text-start w-75">
                    Experience the frustration-free internet you deserve. Say goodbye to buffering, lag, and dropped
                    connections. We offer blazing-fast internet speeds that seamlessly adapt to your online activities,
                    whether you&apos;re streaming your favorite shows in 4K, downloading large files, or competing in
                    fast-paced online games. With Ping!, you can finally unleash the full potential of your internet
                    connection and connect to what matters most.
                  </h5> */}
                </Row>

                <div className="d-flex justify-content-center">
                  <Stack direction="horizontal" gap={3}>
                    <Button type="button" variant="primary">
                      Explore Plans
                    </Button>
                    <Button type="button" variant="outline-primary">
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
                        <Image src={Logo as string} roundedCircle />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <Image src={Logo as string} roundedCircle width="175px" /> */}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection
