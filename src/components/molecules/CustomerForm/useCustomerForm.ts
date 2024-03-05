import { type FormikErrors, useFormik } from 'formik'
import { type Dispatch, type SetStateAction, useState, type FormEvent, type BaseSyntheticEvent, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { normalizeInputPhone, keepDigits } from '@/utils/utils'
import { useMutation } from '@tanstack/react-query'
import customerService from '@/services/customerService'
import VALIDATIONS from '@/constants/validations'
import { handleAxiosError } from '@/utils/handleError'
import type {
  CustomerRegister,
  CustomerExists,
  CustomerFormikValues,
  CustomerFormikErrors,
  CustomerFormikTouched
} from '@/types/customer'
import { customerFormSchema } from '@/utils/validationSchemas'
import { ROUTES } from '@/constants'
import { useCustomerContext } from '@/providers/customer/CustomerContext'

interface UseCustomerForm {
  data: {
    errors: CustomerFormikErrors
    isError: boolean
    isPending: boolean
    touched: CustomerFormikTouched
    values: CustomerFormikValues
  }
  handlers: {
    handleChange: (e: BaseSyntheticEvent) => void
    handleSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void
    setFieldValue: (
      field: string,
      value: string,
      shouldValidate?: boolean | undefined
    ) => Promise<void> | Promise<FormikErrors<CustomerFormikValues>>
    setValidateAfterSubmit: Dispatch<SetStateAction<boolean>>
  }
}

const useCustomerForm = (): UseCustomerForm => {
  const navigate = useNavigate()
  const customerData = useRef<CustomerRegister | null>(null)
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false)
  const {
    state: { customerInfo }
  } = useCustomerContext()

  // TODO: use notification hook to show error
  const { mutateAsync: customerExists } = useMutation({
    mutationFn: async (body: CustomerExists) => await customerService.customerExists(body)
  })

  const {
    mutate: registerCustomer,
    isPending,
    isError
  } = useMutation({
    mutationFn: async (body: CustomerRegister) => await customerService.registerCustomer(body),
    onError: (error) => {
      handleAxiosError(error, 'registerCustomer')
    },
    onSuccess: (data) => {
      navigate(ROUTES.orderPayment, {
        state: {
          customer: {
            ...customerData.current,
            id: data.id
          }
        }
      })
    }
  })

  const formik = useFormik({
    validationSchema: customerFormSchema,
    onSubmit: async (values, { setFieldError }) => {
      const phoneClean = keepDigits(values.phone)
      const { emailExists, phoneExists } = await customerExists({
        email: values.email,
        phone: phoneClean
      })

      if (!emailExists && !phoneExists) {
        const data = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: phoneClean,
          password: values.password
        }

        customerData.current = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: phoneClean
        }

        registerCustomer(data)
      } else if (emailExists && phoneExists) {
        setFieldError('email', VALIDATIONS.email.exists)
        setFieldError('phone', VALIDATIONS.phone.exists)
      } else if (emailExists && !phoneExists) {
        setFieldError('email', VALIDATIONS.email.exists)
      } else if (phoneExists && !emailExists) {
        setFieldError('phone', VALIDATIONS.phone.exists)
      }
    },
    initialValues: {
      firstName: customerInfo?.firstName ?? '',
      lastName: customerInfo?.lastName ?? '',
      email: customerInfo?.email ?? '',
      phone: normalizeInputPhone(customerInfo?.phone ?? ''),
      password: '',
      passwordConfirm: '',
      terms: false
    },
    validateOnChange: validateAfterSubmit
  })

  const { handleSubmit, handleChange, values, touched, errors, setFieldValue } = formik

  return {
    data: {
      isError,
      errors,
      isPending,
      touched,
      values
    },
    handlers: {
      handleChange,
      handleSubmit,
      setFieldValue,
      setValidateAfterSubmit
    }
  }
}

export default useCustomerForm
