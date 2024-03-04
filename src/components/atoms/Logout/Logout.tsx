import customerService from '@/services/customerService'
import { type FC } from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

// TODO: consts
const Logout: FC = () => {
  const navigate = useNavigate()
  return (
    <Button
      onClick={() => {
        void customerService.logout().then(() => {
          navigate(0)
        })
      }}
      className="mt-2"
    >
      Logout
    </Button>
  )
}

export default Logout
