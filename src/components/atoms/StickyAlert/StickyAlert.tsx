import { type FC } from 'react'
import Alert from 'react-bootstrap/Alert'
import './StickyAlert.scss'

interface Props {
  text: string | null
  variant?: string
}

const StickyAlert: FC<Props> = ({ text, variant }) => (
  <>
    {text != null && (
      <Alert id="sticky-alert" variant={variant ?? 'danger'} className="text-center">
        {text}
      </Alert>
    )}
  </>
)

export default StickyAlert
