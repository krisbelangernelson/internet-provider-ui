const VALIDATIONS = {
  email: {
    required: 'Email is required.',
    invalid: 'Must be a valid email.',
    exists: 'Email already exists as a customer.'
  },
  password: {
    required: 'Password is required.'
  },
  phone: {
    exists: 'Phone number already exists as a customer.'
  }
}

export default VALIDATIONS
