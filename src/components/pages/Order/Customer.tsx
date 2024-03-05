import { type FC } from 'react'
import CustomerForm from '@/components/molecules/CustomerForm/CustomerForm'
import AlreadyCustomer from '@/components/atoms/AlreadyCustomer/AlreadyCustomer'

const OrderCustomer: FC = () => {
  return (
    <div className="mt-2">
      <AlreadyCustomer />
      <CustomerForm />
      <AlreadyCustomer />
    </div>
  )
}

export default OrderCustomer
