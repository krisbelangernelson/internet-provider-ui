import { type FC, type ReactNode, type ReactElement } from 'react'
import Header from '@/components/organisms/Header/Header'
import Footer from '@/components/organisms/Footer/Footer'

const Layout: FC<{ children: ReactNode }> = ({ children }): ReactElement => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
