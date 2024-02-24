import { lazy, Suspense, type ReactElement } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/templates/Layout/Layout'
import Spinner from 'react-bootstrap/Spinner'

const Home = lazy(async () => await import('@/components/pages/Home/Home'))
const Internet = lazy(async () => await import('@/components/pages/Internet/Internet'))
const HowItWorks = lazy(async () => await import('@/components/pages/Internet/HowItWorks'))
const Order = lazy(async () => await import('@/components/pages/Order/Order'))
const CustomerAccount = lazy(async () => await import('@/components/pages/CustomerAccount/CustomerAccount'))
const NotFound = lazy(async () => await import('./NotFound'))

const AppRoutes = (): ReactElement => (
  <BrowserRouter>
    <Layout>
      <Suspense
        fallback={
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        }
      >
        <Routes>
          <Route path="/internet/how-it-works" element={<HowItWorks />} />
          <Route path="/internet" element={<Internet />} />
          <Route path="/my-account" element={<CustomerAccount />} />
          <Route path="/order/:plan" element={<Order />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  </BrowserRouter>
)

export default AppRoutes
