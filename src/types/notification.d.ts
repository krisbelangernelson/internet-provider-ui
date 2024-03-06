export interface NotificationData {
  title: string
  message: string
}

export interface NotificationState {
  show: boolean
  data: NotificationData | null
}

export interface NotificationContextType {
  state: NotificationState
  setShow: (show: boolean, data: NotificationData | null) => void
}
