import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useState, type FC } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { normalizeInputPhone } from '@/utils/utils'
import { type OrderNavigateState } from '@/types/order'

// TODO: verify if email exists as customer, if address exists as order
// TODO: login vs register option (account created, proceeding to payment)
const CustomerForm: FC = () => {
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false)
  const navigate = useNavigate()
  const params = useLocation()
  const { serviceSelected, speed, price, customer } = (params.state as OrderNavigateState) ?? {}

  // TODO: move text to constants
  const schema = yup.object().shape({
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
    // TODO: cehck if email exists
    // .test('checkDuplEmail', 'Email already in use.', async (value) => {
    //   // needs a debounce to wait for typing to stop before making request when the submit re-enables live validation?
    //   await sleep(2000)
    //   return false
    // }),
    phone: yup
      .string()
      .required('Please enter your phone number.')
      .test('len', 'Must be a 10-digit number', (val) => val.length === 12),
    password: yup
      .string()
      .required('Please enter your password.')
      .min(7, 'Password must be at least 7 characters long.'),
    passwordConfirm: yup
      .string()
      .required('Please confirm your password.')
      .oneOf([yup.ref('password'), ''], "Passwords don't match."),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted.')
  })

  const formik = useFormik({
    validationSchema: schema,
    onSubmit: (values) => {
      // TODO: verify email doesn't already exist
      // create custom error state for Form.Control.Feedback
      const customerData = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone.replace(/[^\d]/g, ''),
        password: values.password
      }
      navigate('/order/payment', {
        state: {
          serviceSelected,
          speed,
          price,
          customer: customerData
        }
      })
    },
    initialValues: {
      firstName: customer?.firstName ?? '',
      lastName: customer?.lastName ?? '',
      email: customer?.email ?? '',
      phone: normalizeInputPhone(customer?.phone ?? ''),
      password: '',
      passwordConfirm: '',
      terms: false
    },
    validateOnChange: validateAfterSubmit
  })

  const { handleSubmit, handleChange, values, touched, errors, setFieldValue } = formik

  return (
    <>
      <Row>
        <Col className="fs-2 mb-2">Customer Account</Col>
      </Row>
      <Row className="text-start">
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={{ span: 8, offset: 2 }} lg={{ span: 4, offset: 4 }}>
              <Form.Group as={Col} controlId="firstName">
                <FloatingLabel controlId="floatingFirstName" label="First name" className="mb-3">
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    isValid={errors.firstName === undefined && touched.firstName}
                    isInvalid={errors.firstName !== undefined && touched.firstName}
                    placeholder="John"
                  />
                  <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} controlId="lastName" className="mt-2">
                <FloatingLabel controlId="floatingLastName" label="Last name" className="mb-3">
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    isValid={errors.lastName === undefined && touched.lastName}
                    isInvalid={errors.lastName !== undefined && touched.lastName}
                    placeholder="Doe"
                  />
                  <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
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
              <Form.Group as={Col} controlId="phone" className="mt-2">
                <FloatingLabel controlId="floatingPhone" label="Phone" className="mb-3">
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={values.phone}
                    onChange={(e) => {
                      handleChange(e)
                      const { value } = e.target
                      void setFieldValue('phone', normalizeInputPhone(value))
                    }}
                    isValid={errors.phone === undefined && touched.phone}
                    isInvalid={errors.phone !== undefined && touched.phone}
                    placeholder="555-555-5555"
                  />
                  <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
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
              <Form.Group as={Col} controlId="passwordConfirm" className="mt-2">
                <FloatingLabel controlId="floatingConfirmPassword" label="Confirm Password" className="mb-3">
                  <Form.Control
                    type="password"
                    name="passwordConfirm"
                    value={values.passwordConfirm}
                    onChange={handleChange}
                    isValid={errors.passwordConfirm === undefined && touched.passwordConfirm}
                    isInvalid={errors.passwordConfirm !== undefined && touched.passwordConfirm}
                    placeholder="Confirm Password"
                  />
                  <Form.Control.Feedback type="invalid">{errors.passwordConfirm}</Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3 mt-2">
                <Form.Check
                  name="terms"
                  label="Agree to terms and conditions"
                  onChange={handleChange}
                  isInvalid={errors.terms !== undefined && touched.terms}
                  feedback={errors.terms}
                  feedbackType="invalid"
                  id="terms"
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button
                  type="submit"
                  onClick={() => {
                    setValidateAfterSubmit(true)
                    handleSubmit()
                  }}
                >
                  Next
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Row>
    </>
  )
}

export default CustomerForm
