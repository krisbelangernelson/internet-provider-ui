import { type FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  serviceSelected?: string
  speed?: string
}

const AlreadyCustomer: FC<Props> = ({ ...rest }) => {
  return (
    <>
      Already a customer?{' '}
      <Link to="/login" state={{ from: '/order/payment', ...rest }}>
        Sign in
      </Link>{' '}
      instead
    </>
  )
}

export default AlreadyCustomer
