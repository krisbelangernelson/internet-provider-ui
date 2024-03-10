import { type FC, type ReactElement } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { ROUTES, FORMS } from '@/constants'
import Loading from '@/components/atoms/Loading/Loading'
import usePaymentStatus from './usePaymentStatus'
import { useNavigate } from 'react-router-dom'
import useIsLoggedIn from '@/hooks/useIsLoggedIn'

const PaymentStatus: FC = () => {
  const { isProcessing, paymentStatus } = usePaymentStatus()
  const navigate = useNavigate()
  const isLoggedIn = useIsLoggedIn()

  if (isProcessing) {
    return (
      <Loading>
        <>Processing...</>
      </Loading>
    )
  }

  const renderFailed = (): ReactElement => (
    <>
      <hr />
      <div className="d-flex justify-content-end">
        <Button
          onClick={() => {
            navigate(-1)
          }}
          variant="outline-danger"
        >
          {FORMS.buttons.payment.failed}
        </Button>
      </div>
    </>
  )

  const renderLogin = (): ReactElement => (
    <Button
      onClick={() => {
        navigate(ROUTES.login)
      }}
      variant="outline-success"
    >
      {FORMS.buttons.login.label}
    </Button>
  )

  const renderCustomerArea = (): ReactElement => (
    <Button
      onClick={() => {
        navigate(ROUTES.login)
      }}
      variant="outline-success"
    >
      {FORMS.buttons.login.label}
    </Button>
  )

  const renderButton = (): ReactElement => {
    if (paymentStatus.isError) return renderFailed()
    else if (isLoggedIn) return renderCustomerArea()
    else return renderLogin()
  }

  return (
    <Alert variant={paymentStatus.isError ? 'danger' : 'success'}>
      <Alert.Heading>{paymentStatus.title}</Alert.Heading>
      <p>{paymentStatus.message}</p>
      {renderButton()}
    </Alert>
  )
}

export default PaymentStatus
