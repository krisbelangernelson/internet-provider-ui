import { type ReactElement } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import NavLinks from './NavLinks'

const DesktopNavMenu = (): ReactElement => {
  const location = useLocation()
  const { pathname } = location

  return (
    <Navbar>
      <NavLinks pathname={pathname} />
    </Navbar>
  )
}

export default DesktopNavMenu
