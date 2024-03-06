import { lazy, Suspense, type FC, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/templates/Layout/Layout'
import Spinner from 'react-bootstrap/Spinner'
import useStripeConfig from '@/hooks/useStripeConfig'
import { useMutation } from '@tanstack/react-query'
import customerService from '@/services/customerService'
import { useCustomerContext } from '@/providers/customer/CustomerContext'
import Loading from '@/components/atoms/Loading/Loading'

const Home = lazy(async () => await import('@/components/pages/Home/Home'))
const Internet = lazy(async () => await import('@/components/pages/Internet/Internet'))
const HowItWorks = lazy(async () => await import('@/components/pages/Internet/HowItWorks'))
const Order = lazy(async () => await import('@/components/pages/Order/Order'))
const ServiceAvailability = lazy(
  async () => await import('@/components/molecules/ServiceAvailability/ServiceAvailability')
)
const Customer = lazy(async () => await import('@/components/pages/Order/Customer'))
const Payment = lazy(async () => await import('@/components/pages/Order/Payment'))
const Completed = lazy(async () => await import('@/components/pages/Order/Completed'))
const CustomerArea = lazy(async () => await import('@/components/pages/CustomerArea/CustomerArea'))
const Login = lazy(async () => await import('@/components/pages/Login/Login'))
const NotFound = lazy(async () => await import('./NotFound'))

const AppRoutes: FC = () => {
  const { stripePromise, alertMsg } = useStripeConfig()
  const { setCustomer } = useCustomerContext()

  // TODO: use notification component to show error
  const { mutate: loginCustomer, isPending } = useMutation({
    mutationFn: async (body: undefined) => await customerService.loginCustomer(body),
    onError: (error) => {
      console.log('error', error)
    },
    onSuccess: (customer) => {
      setCustomer(customer)
    }
  })

  useEffect(() => {
    loginCustomer(undefined)
  }, [])

  if (isPending) {
    return <Loading />
  }

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
            <Route path="/customer-area" element={<CustomerArea />} />
            <Route path="/order/completed" element={<Completed stripePromise={stripePromise} />} />
            <Route path="/order/" element={<Order />}>
              <Route path="customer" element={<Customer />} />
              <Route path="availability" element={<ServiceAvailability />} />
              <Route path="payment" element={<Payment stripePromise={stripePromise} />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}

export default AppRoutes
