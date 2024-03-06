import { type FC } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import type { NotificationData } from '@/types/notification'

interface NotificationModalProps {
  setShow: (show: boolean, data: NotificationData | null) => void
  show: boolean
  data: NotificationData
}

const NotificationModal: FC<NotificationModalProps> = ({ setShow, show, data }) => {
  const handleClose = (): void => {
    setShow(false, null)
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{data.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{data.message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default NotificationModal
