export interface CustomerRegister {
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
}

export interface RegisterResponse {
  code: string
  message: string
}

export interface CustomerResponse {
  code: string
  accessToken: string
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
}

export interface CustomerLogin {
  email: string
  password: string
}
