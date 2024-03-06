import { type FC } from 'react'
import MobileNavMenu from './MobileNavMenu'
import DesktopNavMenu from './DesktopNavMenu'
import useViewport from '@/hooks/useViewport'

const NavMenu: FC = () => {
  const { width } = useViewport()
  const breakpoint = 768

  return <footer>{width < breakpoint ? <MobileNavMenu /> : <DesktopNavMenu />}</footer>
}

export default NavMenu
