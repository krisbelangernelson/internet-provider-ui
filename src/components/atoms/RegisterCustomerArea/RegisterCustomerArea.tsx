import { REGISTER } from '@/constants'
import { type FC } from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

interface Props {
  className?: string
}
// TODO: const
const RegisterCustomerArea: FC<Props> = ({ ...rest }) => {
  const navigate = useNavigate()

  return (
    <div {...rest}>
      <div>Not a customer? Check out our plans!</div>
      <Button
        onClick={() => {
          navigate(REGISTER.customerArea.link)
        }}
        className="mt-2"
      >
        {REGISTER.customerArea.label}
      </Button>
    </div>
  )
}

export default RegisterCustomerArea
