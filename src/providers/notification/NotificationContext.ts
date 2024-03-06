import { useContext, createContext } from 'react'
import { type NotificationContextType } from '@/types/notification'

export const initialState = {
  show: false,
  data: null
}

export const NotificationContext = createContext<NotificationContextType>({
  state: initialState,
  setShow: () => undefined
})

export const useNotificationContext = (): NotificationContextType => useContext(NotificationContext)

const context = {
  initialState,
  useNotificationContext,
  NotificationContext
}

export default context
