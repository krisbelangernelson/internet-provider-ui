import { type FC } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import SpeedImg from '@/assets/icons/page-speed.png'
import WifiImg from '@/assets/icons/wifi.png'
import SupportImg from '@/assets/icons/support.png'
import FeaturesSummaryItem from './FeatureSummaryItem'

const FeaturesSummary: FC = () => (
  <section className="section-light features-summary">
    <Container>
      <Row className="">
        <Col className="text-center my-4">
          <h1 className="primary">Unleash the Potential</h1>
          <div className="item-container">
            <FeaturesSummaryItem
              imgSrc={SpeedImg as string}
              heading="Ultra-Fast Speeds"
              subHeading="Stream 4K content, download in seconds, and game without lag."
            />
            <FeaturesSummaryItem
              imgSrc={WifiImg as string}
              heading="Unbreakable Wi-Fi"
              subHeading="Enjoy seamless whole-home coverage with our advanced routers."
            />
            <FeaturesSummaryItem
              imgSrc={SupportImg as string}
              heading="24/7 Reliable Support"
              subHeading="Our dedicated team is always here to assist you."
            />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
)

export default FeaturesSummary
