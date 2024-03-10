import { type FC } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import HeroSection from './HeroSection'
import FeaturesSummary from './FeaturesSummary'
import Features from './Features'
import WhyChooseUs from './WhyChooseUs'

const Home: FC = () => (
  <>
    <HeroSection />
    <WhyChooseUs />
    <FeaturesSummary />
    <Features />
    <section className="section-dark benefits">
      <Container>
        <Row>
          <Col className="text-center my-4">
            <h1>More Than Just Speed</h1>
            <h2>Perfect for Families</h2>
            {/* <h5>Connect everyone with unlimited data plans for uninterrupted entertainment.</h5> */}
            <h5>
              Keep everyone in your family connected with our unlimited data plans. Stream movies, watch educational
              videos, play online games, and stay connected with loved ones without worrying about exceeding data
              limits.
            </h5>
            <h2>Unleash the Gamer Within </h2>
            {/* <h5>Experience low latency and smooth gameplay for ultimate victory.</h5> */}
            <h5>
              Experience low latency and ultra-fast speeds for a smooth and uninterrupted gaming experience. Dominate
              the competition with lag-free gameplay and reliable connections, allowing you to react quickly and perform
              at your best.
            </h5>
            <h2>Work From Anywhere</h2>
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
    <section className="section-dark testimony">TEstminonals</section>
    <section className="section-light cta">
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

export default Home
