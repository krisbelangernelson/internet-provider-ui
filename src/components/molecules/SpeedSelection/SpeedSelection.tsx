import { type ReactElement, useEffect, useState, type FC } from 'react'
import Stack from 'react-bootstrap/Stack'
import SpeedCard from '@/components/atoms/SpeedCard/SpeedCard'
import { type InternetService } from '@/types/InternetService'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/constants'
import { useCustomerContext } from '@/providers/customer/CustomerContext'

interface SpeedSelectionProps {
  serviceSelected: string
  speedOffers: InternetService[]
}

const SpeedSelection: FC<SpeedSelectionProps> = ({ serviceSelected, speedOffers }): ReactElement => {
  const navigate = useNavigate()
  const { setServiceSelection } = useCustomerContext()
  const [speedSelected, setSpeedSelected] = useState<number | null>(null)

  const handleSpeedSelection = (offerId: number, offerName: string): void => {
    setSpeedSelected(offerId)
    if (serviceSelected !== '' && offerId !== null) {
      setServiceSelection({ serviceType: serviceSelected, offerId, offerName })
      navigate(ROUTES.order)
    }
  }

  useEffect(() => {
    setSpeedSelected(null)
  }, [serviceSelected])

  if (serviceSelected === '') return <></>

  return (
    <Stack gap={4} className="col-lg-5 mx-auto">
      {speedOffers.map((offer) => (
        <SpeedCard
          key={offer.id}
          offer={offer}
          active={speedSelected === offer.id}
          handleSpeedSelection={handleSpeedSelection}
        />
      ))}
    </Stack>
  )
}

export default SpeedSelection
