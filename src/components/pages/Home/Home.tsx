import { type ReactElement } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import Button from 'react-bootstrap/Button'
// import Stack from 'react-bootstrap/Stack'
// import Logo from '@/assets/images/hero-woman-787px.jpg'
// import Image from 'react-bootstrap/Image'

import HeroSection from './HeroSection'

const Home = (): ReactElement => {
  return (
    <>
      <HeroSection />
      <section className="section-light">
        <Container>
          <Row>
            <Col className="text-center my-4">
              <h1>Unleash the Potential</h1>
              <h2>Ultra-Fast Speeds (speed icon)</h2>
              <h5>Stream 4K content, download in seconds, and game without lag.</h5>
              <h2>Unbreakable Wi-Fi (wifi icon)</h2>
              <h5>Enjoy seamless whole-home coverage with our advanced routers.</h5>
              <h2>24/7 Reliable Support (support icon)</h2>
              <h5>Our dedicated team is always here to assist you.</h5>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section-dark">
        <Container>
          <Row>
            <Col className="text-center my-4">
              <h1>More Than Just Speed</h1>
              <h2>Perfect for Families (family icon)</h2>
              <h5>Connect everyone with unlimited data plans for uninterrupted entertainment.</h5>
              <h2>Unleash the Gamer Within (gamer icon)</h2>
              <h5>Experience low latency and smooth gameplay for ultimate victory.</h5>
              <h2>2Work From Anywhere (work icon)</h2>
              <h5>Stay productive with a reliable connection for video conferencing and remote work.</h5>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section-light">
        <Container>
          <Row>
            <Col className="text-center my-4">
              Ready to Experience the Power?<div>Get Connected Now</div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home
