import { type ReactElement, type FC } from 'react'
import Card from 'react-bootstrap/Card'
import { type offersAvailable } from '@/constants'
import classNames from 'classnames'

interface SpeedCardProps {
  offer: (typeof offersAvailable)[number]
  active: boolean
  setSelectedSpeed: React.Dispatch<React.SetStateAction<string>>
}

const SpeedCard: FC<SpeedCardProps> = ({ offer, active, setSelectedSpeed }): ReactElement => {
  return (
    <Card
      className={classNames('clickable-card text-center', active && 'clickable-card-selected')}
      onClick={() => {
        setSelectedSpeed(offer.name)
      }}
    >
      <Card.Header as="h3" className="fw-bold">
        {offer.title}
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <span className="fs-2">{offer.bandwidthDown.toLocaleString('en-US')} </span> Mbps
        </Card.Title>
        <Card.Text as="h5">{offer.bandwidthUp.toLocaleString('en-US')} Mbps Upload</Card.Text>
        <Card.Text>
          <span className="fs-2">${offer.price}</span>/month
        </Card.Text>
      </Card.Body>
      <Card.Footer>{offer.description}</Card.Footer>
    </Card>
  )
}

export default SpeedCard
