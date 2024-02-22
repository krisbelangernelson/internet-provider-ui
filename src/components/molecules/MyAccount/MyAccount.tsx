import { type ReactElement } from 'react'
import Person from '@/assets/icons/person-circle.svg'
import variables from '@/variables.module.scss'

const MyAccount = (): ReactElement => (
  <div className="hover-color pointer">
    <Person style={{ fontSize: '2rem', color: variables.primary }} />
  </div>
)

export default MyAccount
