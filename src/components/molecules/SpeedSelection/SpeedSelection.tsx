import { type ReactElement, useEffect, type FC } from 'react'
import Stack from 'react-bootstrap/Stack'
import SpeedCard from '@/components/atoms/SpeedCard/SpeedCard'
import { type InternetService } from '@/types/InternetService'

interface SpeedSelectionProps {
  serviceSelected: string
  setSpeedSelected: React.Dispatch<React.SetStateAction<string>>
  speedSelected: string
  speedOffers: InternetService[]
}

const SpeedSelection: FC<SpeedSelectionProps> = ({
  serviceSelected,
  setSpeedSelected,
  speedSelected,
  speedOffers
}): ReactElement => {
  // TODO: get all speeds from db

  useEffect(() => {
    setSpeedSelected('')
  }, [serviceSelected])

  if (serviceSelected === '') return <></>

  return (
    <Stack gap={4} className="col-lg-5 mx-auto">
      {speedOffers.map((offer) => (
        <SpeedCard
          key={offer.name}
          offer={offer}
          active={speedSelected === offer.name}
          setSpeedSelected={setSpeedSelected}
        />
      ))}
    </Stack>
  )
}

export default SpeedSelection
