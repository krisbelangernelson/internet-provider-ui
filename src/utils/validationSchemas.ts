import * as yup from 'yup'
import VALIDATIONS from '@/constants/validations'

export const customerFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required.')
    .min(2, 'First name must be at least 2 characters long.')
    .max(20, 'First name must be less than 20 characters long.'),
  lastName: yup
    .string()
    .required('Last name is required.')
    .min(2, 'Last name must be at least 2 characters long.')
    .max(40, 'First name must be less than 40 characters long.'),
  email: yup
    .string()
    .required('Email is required.')
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Must be a valid email.'),
  phone: yup
    .string()
    .required('Please enter your phone number.')
    .test('len', 'Must be a 10-digit number', (val) => val.length === 12),
  password: yup.string().required('Please enter your password.').min(7, 'Password must be at least 7 characters long.'),
  passwordConfirm: yup
    .string()
    .required('Please confirm your password.')
    .oneOf([yup.ref('password'), ''], "Passwords don't match."),
  terms: yup.bool().required().oneOf([true], 'Terms must be accepted.')
})
export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .required(VALIDATIONS.email.required)
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, VALIDATIONS.email.invalid),
  password: yup.string().required(VALIDATIONS.password.required)
})
