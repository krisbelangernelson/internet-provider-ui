import { type ReactElement } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useLocation } from 'react-router-dom'

const NavMenu = (): ReactElement => {
  const location = useLocation()
  const { pathname } = location

  return (
    <Navbar>
      <Container>
        <Nav className="me-auto" variant="underline" defaultActiveKey="/">
          <Navbar.Brand href="/">Ping!</Navbar.Brand>
          <Nav.Link href="/internet" active={pathname === '/internet'}>
            Internet
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavMenu
