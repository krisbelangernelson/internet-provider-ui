import { type FC } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import HeroSection from './HeroSection'
import FeaturesSummary from './FeaturesSummary'
import Features from './Features'
import WhyChooseImg from '@/assets/images/why-choose-595h.jpg'

const Home: FC = () => (
  <>
    <HeroSection />
    <section>
      <div
        style={{
          background: `url(${WhyChooseImg as string})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '1920px 595px'
        }}
        className="d-flex text-center"
      >
        <div className="p-5">
          <Row>
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
            </Col>
          </Row>
        </div>
      </div>
    </section>
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
