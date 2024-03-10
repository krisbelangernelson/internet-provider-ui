import { type ErrorInfo, type FC, type ReactNode } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { ErrorBoundary as ErrorBoundaryLib } from 'react-error-boundary'
import logger from '@/utils/logger'
import { FORMS, APP_ERRORS } from '@/constants'

interface Props {
  children: ReactNode
}

// Note: use the 'useErrorBoundary' hook to send errors directly here
// can be useful for async error handling
const ErrorBoundary: FC<Props> = ({ children }) => {
  const onClickReload = (): void => {
    window.location.reload()
  }

  const logError = (error: Error, info: ErrorInfo): void => {
    const { componentStack } = info
    logger.error(`error: ${JSON.stringify(error)}, stack: ${JSON.stringify(componentStack)}`, 'ErrorBoundary')
  }

  return (
    <ErrorBoundaryLib
      onError={logError}
      fallbackRender={() => (
        <Modal show={true} onHide={() => {}}>
          <Modal.Header closeButton>
            <Modal.Title>{APP_ERRORS.defaultTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{APP_ERRORS.errourBoundary}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClickReload}>
              {FORMS.buttons.reload.label}
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
