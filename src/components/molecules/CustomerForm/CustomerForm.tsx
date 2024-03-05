import { type FC } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { normalizeInputPhone } from '@/utils/utils'
import APP_ERRORS from '@/constants/appErrors'
import Alert from 'react-bootstrap/Alert'
import FORMS from '@/constants/forms'
import { MAIN_HEADERS } from '@/constants'
import useCustomerForm from './useCustomerForm'

const CustomerForm: FC = () => {
  const { data, handlers } = useCustomerForm()
  const { isError, errors, isPending, touched, values } = data
  const { handleChange, handleSubmit, setFieldValue, setValidateAfterSubmit } = handlers

  return (
    <>
      <Row>
        <Col className="fs-2 mb-2">{MAIN_HEADERS.createAccount}</Col>
      </Row>
      <Row className="text-start">
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={{ span: 8, offset: 2 }} lg={{ span: 4, offset: 4 }}>
              <Form.Group as={Col} controlId="firstName">
                <FloatingLabel controlId="floatingFirstName" label={FORMS.firstName.label} className="mb-3">
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
                <FloatingLabel controlId="floatingLastName" label={FORMS.lastName.label} className="mb-3">
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
                <FloatingLabel controlId="floatingEmail" label={FORMS.email.label} className="mb-3">
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
                <FloatingLabel controlId="floatingPhone" label={FORMS.phone.label} className="mb-3">
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
                <FloatingLabel controlId="floatingPassword" label={FORMS.password.label} className="mb-3">
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
                <FloatingLabel controlId="floatingConfirmPassword" label={FORMS.passwordConfirm.label} className="mb-3">
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
                  label={FORMS.terms.label}
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
                  }}
                  disabled={isPending}
                >
                  {FORMS.buttons.next.label}
                </Button>
                {isError && <Alert variant="danger">{APP_ERRORS.unexpectedError}</Alert>}
              </div>
            </Col>
          </Row>
        </Form>
      </Row>
    </>
  )
}

export default CustomerForm
