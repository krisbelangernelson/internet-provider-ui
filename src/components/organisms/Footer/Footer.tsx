import { type FC } from 'react'
import useViewport from '@/hooks/useViewport'
import DesktopFooter from './DesktopFooter'
import MobileFooter from './MobileFooter'
import './Footer.scss'
import { VIEWPORT_BREAKPOINT } from '@/constants'

const Footer: FC = () => {
  const { width } = useViewport()

  return (
    <footer className="mt-auto section-dark">
      {width < VIEWPORT_BREAKPOINT ? <MobileFooter /> : <DesktopFooter />}
    </footer>
  )
}

export default Footer
