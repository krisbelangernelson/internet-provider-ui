import { type FC } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import FamilyImg from '@/assets/icons/family.png'
import GamingImg from '@/assets/icons/controller.png'
import WorkImg from '@/assets/icons/working.png'
import FeaturesSummaryItem from './FeatureSummaryItem'

const FeaturesSummaryMore: FC = () => (
  <section className="section-dark" id="features-summary">
    <Container>
      <Row className="">
        <Col className="text-center my-4">
          <h1 className="primary">More Than Just Speed</h1>
          <div className="d-flex flex-column flex-lg-row mt-4">
            <FeaturesSummaryItem
              imgSrc={FamilyImg as string}
              heading="Perfect for Families"
              subHeading="Connect everyone with unlimited data plans for uninterrupted entertainment."
            />
            <div className="me-lg-3 mb-3" />
            <FeaturesSummaryItem
              imgSrc={GamingImg as string}
              heading="Unleash the Gamer Within"
              subHeading="Experience low latency and smooth gameplay for ultimate victory."
            />
            <div className="me-lg-3 mb-3" />
            <FeaturesSummaryItem
              imgSrc={WorkImg as string}
              heading="Work From Anywhere"
              subHeading="Stay productive with a reliable connection for video conferencing and remote work."
            />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
)

export default FeaturesSummaryMore
