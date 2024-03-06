import { type FC } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import type { NotificationData } from '@/types/notification'

interface NotificationModalProps {
  close: () => void
  show: boolean
  data: NotificationData
  isError?: boolean
}

const NotificationModal: FC<NotificationModalProps> = ({ close, show, data, isError = false }) => {
  const { title, message } = data

  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="custom-color">{message}</Modal.Body>
      <Modal.Footer>
        <Button variant={isError ? 'danger' : 'success'} onClick={close}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default NotificationModal
