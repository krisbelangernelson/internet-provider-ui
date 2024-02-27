import { lazy, Suspense, type FC, useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/templates/Layout/Layout'
import Spinner from 'react-bootstrap/Spinner'
import { type Stripe, loadStripe } from '@stripe/stripe-js'
import orderServices from '@/services/orderServices'
import { type StripeConfig } from '@/types/order'
import { useQuery } from '@tanstack/react-query'
import { useErrorBoundary } from 'react-error-boundary'

const Home = lazy(async () => await import('@/components/pages/Home/Home'))
const Internet = lazy(async () => await import('@/components/pages/Internet/Internet'))
const HowItWorks = lazy(async () => await import('@/components/pages/Internet/HowItWorks'))
const Order = lazy(async () => await import('@/components/pages/Order/Order'))
const Completed = lazy(async () => await import('@/components/pages/Order/Completed'))
const CustomerAccount = lazy(async () => await import('@/components/pages/CustomerAccount/CustomerAccount'))
const NotFound = lazy(async () => await import('./NotFound'))

const AppRoutes: FC = () => {
  const [stripePromise, setStripePromise] = useState<Stripe | null>(null)
  const { showBoundary } = useErrorBoundary()

  const { data, error } = useQuery<StripeConfig, Error>({
    queryKey: ['stripe-config'],
    queryFn: orderServices.stripeConfig,
    enabled: true
  })

  const stripeLoader = async (publishableKey: string): Promise<void> => {
    setStripePromise(await loadStripe(publishableKey))
  }

  useEffect(() => {
    if (data !== undefined) {
      const { publishableKey } = data
      void stripeLoader(publishableKey).catch((error) => {
        console.error(error) // eslint-disable-line no-console
      })
    }
  }, [data])

  useEffect(() => {
    if (error != null) {
      showBoundary(error)
    }
  }, [error])

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
