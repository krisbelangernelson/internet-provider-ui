export interface NotificationData {
  title: string
  message: string
}

export interface NotificationError {
  title?: string
  error: Error
  caller?: string
}

export interface NotificationState {
  show: boolean
  data: NotificationData | null
  isError?: boolean
}

export interface NotificationContextType {
  state: NotificationState
  closeNotification: () => void
  resetNotification: () => void
  showErrorNotification: (data: NotificationError) => void
  showSuccessNotification: (data: NotificationData | null) => void
}
