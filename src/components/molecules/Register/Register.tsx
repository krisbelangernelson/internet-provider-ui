import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import * as formik from 'formik'
import * as yup from 'yup'
import { useState } from 'react'

const Register: React.FC = () => {
  const { Formik } = formik
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false)

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required('First name is required.')
      .min(2, 'First name must be at least 2 characters long.')
      .max(20, 'First name must be less than 20 characters long.'),
    lastName: yup.string().required('Last name is required.').min(2, 'Last name must be at least 2 characters long.'),
    email: yup
      .string()
      .required('Email is required.')
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Must be a valid email.'),
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

  const sleep = async (ms: number): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, ms))
  }

  return (
    <Formik
      validationSchema={schema}
      onSubmit={async (values, { setSubmitting }) => {
        await sleep(500)
        console.log('values', values)
        setSubmitting(false)
      }}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
        terms: false
      }}
      validateOnChange={validateAfterSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => {
        return (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col md="2" lg="4" style={{ visibility: 'hidden' }} />
              <Col md="8" lg="4">
                <Form.Group as={Col} controlId="firstName">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    isValid={errors.firstName === undefined && touched.firstName}
                    isInvalid={errors.firstName !== undefined && touched.firstName}
                  />
                  <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="lastName" className="mt-2">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    isValid={errors.lastName === undefined && touched.lastName}
                    isInvalid={errors.lastName !== undefined && touched.lastName}
                  />
                  <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="email" className="mt-2">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={errors.email === undefined && touched.email}
                    isInvalid={errors.email !== undefined && touched.email}
                  />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="password" className="mt-2">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isValid={errors.password === undefined && touched.password}
                    isInvalid={errors.password !== undefined && touched.password}
                  />
                  <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="passwordConfirm" className="mt-2">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Re-enter password"
                    name="passwordConfirm"
                    value={values.passwordConfirm}
                    onChange={handleChange}
                    isValid={errors.passwordConfirm === undefined && touched.passwordConfirm}
                    isInvalid={errors.passwordConfirm !== undefined && touched.passwordConfirm}
                  />
                  <Form.Control.Feedback type="invalid">{errors.passwordConfirm}</Form.Control.Feedback>
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
                <Button
                  type="submit"
                  onClick={() => {
                    setValidateAfterSubmit(true)
                    handleSubmit()
                  }}
                  disabled={isSubmitting}
                >
                  Register
                </Button>
              </Col>
              <Col md="2" lg="4" style={{ visibility: 'hidden' }} />
            </Row>
          </Form>
        )
      }}
    </Formik>
  )
}

export default Register
