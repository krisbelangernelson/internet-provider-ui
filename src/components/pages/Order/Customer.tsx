import { type FC } from 'react'
import CustomerForm from '@/components/molecules/CustomerForm/CustomerForm'
import AlreadyCustomer from '@/components/atoms/AlreadyCustomer/AlreadyCustomer'

interface Props {
  serviceSelected?: string
  speed?: string
}

const Customer: FC<Props> = ({ serviceSelected, speed }) => {
  return (
    <div className="mt-2">
      <AlreadyCustomer serviceSelected={serviceSelected} speed={speed} />
      <CustomerForm />
      <AlreadyCustomer serviceSelected={serviceSelected} speed={speed} />
    </div>
  )
}

export default Customer
