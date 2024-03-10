import { type FC } from 'react'
import { Link } from 'react-router-dom'
import { FORMS, ROUTES } from '@/constants'

const AlreadyCustomer: FC = () => {
  return (
    <>
      Already a customer?{' '}
      <Link to={ROUTES.login} state={{ from: ROUTES.orderPayment }}>
        {FORMS.buttons.login.label}
      </Link>{' '}
      instead
    </>
  )
}

export default AlreadyCustomer
