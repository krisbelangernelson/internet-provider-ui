import { type ReactElement } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { ROUTES } from '@/constants'
import FORMS from '@/constants/forms'

const MobileNavMenu = (): ReactElement => {
  const location = useLocation()
  const { pathname } = location
  const expand = false

  return (
    <Navbar expand={expand}>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
      <Navbar.Offcanvas
        id={`menu-offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="me-auto" variant="underline" defaultActiveKey="/">
            <Navbar.Brand href="/">Ping!</Navbar.Brand>
            <Nav.Link href={ROUTES.internet} active={pathname === ROUTES.internet}>
              {FORMS.buttons.internet.label}
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  )
}

export default MobileNavMenu
