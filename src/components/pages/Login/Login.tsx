import { useNavigate, useLocation } from 'react-router'
import { useState, type FC } from 'react'
import customerService from '@/services/customerService'
import type { CustomerLogin } from '@/types/customer'
import { useMutation } from '@tanstack/react-query'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Alert from 'react-bootstrap/Alert'
import { useFormik } from 'formik'
import ButtonSpinner from '@/components/atoms/ButtonSpinner/ButtonSpinner'
import SectionLayout from '@/components/templates/SectionLayout/SectionLayout'
import { handleAxiosError } from '@/utils/handleError'
import FORMS from '@/constants/forms'
import { loginFormSchema } from '@/utils/validationSchemas'
import { ROUTES, MAIN_HEADERS } from '@/constants'

interface LocationState {
  from: string
  serviceSelected?: string
  speed?: string
}

const Login: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [error, setError] = useState('')
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false)
  const { from = ROUTES.customerArea, serviceSelected, speed } = location.state as LocationState

  const { mutate: loginCustomer, isPending } = useMutation({
    mutationFn: async (body: CustomerLogin) => await customerService.loginCustomer(body),
    onError: (error) => {
      setError(handleAxiosError(error, 'loginCustomer'))
    },
    onSuccess: (customer) => {
      // TODO: store userinfo in context?
      navigate(from, { replace: true, state: { serviceSelected, speed, customer } })
    }
  })

  const formik = useFormik({
    validationSchema: loginFormSchema,
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
    <SectionLayout title={MAIN_HEADERS.customerLogin}>
      <Row className="text-start">
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={{ span: 8, offset: 2 }} lg={{ span: 4, offset: 4 }}>
              <Form.Group as={Col} controlId="email" className="mt-2">
                <FloatingLabel controlId="floatingEmail" label={FORMS.email.label} className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={errors.email === undefined && touched.email}
                    isInvalid={errors.email !== undefined && touched.email}
                    placeholder={FORMS.email.placeholder}
                  />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} controlId="password" className="mt-2">
                <FloatingLabel controlId="floatingPassword" label={FORMS.password.label} className="mb-3">
                  <Form.Control
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isValid={errors.password === undefined && touched.password}
                    isInvalid={errors.password !== undefined && touched.password}
                    placeholder={FORMS.password.placeholder}
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
                  buttonLabel={FORMS.buttons.login.label}
                  loadingLabel={FORMS.buttons.login.loadingLabel}
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
