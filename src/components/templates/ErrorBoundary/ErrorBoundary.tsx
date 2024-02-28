import { type ErrorInfo, type FC, type ReactNode } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { ErrorBoundary as ErrorBoundaryLib } from 'react-error-boundary'

interface Props {
  children: ReactNode
}

// use the useErrorBoundary hook to send errors here
// can be useful for async error handling
const ErrorBoundary: FC<Props> = ({ children }) => {
  const onClickReload = (): void => {
    window.location.reload()
  }

  const logError = (error: Error, info: ErrorInfo): void => {
    const { componentStack } = info
    console.error(error, componentStack) // eslint-disable-line no-console
  }

  return (
    <ErrorBoundaryLib
      onError={logError}
      fallbackRender={() => (
        <Modal show={true} onHide={() => {}}>
          <Modal.Header closeButton>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>An unexpected error occurred. Reload to try again, or contact support.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClickReload}>
              Reload
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    >
      {children}
    </ErrorBoundaryLib>
  )
}

export default ErrorBoundary
