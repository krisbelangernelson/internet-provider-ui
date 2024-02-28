import { useNavigate, useLocation } from 'react-router'
import { useState, type FC } from 'react'
import customerServices from '@/services/customerServices'
import type { CustomerLogin, CustomerResponse } from '@/types/customer'
import { useMutation } from '@tanstack/react-query'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Alert from 'react-bootstrap/Alert'
import { useFormik } from 'formik'
import * as yup from 'yup'
import ButtonSpinner from '@/components/atoms/ButtonSpinner/ButtonSpinner'
import SectionLayout from '@/components/templates/SectionLayout/SectionLayout'
import { type AxiosError } from 'axios'
import { handleAxiosError } from '@/utils/handleError'

interface LocationState {
  from: string
}

const Login: FC = () => {
  const navigate = useNavigate()
  const params = useLocation()
  const from: string = (params.state as LocationState)?.from ?? '/customer-area'
  const [error, setError] = useState('')
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false)

  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Email is required.')
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Must be a valid email.'),
    password: yup.string().required('Password is required.')
  })

  const { mutate: loginCustomer, isPending } = useMutation({
    mutationFn: async (body: CustomerLogin) => await customerServices.loginCustomer(body),
    onError: (error) => {
      setError(handleAxiosError(error as AxiosError))
    },
    onSuccess: (data) => {
      // TODO: store userinfo in context?
      navigate(from, { replace: true })
    }
  })

  const formik = useFormik({
    validationSchema: schema,
    onSubmit: ({ email, password }) => {
      loginCustomer({ email, password })
    },
    initialValues: {
      email: '',
      password: ''
    },
    validateOnChange: validateAfterSubmit
  })

  const { handleSubmit, handleChange, values, touched, errors } = formik

  return (
    <SectionLayout title="Customer Login">
      <Row className="text-start">
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={{ span: 8, offset: 2 }} lg={{ span: 4, offset: 4 }}>
              <Form.Group as={Col} controlId="email" className="mt-2">
                <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={errors.email === undefined && touched.email}
                    isInvalid={errors.email !== undefined && touched.email}
                    placeholder="name@domain.com"
                  />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} controlId="password" className="mt-2">
                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                  <Form.Control
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isValid={errors.password === undefined && touched.password}
                    isInvalid={errors.password !== undefined && touched.password}
                    placeholder="Password"
                  />
                  <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              <div className="d-grid gap-2">
                <ButtonSpinner
                  onClick={() => {
                    setValidateAfterSubmit(true)
                  }}
                  isDisabled={isPending}
                  isLoading={isPending}
                  buttonLabel="Login"
                  loadingLabel="Logging in..."
                />
                {error !== '' && <Alert variant="danger">{error}</Alert>}
              </div>
            </Col>
          </Row>
        </Form>
      </Row>
    </SectionLayout>
  )
}

export default Login
