import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import { type FC } from 'react'

interface Props {
  onClick?: () => void
  isDisabled: boolean
  isLoading: boolean
  buttonLabel: string
  loadingLabel: string
  className?: string
}

const ButtonSpinner: FC<Props> = ({ onClick, isDisabled, isLoading, buttonLabel, loadingLabel, ...rest }) => {
  return (
    <Button type="submit" onClick={onClick} disabled={isDisabled} {...rest}>
      {isLoading ? (
        <>
          <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
          <span className="ms-1">{loadingLabel}</span>
        </>
      ) : (
        <>{buttonLabel}</>
      )}
    </Button>
  )
}

export default ButtonSpinner
