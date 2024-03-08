import { type ReactElement } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import NavLinks from './NavLinks'

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
          <NavLinks pathname={pathname} />
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  )
}

export default MobileNavMenu
