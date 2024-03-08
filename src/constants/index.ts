export const COMPANY = 'Ping!'

export const MAIN_HEADERS = {
  payment: 'Payment',
  createAccount: 'Create an Account',
  customerLogin: 'Customer Login',
  ordering: 'Ordering',
  serviceAvailability: 'Service Availability'
}

export const ROUTES = {
  internet: '/internet',
  contact: '/contact',
  login: '/login',
  order: '/order/availability',
  orderCompleted: '/order/completed',
  orderCustomer: '/order/customer',
  orderPayment: '/order/payment',
  customerArea: '/customer-area'
}

export const NAV_MENU = [
  {
    label: COMPANY,
    link: '/'
  },
  {
    label: 'Internet',
    link: ROUTES.internet
  },
  {
    label: 'Contact',
    link: ROUTES.contact
  }
]

export const HELP_CHOOSE_HEADERS = [
  'Number of people',
  'Number of devices',
  'Audio streaming',
  'Video streaming',
  'Online gaming',
  'Creator streaming'
]

export const SERVICES_AVAILABLE = [
  {
    label: 'Home Internet',
    name: 'home'
  },
  {
    label: 'Business Internet',
    name: 'business'
  }
]

export const INTERNET_PAGE = {
  chooseService: '1. Choose Your Service',
  chooseSpeed: '2. Choose Your Speed',
  helpChoose: 'Help me choose',
  featuredOffer: 'Featured Offer'
}

export const SERVICE_AVAILABILITY = {
  verifyLabel: 'Verify that this service is available at your address',
  qualifiedLabel: 'Your address qualifies for this service!'
}
