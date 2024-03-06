import { useContext, createContext } from 'react'
import { type NotificationContextType } from '@/types/notification'

export const initialState = {
  show: false,
  data: null,
  isError: false
}

export const NotificationContext = createContext<NotificationContextType>({
  state: initialState,
  closeNotification: () => undefined,
  resetNotification: () => undefined,
  showErrorNotification: () => undefined,
  showSuccessNotification: () => undefined
})

export const useNotificationContext = (): NotificationContextType => useContext(NotificationContext)

const context = {
  initialState,
  useNotificationContext,
  NotificationContext
}

export default context
