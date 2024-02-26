import { lazy, Suspense, type ReactElement, useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/templates/Layout/Layout'
import Spinner from 'react-bootstrap/Spinner'
import { type Stripe, loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

const Home = lazy(async () => await import('@/components/pages/Home/Home'))
const Internet = lazy(async () => await import('@/components/pages/Internet/Internet'))
const HowItWorks = lazy(async () => await import('@/components/pages/Internet/HowItWorks'))
const Order = lazy(async () => await import('@/components/pages/Order/Order'))
const ThankYou = lazy(async () => await import('@/components/pages/Order/ThankYou'))
const CustomerAccount = lazy(async () => await import('@/components/pages/CustomerAccount/CustomerAccount'))
const NotFound = lazy(async () => await import('./NotFound'))

interface StripeConfig {
  publishableKey: string
}

const AppRoutes = (): ReactElement => {
  const [stripePromise, setStripePromise] = useState<Stripe | null>(null)

  // TODO: useQuery, service, and config for url
  useEffect(() => {
    void axios
      .get('http://localhost:3002/api/v1/stripe/config')
      .then(async (response) => {
        const { publishableKey } = (await response.data) as StripeConfig
        setStripePromise(await loadStripe(publishableKey))
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <BrowserRouter>
      <Layout>
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
            <Route path="/internet/how-it-works" element={<HowItWorks />} />
            <Route path="/internet" element={<Internet />} />
            <Route path="/my-account" element={<CustomerAccount />} />
            <Route path="/order/payment" element={<Order page="payment" stripePromise={stripePromise} />} />
            <Route path="/order/customer" element={<Order page="customer" stripePromise={stripePromise} />} />
            <Route path="/order/thankyou" element={<ThankYou stripePromise={stripePromise} />} />
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
