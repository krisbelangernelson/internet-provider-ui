import { type FC } from 'react'
import MobileNavMenu from './MobileNavMenu'
import DesktopNavMenu from './DesktopNavMenu'
import useViewport from '@/hooks/useViewport'
import './NavMenu.scss'
import { VIEWPORT_BREAKPOINT } from '@/constants'

const NavMenu: FC = () => {
  const { width } = useViewport()

  return <footer>{width < VIEWPORT_BREAKPOINT ? <MobileNavMenu /> : <DesktopNavMenu />}</footer>
}

export default NavMenu
