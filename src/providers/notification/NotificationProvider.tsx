import { useState, type FC } from 'react'
import { NotificationContext, initialState } from './NotificationContext'
import type { NotificationState, NotificationData, NotificationError } from '@/types/notification'
import NotificationModal from '@/components/atoms/Notification/NotificationModal'
import { handleAxiosError } from '@/utils/handleError'

interface NotificationProviderProps {
  children: React.ReactNode
  customState?: NotificationState
}

const NotificationProvider: FC<NotificationProviderProps> = (props: NotificationProviderProps) => {
  const { children, customState = initialState } = props
  const [state, setState] = useState(customState)

  const stateReducer = {
    closeNotification: (): void => {
      setState((state) => ({ ...state, show: false }))
    },
    resetNotification: () => {
      setState((state) => ({ ...state, ...initialState }))
    },
    showErrorNotification: (data: NotificationError) => {
      setState((state) => ({
        ...state,
        show: true,
        data: {
          title: data.title ?? 'Error',
          message: handleAxiosError(data.error, data.caller)
        },
        isError: true
      }))
    },
    showSuccessNotification: (data: NotificationData | null) => {
      setState((state) => ({ ...state, show: true, data }))
    }
  }

  const { show, data, isError } = state

  return (
    <NotificationContext.Provider value={{ ...stateReducer, state }}>
      {children}
      {show && data !== null && (
        <NotificationModal close={stateReducer.closeNotification} show={show} data={data} isError={isError} />
      )}
    </NotificationContext.Provider>
  )
}

export default NotificationProvider
