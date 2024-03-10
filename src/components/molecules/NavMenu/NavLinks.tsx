import { type FC } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NAV_MENU } from '@/constants'

interface NavLinksProps {
  pathname: string
}

const NavLinks: FC<NavLinksProps> = ({ pathname }) => (
  <Nav className="me-auto" variant="underline" defaultActiveKey="/">
    <Navbar.Brand href={NAV_MENU[0].link}>{NAV_MENU[0].label}</Navbar.Brand>
    {NAV_MENU.map((nav, index) => {
      if (index !== 0) {
        return (
          <Nav.Link key={nav.label} href={nav.link} active={pathname === nav.link}>
            {nav.label}
          </Nav.Link>
        )
      }
      return null
    })}
  </Nav>
)

export default NavLinks
