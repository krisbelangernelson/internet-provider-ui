import { type FC, type ReactNode } from 'react'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'
import { HELP_CHOOSE_HEADERS } from '@/constants'
import { type InternetService } from '@/types/InternetService'

interface ModalProps {
  onHide: () => void
  show: boolean
  offers: InternetService[]
}

type Values = Array<string | number>

const SpeedDetailsModal: FC<ModalProps> = (props) => {
  const { offers } = props

  // Transpose array
  const groupedOffers = offers.reduce((acc: Record<string, Values>, offer) => {
    const keys = Object.keys(offer)
    const values = Object.values(offer) as Values
    keys.forEach((key, index) => {
      if (acc[key] !== undefined) {
        acc[key] = [...acc[key], values[index]]
      } else {
        acc[key] = [values[index]]
      }
    })
    return acc
  }, {})

  const renderRowContent = (header: string): ReactNode => {
    let content
    if (header === HELP_CHOOSE_HEADERS[0]) {
      content = groupedOffers.ideal_num_users.map((numUsers) => (
        <td key={numUsers} className="text-center">
          {numUsers}
        </td>
      ))
    } else if (header === HELP_CHOOSE_HEADERS[1]) {
      content = groupedOffers.ideal_num_devices.map((numDevices) => (
        <td key={numDevices} className="text-center">
          {numDevices}
        </td>
      ))
    } else {
      content = groupedOffers.bandwidth_down.map((bandwidth, j) => {
        if (header === HELP_CHOOSE_HEADERS[5]) {
          if (Number(bandwidth) <= 70) {
            return (
              <td key={bandwidth} className="text-center">
                N
              </td>
            )
          }
        }
        return (
          <td key={bandwidth} className="text-center">
            Y
          </td>
        )
      })
    }
    return content
  }

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Choose Your Speed</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          The speed you want depends on how many people are going to be using the connection, in addition to how many
          devices each person will be using. Here is a table to make sense of what your needs are and the speed you
          should probably choose. All packages have unlimited download and upload limits.
        </p>
        <Table striped bordered>
          <thead>
            <tr>
              <th></th>
              {groupedOffers.bandwidth_down.map((bandwidth, index) => (
                <th key={bandwidth} style={{ fontWeight: 'normal' }}>
                  <div className="text-center">
                    <div className="fs-1" style={{ margin: 0 }}>
                      {bandwidth}
                    </div>
                    <div className="fs-4">Mbps</div>
                    <hr style={{ margin: '3px 0' }} />
                    <div>
                      <span className="fs-6">{groupedOffers.bandwidth_up[index]}</span> Mbps
                    </div>
                    <div>Upload</div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {HELP_CHOOSE_HEADERS.map((header) => (
              <tr key={header}>
                <td>{header}</td>
                {renderRowContent(header)}
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  )
}

export default SpeedDetailsModal
