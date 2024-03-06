import { type ReactElement } from 'react'
import Person from '@/assets/icons/person-circle.svg'
import variables from '@/_variables.module.scss'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants'

const MyAccount = (): ReactElement => (
  <div className="hover-color">
    <Link to={ROUTES.customerArea}>
      <Person style={{ fontSize: '2rem', color: variables.primary }} />
    </Link>
  </div>
)

export default MyAccount
