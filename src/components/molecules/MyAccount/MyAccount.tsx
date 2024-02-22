import { type ReactElement } from 'react'
import Person from '@/assets/icons/person-circle.svg'
import variables from '@/variables.module.scss'

const MyAccount = (): ReactElement => (
  <>
    <Person style={{ fontSize: '2rem', color: variables.primary }} />
  </>
)

export default MyAccount
