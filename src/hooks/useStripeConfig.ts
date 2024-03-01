import { useState, useEffect, useMemo } from 'react'
import { type Stripe, loadStripe } from '@stripe/stripe-js'
import orderService from '@/services/orderService'
import { type StripeConfig } from '@/types/order'
import { useQuery } from '@tanstack/react-query'
import { handleAxiosError } from '@/utils/handleError'
import APP_ERRORS from '@/constants/appErrors'

interface UseStripeConfig {
  stripePromise: Stripe | null
  alertMsg: string | null
}

const useStripeConfig = (): UseStripeConfig => {
  const [stripePromise, setStripePromise] = useState<Stripe | null>(null)

  const { data, error, isError } = useQuery<StripeConfig, Error>({
    queryKey: ['stripe-config'],
    queryFn: orderService.stripeConfig,
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

  const alertMsg = useMemo(() => {
    if (isError) {
      handleAxiosError(error)
      return APP_ERRORS.paymentOfflineAlert
    }
    return null
  }, [isError, error])

  return { stripePromise, alertMsg }
}

export default useStripeConfig
