import { type FC } from 'react'
import { Link } from 'react-router-dom'
import FORMS from '@/constants/forms'
import { ROUTES } from '@/constants'

interface Props {
  serviceSelected?: string
  speed?: string
}

const AlreadyCustomer: FC<Props> = ({ ...rest }) => {
  return (
    <>
      Already a customer?{' '}
      <Link to={ROUTES.login} state={{ from: ROUTES.orderPayment, ...rest }}>
        {FORMS.buttons.login.label}
      </Link>{' '}
      instead
    </>
  )
}

export default AlreadyCustomer
