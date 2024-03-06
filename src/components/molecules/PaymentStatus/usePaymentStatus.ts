import { useStripe } from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ROUTES } from '@/constants'
import { getPaymentStatus } from '@/utils/utils'
import type { StripePaymentStatus, CreateOrder } from '@/types/order'
import { useMutation } from '@tanstack/react-query'
import orderService from '@/services/orderService'
import { useNotificationContext } from '@/providers/notification/NotificationContext'

interface UsePaymentStatus {
  isProcessing: boolean
  paymentStatus: StripePaymentStatus
}

const usePaymentStatus = (): UsePaymentStatus => {
  const stripe = useStripe()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [paymentStatus, setPaymentStatus] = useState<StripePaymentStatus>({
    title: null,
    message: null,
    isError: false
  })
  const [isProcessing, setIsProcessing] = useState(true)
  const { showErrorNotification } = useNotificationContext()

  const { mutateAsync: createOrder } = useMutation({
    mutationFn: async (body: CreateOrder) => await orderService.createOrder(body)
  })

  useEffect(() => {
    if (stripe == null) {
      return
    }

    const clientSecret = searchParams.get('payment_intent_client_secret')

    // Improper access to this endpoint, redirect them
    if (clientSecret == null) {
      navigate('/')
      return
    }

    void stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      const status = getPaymentStatus(paymentIntent)
      setPaymentStatus(status)
      setIsProcessing(false)

      if (!status.isError) {
        const data = {
          offerId: searchParams.get('offer_id') ?? '',
          line1: searchParams.get('line1') ?? '',
          line2: searchParams.get('line2') ?? '',
          city: searchParams.get('city') ?? '',
          state: searchParams.get('state') ?? '',
          postal_code: searchParams.get('postal_code') ?? '',
          country: searchParams.get('country') ?? '',
          customerId: searchParams.get('customer_id') ?? ''
        }

        void createOrder(data).catch((error: Error) => {
          showErrorNotification({ error, caller: 'CustomerArea' })
        })
      }

      // Clear query string, prevents a reorder
      navigate(ROUTES.orderCompleted, { replace: true })
    })
  }, [stripe])

  return {
    isProcessing,
    paymentStatus
  }
}

export default usePaymentStatus
