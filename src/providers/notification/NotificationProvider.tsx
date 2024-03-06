import { useState, type FC } from 'react'
import { NotificationContext, initialState } from './NotificationContext'
import type { NotificationState, NotificationData } from '@/types/notification'
import NotificationModal from '@/components/atoms/Notification/NotificationModal'

interface NotificationProviderProps {
  children: React.ReactNode
  customState?: NotificationState
}

const NotificationProvider: FC<NotificationProviderProps> = (props: NotificationProviderProps) => {
  const { children, customState = initialState } = props
  const [state, setState] = useState(customState)

  const stateReducer = {
    setShow: (show: boolean, data: NotificationData | null) => {
      setState((state) => ({ ...state, show, data }))
    }
  }

  const { show, data } = state

  return (
    <NotificationContext.Provider value={{ ...stateReducer, state }}>
      {children}
      {show && data !== null && <NotificationModal setShow={stateReducer.setShow} show={show} data={data} />}
    </NotificationContext.Provider>
  )
}

export default NotificationProvider
