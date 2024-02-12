import { lazy, Suspense, type ReactElement } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/templates/Layout/Layout'

const Home = lazy(async () => await import('@/components/pages/Home/Home'))
const Internet = lazy(async () => await import('@/components/pages/Internet/Internet'))
const NotFound = lazy(async () => await import('./NotFound'))

const AppRoutes = (): ReactElement => (
  <BrowserRouter>
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/internet" element={<Internet />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  </BrowserRouter>
)

export default AppRoutes
