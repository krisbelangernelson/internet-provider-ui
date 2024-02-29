const VALIDATIONS = {
  firstName: {
    required: 'First name is required.',
    min: 'First name must be at least 2 characters long.',
    max: 'First name must be less than 20 characters long.'
  },
  lastName: {
    required: 'Last name is required.',
    min: 'Last name must be at least 2 characters long.',
    max: 'First name must be less than 40 characters long.'
  },
  email: {
    required: 'Email is required.',
    invalid: 'Must be a valid email.',
    exists: 'Email already exists as a customer.',
    invalidRegex: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  },
  phone: {
    required: 'Phone number required.',
    exists: 'Phone number already exists as a customer.',
    testLength: 'Must be a 10-digit number'
  },
  password: {
    required: 'Password is required.',
    min: 'Password must be at least 7 characters long.'
  },
  passwordConfirm: {
    required: 'Confirm your password.',
    oneOf: "Passwords don't match."
  },
  terms: {
    required: 'Terms must be accepted.'
  }
}

export default VALIDATIONS
