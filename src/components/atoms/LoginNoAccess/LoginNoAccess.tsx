import { ROUTES, FORMS } from '@/constants'
import { type FC } from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

// TODO: consts
const LoginNoAccess: FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>You must login to access this area.</div>
      <Button
        onClick={() => {
          navigate(ROUTES.login)
        }}
        className="mt-2"
      >
        {FORMS.buttons.login.label}
      </Button>
    </>
  )
}

export default LoginNoAccess
