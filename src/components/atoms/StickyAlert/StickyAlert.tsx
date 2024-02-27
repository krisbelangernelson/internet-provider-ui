import { type FC } from 'react'
import Alert from 'react-bootstrap/Alert'

interface Props {
  text: string | null
  variant?: string
}

const StickyAlert: FC<Props> = ({ text, variant }) => (
  <>
    {text != null && (
      <Alert variant={variant ?? 'danger'} style={{ top: 0, width: '100%' }} className="text-center">
        {text}
      </Alert>
    )}
  </>
)

export default StickyAlert
