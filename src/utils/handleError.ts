import { type AxiosError } from 'axios'
import logger from './logger'

interface ErrorResponseData {
  message: string
}

export const handleAxiosError = (error: AxiosError): string => {
  if (error.response?.data !== undefined) {
    const errorData = (error.response?.data as ErrorResponseData).message
    logger.error(errorData, 'Response data error')
    return errorData
  } else if (error.response !== undefined) {
    const errorData = error.response
    logger.error(errorData, 'Response error')
    return 'Unexpected error'
  } else if (error.message !== undefined) {
    logger.error(error, 'Message')
    if (error.request !== undefined) {
      const errorData = error.request as object
      logger.error(errorData, 'Request error')
      return 'Unexpected error'
    }
    return error.message
  }
  return 'Unexpected error'
}
