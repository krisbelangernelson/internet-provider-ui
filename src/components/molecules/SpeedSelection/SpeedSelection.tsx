import { type ReactElement, useEffect, type FC } from 'react'
import Stack from 'react-bootstrap/Stack'
import SpeedCard from '@/components/atoms/SpeedCard/SpeedCard'
import { type InternetService } from '@/types/InternetService'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  const handleSpeedSelection = (speed: string, price: number): void => {
    setSpeedSelected(speed)
    if (serviceSelected !== '' && speed !== '') {
      navigate('/order', {
        state: {
          serviceSelected,
          speed,
          price
        }
      })
    }
  }

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
          handleSpeedSelection={handleSpeedSelection}
        />
      ))}
    </Stack>
  )
}

export default SpeedSelection
