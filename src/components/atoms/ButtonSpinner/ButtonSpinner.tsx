import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import { type FC } from 'react'

interface Props {
  onClick: () => void
  isDisabled: boolean
  isLoading: boolean
  buttonLabel: string
  loadingLabel: string
}

const ButtonSpinner: FC<Props> = ({ onClick, isDisabled, isLoading, buttonLabel, loadingLabel }) => {
  return (
    <Button type="submit" onClick={onClick} disabled={isDisabled}>
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
