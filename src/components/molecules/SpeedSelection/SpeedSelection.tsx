import { type ReactElement, useMemo, useState, useEffect, type FC } from 'react'
import Stack from 'react-bootstrap/Stack'
import { offersAvailable } from '@/constants'
import SpeedCard from '@/components/atoms/SpeedCard/SpeedCard'

interface SpeedSelectionProps {
  serviceSelected: string
}

const SpeedSelection: FC<SpeedSelectionProps> = ({ serviceSelected }): ReactElement => {
  // TODO: get all speeds from db
  const [selectedSpeed, setSelectedSpeed] = useState<string>('')

  // const onClickSpeed = (selection: string): void => {
  //   setSelectedSpeed(selection)
  // }

  const sortedOffers = useMemo(() => {
    return offersAvailable
      .sort((offerA, offerB) => {
        const a = offerA.bandwidthDown
        const b = offerB.bandwidthDown
        return Number(a) - Number(b)
      })
      .reverse()
  }, [offersAvailable])

  const serviceOffers = sortedOffers.filter((offer) => offer.type.includes(serviceSelected))

  useEffect(() => {
    setSelectedSpeed('')
  }, [serviceSelected])

  return (
    <Stack gap={4} className="col-lg-5 mx-auto">
      {serviceOffers.map((offer) => (
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
