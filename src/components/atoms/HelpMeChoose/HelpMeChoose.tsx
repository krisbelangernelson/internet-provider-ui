import { type FC, useState } from 'react'
import SpeedDetailsModal from '@/components/molecules/SpeedDetailsModal/SpeedDetailsModal'
import { INTERNET_PAGE } from '@/constants'
import type { InternetService } from '@/types/InternetService'

interface HelpMeChooseProps {
  sortedOffers: InternetService[]
  disabledStyle?: string
}

const HelpMeChoose: FC<HelpMeChooseProps> = ({ sortedOffers, disabledStyle }) => {
  const [modalShow, setModalShow] = useState(false)

  return (
    <>
      <a
        href="#"
        className={`fw-bold ${disabledStyle !== undefined && disabledStyle}`}
        onClick={() => {
          setModalShow(true)
        }}
      >
        {INTERNET_PAGE.helpChoose}
      </a>

      <SpeedDetailsModal
        show={modalShow}
        onHide={() => {
          setModalShow(false)
        }}
        offers={sortedOffers}
      />
    </>
  )
}

export default HelpMeChoose
