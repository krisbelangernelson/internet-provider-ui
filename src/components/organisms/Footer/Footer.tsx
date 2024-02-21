import { type ReactElement } from 'react'
import useViewport from '@/hooks/useViewport'
import DesktopFooter from './DesktopFooter'
import MobileFooter from './MobileFooter'

const Footer = (): ReactElement => {
  const { width } = useViewport()
  const breakpoint = 768

  return width < breakpoint ? <MobileFooter /> : <DesktopFooter />
}

export default Footer
