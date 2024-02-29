import * as yup from 'yup'
import VALIDATIONS from '@/constants/validations'

export const customerFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .required(VALIDATIONS.firstName.required)
    .min(2, VALIDATIONS.firstName.min)
    .max(20, VALIDATIONS.firstName.max),
  lastName: yup
    .string()
    .required(VALIDATIONS.lastName.required)
    .min(2, VALIDATIONS.lastName.min)
    .max(40, VALIDATIONS.lastName.max),
  email: yup
    .string()
    .required(VALIDATIONS.email.required)
    .matches(VALIDATIONS.email.invalidRegex, VALIDATIONS.email.invalid),
  phone: yup
    .string()
    .required(VALIDATIONS.phone.required)
    .test('len', VALIDATIONS.phone.testLength, (val) => val.length === 12),
  password: yup.string().required(VALIDATIONS.password.required).min(7, VALIDATIONS.password.min),
  passwordConfirm: yup
    .string()
    .required(VALIDATIONS.passwordConfirm.required)
    .oneOf([yup.ref('password'), ''], VALIDATIONS.passwordConfirm.oneOf),
  terms: yup.bool().required().oneOf([true], VALIDATIONS.terms.required)
})

export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .required(VALIDATIONS.email.required)
    .matches(VALIDATIONS.email.invalidRegex, VALIDATIONS.email.invalid),
  password: yup.string().required(VALIDATIONS.password.required)
})
