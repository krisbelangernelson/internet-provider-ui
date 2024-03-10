import { type FC } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import HeroSection from './HeroSection'
import FeaturesSummary from './FeaturesSummary'
import Features from './Features'
import WhyChooseUs from './WhyChooseUs'
import FeaturesSummaryMore from './FeaturesSummaryMore'
import FeaturesMore from './FeaturesMore'

const Home: FC = () => (
  <>
    <HeroSection />
    <WhyChooseUs />
    <FeaturesSummary />
    <Features />
    <FeaturesSummaryMore />
    <FeaturesMore />
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
