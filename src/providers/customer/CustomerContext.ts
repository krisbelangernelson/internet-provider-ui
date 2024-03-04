import { useContext, createContext } from 'react'
import type { CustomerState, CustomerContextType } from '@/types/customer'

export const initialState: CustomerState = {
  customerInfo: { firstName: '', lastName: '', email: '', phone: '', accessToken: '', id: '' },
  serviceSelection: {
    serviceType: '',
    offerId: null,
    offerName: ''
  }
}

export const CustomerContext = createContext<CustomerContextType>({
  state: initialState,
  setCustomer: () => undefined,
  setServiceSelection: () => undefined
})

export const useCustomerContext = (): CustomerContextType => useContext(CustomerContext)

const context = {
  initialState,
  useCustomerContext,
  CustomerContext
}

export default context
