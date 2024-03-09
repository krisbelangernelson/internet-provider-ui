import { type FC } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/constants'

interface FeaturesItemProps {
  imgSrc: string
  heading: string
  subHeading: string
  textOrder: number
  imageOrder: number
}

const FeaturesItem: FC<FeaturesItemProps> = ({ imgSrc, heading, subHeading, textOrder, imageOrder }) => {
  const navigate = useNavigate()

  return (
    <Row className="align-items-center flex-column flex-lg-row">
      <Col lg={{ order: imageOrder }} className="text-center">
        <Image src={imgSrc} className="rounded shadow" fluid />
      </Col>
      <Col className="text-start p-3 p-lg-5" lg={{ order: textOrder }}>
        <h2>{heading}</h2>
        <p>{subHeading}</p>
        <Button
          variant="link"
          className="p-0 fw-bold"
          onClick={() => {
            navigate(ROUTES.internet)
          }}
        >
          Start your journey
        </Button>
      </Col>
    </Row>
  )
}

export default FeaturesItem
