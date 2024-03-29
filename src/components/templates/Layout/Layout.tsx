import { type FC, type ReactNode } from 'react'
import Header from '@/components/organisms/Header/Header'
import Footer from '@/components/organisms/Footer/Footer'
import StickyAlert from '@/components/atoms/StickyAlert/StickyAlert'

interface Props {
  children: ReactNode
  alertMsg: string | null
}

const Layout: FC<Props> = ({ children, alertMsg }) => (
  <div className="d-flex flex-column vh-100">
    <StickyAlert text={alertMsg} variant="danger" />
    <Header />
    <main id="page-content">{children}</main>
    <Footer />
  </div>
)

export default Layout
