import { type ReactElement, useEffect, type FC } from 'react'
import Stack from 'react-bootstrap/Stack'
import SpeedCard from '@/components/atoms/SpeedCard/SpeedCard'
import { type InternetService } from '@/types/InternetService'

interface SpeedSelectionProps {
  serviceSelected: string
  setSelectedSpeed: React.Dispatch<React.SetStateAction<string>>
  selectedSpeed: string
  speedOffers: InternetService[]
}

const SpeedSelection: FC<SpeedSelectionProps> = ({
  serviceSelected,
  setSelectedSpeed,
  selectedSpeed,
  speedOffers
}): ReactElement => {
  // TODO: get all speeds from db

  useEffect(() => {
    setSelectedSpeed('')
  }, [serviceSelected])

  return (
    <Stack gap={4} className="col-lg-5 mx-auto">
      {speedOffers.map((offer) => (
        <SpeedCard
          key={offer.name}
          offer={offer}
          active={selectedSpeed === offer.name}
          setSelectedSpeed={setSelectedSpeed}
        />
      ))}
    </Stack>
  )
}

export default SpeedSelection
