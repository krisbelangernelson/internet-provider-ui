import { lazy, Suspense, type FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/templates/Layout/Layout'
import Spinner from 'react-bootstrap/Spinner'
import useStripeConfig from '@/hooks/useStripeConfig'

const Home = lazy(async () => await import('@/components/pages/Home/Home'))
const Internet = lazy(async () => await import('@/components/pages/Internet/Internet'))
const HowItWorks = lazy(async () => await import('@/components/pages/Internet/HowItWorks'))
const Order = lazy(async () => await import('@/components/pages/Order/Order'))
const Completed = lazy(async () => await import('@/components/pages/Order/Completed'))
const CustomerAccount = lazy(async () => await import('@/components/pages/CustomerAccount/CustomerAccount'))
const CustomerArea = lazy(async () => await import('@/components/pages/CustomerArea/CustomerArea'))
const Login = lazy(async () => await import('@/components/pages/Login/Login'))
const NotFound = lazy(async () => await import('./NotFound'))

const AppRoutes: FC = () => {
  const { stripePromise, alertMsg } = useStripeConfig()

  return (
    <BrowserRouter>
      <Layout alertMsg={alertMsg}>
        <Suspense
          fallback={
            <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          }
        >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/internet/how-it-works" element={<HowItWorks />} />
            <Route path="/internet" element={<Internet />} />
            <Route path="/my-account" element={<CustomerAccount />} />
            <Route path="/customer-area" element={<CustomerArea />} />
            <Route path="/order/payment" element={<Order page="payment" stripePromise={stripePromise} />} />
            <Route path="/order/customer" element={<Order page="customer" stripePromise={stripePromise} />} />
            <Route path="/order/completed" element={<Completed stripePromise={stripePromise} />} />
            <Route path="/order" element={<Order stripePromise={stripePromise} />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}

export default AppRoutes
