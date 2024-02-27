import { useState, useEffect } from 'react'
import { type Stripe, loadStripe } from '@stripe/stripe-js'
import orderServices from '@/services/orderServices'
import { type StripeConfig } from '@/types/order'
import { useQuery } from '@tanstack/react-query'

interface UseStripeConfig {
  stripePromise: Stripe | null
  alertMsg: string | null
}

const useStripeConfig = (): UseStripeConfig => {
  const [stripePromise, setStripePromise] = useState<Stripe | null>(null)
  const [alertMsg, setAlertMsg] = useState<string | null>(null)

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
      setAlertMsg('ATTENTION: Payments are currently not functioning.')
    }
  }, [error])

  return { stripePromise, alertMsg }
}

export default useStripeConfig
