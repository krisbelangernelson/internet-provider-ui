import { type ReactElement } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { ROUTES } from '@/constants'
import FORMS from '@/constants/forms'

const DesktopNavMenu = (): ReactElement => {
  const location = useLocation()
  const { pathname } = location

  return (
    <Navbar>
      <Nav className="me-auto" variant="underline" defaultActiveKey="/">
        <Navbar.Brand href="/">Ping!</Navbar.Brand>
        <Nav.Link href={ROUTES.internet} active={pathname === ROUTES.internet}>
          {FORMS.buttons.internet.label}
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default DesktopNavMenu
