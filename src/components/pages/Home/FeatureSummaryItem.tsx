import { type FC } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

interface FeaturesSummaryItemProps {
  imgSrc: string
  heading: string
  subHeading: string
}

const FeaturesSummaryItem: FC<FeaturesSummaryItemProps> = ({ imgSrc, heading, subHeading }) => (
  <Row className="d-flex flex-row">
    <Col xs={3} className="text-end mt-2">
      <Image src={imgSrc} width="64px" />
    </Col>

    <Col xs={9} className="text-start">
      <h4>{heading}</h4>
      <p>{subHeading}</p>
    </Col>
  </Row>
)

export default FeaturesSummaryItem
