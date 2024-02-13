import { type FC, type ReactNode } from 'react'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'
import { type offersAvailable } from '@/constants'

interface ModalProps {
  onHide: () => void
  show: boolean
  offers: Array<(typeof offersAvailable)[number]>
}

const rowHeader = [
  'Number of people',
  'Number of devices',
  'Audio streaming',
  'Video streaming',
  'Online gaming',
  'Creator streaming'
]

const SpeedDetailsModal: FC<ModalProps> = (props) => {
  const { offers } = props

  const groupedOffers = offers.reduce((acc: Record<string, Array<string | number>>, obj) => {
    const keys = Object.keys(obj)
    const values = Object.values(obj)
    keys.forEach((key, index) => {
      if (acc[key] !== undefined) {
        acc[key] = [...acc[key], values[index]]
      } else {
        acc[key] = [values[index]]
      }
    })
    return acc
  }, {})

  const renderRowValues = (header: string): ReactNode => {
    let value
    if (header === 'Number of people') {
      value = groupedOffers.idealNumUsers.map((numUsers) => <td key={numUsers}>{numUsers}</td>)
    } else if (header === 'Number of devices') {
      value = groupedOffers.idealNumDevices.map((numDevices) => <td key={numDevices}>{numDevices}</td>)
    } else {
      value = groupedOffers.bandwidthDown.map((bandwidth, j) => {
        if (header === 'Creator streaming') {
          if (Number(bandwidth) < 70) {
            return <td key={bandwidth}>N</td>
          }
        }
        return <td key={bandwidth}>Y</td>
      })
    }
    return value
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
              {groupedOffers.bandwidthDown.map((bandwidth, index) => (
                <th key={bandwidth} style={{ fontWeight: 'normal' }}>
                  <div className="text-center">
                    <div className="fs-2" style={{ margin: 0 }}>
                      {bandwidth}
                    </div>{' '}
                    Mbps
                    <hr style={{ margin: '3px 0' }} />
                    <span className="fs-6">{groupedOffers.bandwidthUp[index]}</span> Mbps<div>Upload</div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowHeader.map((header) => (
              <tr key={header}>
                <td>{header}</td>
                {renderRowValues(header)}
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  )
}

export default SpeedDetailsModal
