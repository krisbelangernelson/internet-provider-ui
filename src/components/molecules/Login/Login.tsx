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
import Container from 'react-bootstrap/Container'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { type AxiosError } from 'axios'
import ButtonSpinner from '@/components/atoms/ButtonSpinner/ButtonSpinner'

interface ErrorResponseData {
  message: string
}

const Login: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from: string = location.state?.from?.pathname ?? '/customer-area' // eslint-disable-line
  const [error, setError] = useState('')
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false)

  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Email is required.')
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Must be a valid email.'),
    password: yup.string().required('Password is required.')
  })

  const { mutate: loginCustomer, isPending } = useMutation<CustomerResponse, AxiosError, CustomerLogin>({
    mutationFn: async (body: CustomerLogin) => await customerServices.loginCustomer(body),
    onError: (error) => {
      if (error.response?.data !== undefined) {
        setError((error.response?.data as ErrorResponseData).message)
      } else {
        setError(error.message)
      }
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
    <Container className="text-center">
      <Row>
        <Col className="fs-2 mb-2">Customer Login</Col>
      </Row>
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
                    handleSubmit()
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
    </Container>
  )
}

export default Login
