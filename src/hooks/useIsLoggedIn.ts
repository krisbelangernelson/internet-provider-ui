import { useCustomerContext } from '@/providers/customer/CustomerContext'
import { useMemo } from 'react'

const useIsLoggedIn = (): boolean => {
  const {
    state: { customerInfo }
  } = useCustomerContext()
  return useMemo(() => customerInfo.accessToken !== '', [customerInfo.accessToken])
}

export default useIsLoggedIn
