export interface Customer {
  firstName: string
  lastName: string
  email: string
  phone: string
}

interface CustomerFormikValues extends Customer {
  password: string
  passwordConfirm: string
  terms: boolean
}
interface CustomerFormikErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  password?: string
  passwordConfirm?: string
  terms?: string
}

interface CustomerFormikTouched {
  firstName?: boolean
  lastName?: boolean
  email?: boolean
  phone?: boolean
  password?: boolean
  passwordConfirm?: boolean
  terms?: boolean
}

export interface CustomerRegister extends Customer {
  password?: string
  id?: string
}

export interface RegisterResponse {
  id: string
}

export interface CustomerResponse extends Customer {
  accessToken: string
  id: string
}

export interface CustomerLogin {
  email: string
  password: string
}

export interface CustomerExists {
  email: string
  phone: string
}
export interface CustomerExistsResponse {
  emailExists: boolean
  phoneExists: boolean
}

export interface ServiceSelection {
  serviceType: string
  offerId: number | null
  offerName: string
}

export interface CustomerState {
  customerInfo: CustomerResponse
  serviceSelection: ServiceSelection
}

export interface CustomerContextType {
  state: CustomerState
  setCustomer: (customerInfo: CustomerResponse) => void
  setServiceSelection: (serviceSelection: ServiceSelection) => void
}
