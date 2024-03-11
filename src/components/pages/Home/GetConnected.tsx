import { type FC } from 'react'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import { useNavigate } from 'react-router-dom'
import { ROUTES, FORMS, LANDING } from '@/constants'

const GetConnected: FC = () => {
  const navigate = useNavigate()

  return (
    <section className="section-light cta">
      <Stack gap={3} className="text-center my-4">
        <h2>{LANDING.getConnected.title}</h2>
        <div>
          <Button
            type="button"
            variant="primary"
            onClick={() => {
              navigate(ROUTES.internet)
            }}
          >
            {FORMS.buttons.getConnected.label}
          </Button>
        </div>
      </Stack>
    </section>
  )
}

export default GetConnected
