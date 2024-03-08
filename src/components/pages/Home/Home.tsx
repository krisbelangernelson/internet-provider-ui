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
              {/* <h5>Stream 4K content, download in seconds, and game without lag.</h5> */}
              <h5>
                No more waiting for videos to load or games to buffer. Experience lightning-fast internet speeds that
                allow you to download files in seconds, stream 4K content without interruptions, and enjoy lag-free
                online gaming.
              </h5>
              <h2>Unbreakable Wi-Fi (wifi icon)</h2>
              {/* <h5>Enjoy seamless whole-home coverage with our advanced routers.</h5> */}
              <h5>
                Tired of dead zones and unreliable connections? Our advanced routers deliver powerful Wi-Fi signals that
                reach every corner of your home, ensuring a seamless connection for all your devices. Browse, stream,
                and game anywhere in your house with confidence.
              </h5>
              <h2>24/7 Reliable Support (support icon)</h2>
              {/* <h5>Our dedicated team is always here to assist you.</h5> */}
              <h5>
                Our dedicated customer support team is always here to assist you. Whether you have a technical question
                or need help setting up your internet service, our friendly and knowledgeable representatives are
                available 24/7 to ensure you have a smooth and positive experience.
              </h5>
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
              {/* <h5>Connect everyone with unlimited data plans for uninterrupted entertainment.</h5> */}
              <h5>
                Keep everyone in your family connected with our unlimited data plans. Stream movies, watch educational
                videos, play online games, and stay connected with loved ones without worrying about exceeding data
                limits.
              </h5>
              <h2>Unleash the Gamer Within (gamer icon)</h2>
              {/* <h5>Experience low latency and smooth gameplay for ultimate victory.</h5> */}
              <h5>
                Experience low latency and ultra-fast speeds for a smooth and uninterrupted gaming experience. Dominate
                the competition with lag-free gameplay and reliable connections, allowing you to react quickly and
                perform at your best.
              </h5>
              <h2>2Work From Anywhere (work icon)</h2>
              {/* <h5>Stay productive with a reliable connection for video conferencing and remote work.</h5> */}
              <h5>
                Stay productive and connected with colleagues no matter where your work takes you. Our reliable internet
                service allows you to participate in video conferencing calls, access cloud-based applications, and
                collaborate seamlessly with your team, all with a stable and secure connection.
              </h5>
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
