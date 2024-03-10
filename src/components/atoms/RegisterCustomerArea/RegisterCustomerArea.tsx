import { REGISTER } from '@/constants'
import { type FC } from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

interface RegisterCustomerAreaProps {
  className?: string
}

const RegisterCustomerArea: FC<RegisterCustomerAreaProps> = ({ ...rest }) => {
  const navigate = useNavigate()

  return (
    <div {...rest}>
      <div>{REGISTER.customerArea.title}</div>
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
