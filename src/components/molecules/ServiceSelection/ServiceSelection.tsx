import { type ReactElement, type FC } from 'react'
import Stack from 'react-bootstrap/Stack'
import ButtonToggle from '@/components/atoms/ButtonToggle/ButtonToggle'
import { servicesAvailable } from '@/constants'

interface ServiceSelectionProps {
  serviceSelected: string
  setServiceSelected: React.Dispatch<React.SetStateAction<string>>
}

const ServiceSelection: FC<ServiceSelectionProps> = ({ serviceSelected, setServiceSelected }): ReactElement => {
  return (
    <Stack gap={3} className="desktop-stack-horiz">
      {servicesAvailable.map((service) => (
        <ButtonToggle
          key={service.name}
          active={serviceSelected === service.name}
          onClick={setServiceSelected}
          label={service.label}
          name={service.name}
          full
        />
      ))}
    </Stack>
  )
}

export default ServiceSelection
