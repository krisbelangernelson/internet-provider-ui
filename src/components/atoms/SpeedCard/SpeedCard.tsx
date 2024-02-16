import { type ReactElement, type FC } from 'react'
import Card from 'react-bootstrap/Card'
import { type InternetService } from '@/types/InternetService'
import classNames from 'classnames'

interface SpeedCardProps {
  offer: InternetService
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
        {offer.label}
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <span className="fs-2">{offer.bandwidth_down.toLocaleString('en-US')} </span> Mbps
        </Card.Title>
        <Card.Text as="h5">{offer.bandwidth_up.toLocaleString('en-US')} Mbps Upload</Card.Text>
        <Card.Text>
          <span className="fs-2">${offer.price}</span>/month
        </Card.Text>
      </Card.Body>
      <Card.Footer>{offer.description}</Card.Footer>
    </Card>
  )
}

export default SpeedCard
