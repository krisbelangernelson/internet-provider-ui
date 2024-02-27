import { type ReactElement } from 'react'
import useViewport from '@/hooks/useViewport'
import DesktopFooter from './DesktopFooter'
import MobileFooter from './MobileFooter'
import './Footer.scss'

const Footer = (): ReactElement => {
  const { width } = useViewport()
  const breakpoint = 768

  return <footer>{width < breakpoint ? <MobileFooter /> : <DesktopFooter />}</footer>
}

export default Footer
