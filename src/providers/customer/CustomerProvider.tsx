import { useState, type FC, type ReactNode } from 'react'
import { initialState, CustomerContext } from '@/providers/customer/CustomerContext'
import type { ServiceSelection, CustomerState, CustomerResponse } from '@/types/customer'

interface CustomerProviderProps {
  children: ReactNode
  customState?: CustomerState
}

const CustomerProvider: FC<CustomerProviderProps> = (props) => {
  const { children, customState = initialState } = props
  const [state, setState] = useState(customState)

  const stateReducer = {
    setCustomer: (customerInfo: CustomerResponse) => {
      setState((state: CustomerState) => ({ ...state, customerInfo }))
    },
    setServiceSelection: (serviceSelection: ServiceSelection) => {
      setState((state: CustomerState) => ({ ...state, serviceSelection }))
    }
  }

  return <CustomerContext.Provider value={{ ...stateReducer, state }}>{children}</CustomerContext.Provider>
}

export default CustomerProvider
