import { type FC } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import FORMS from '@/constants/forms'
import { ROUTES } from '@/constants'
import Loading from '@/components/atoms/Loading/Loading'
import usePaymentStatus from './usePaymentStatus'
import { useNavigate } from 'react-router-dom'

const PaymentStatus: FC = () => {
  const { isProcessing, paymentStatus } = usePaymentStatus()
  const navigate = useNavigate()

  if (isProcessing) {
    return (
      <Loading>
        <>Processing...</>
      </Loading>
    )
  }

  return (
    <Alert variant={paymentStatus.isError ? 'danger' : 'success'}>
      <Alert.Heading>{paymentStatus.title}</Alert.Heading>
      <p>{paymentStatus.message}</p>
      {paymentStatus.isError ? (
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
      ) : (
        <Button
          onClick={() => {
            navigate(ROUTES.login)
          }}
          variant="outline-success"
        >
          {FORMS.buttons.login.label}
        </Button>
      )}
    </Alert>
  )
}

export default PaymentStatus
