import { type AxiosError } from 'axios'
import logger from './logger'

interface ErrorResponseData {
  message: string
}

export const handleAxiosError = (error: Error | AxiosError, caller?: string): string => {
  const axiosError = error as AxiosError

  if (axiosError.response?.data !== undefined) {
    const errorData = (axiosError.response?.data as ErrorResponseData).message
    logger.error(errorData, `Response data error[${caller}]`)
    return errorData
  } else if (axiosError.response !== undefined) {
    const errorData = axiosError.response
    logger.info(errorData, `Response error[${caller}]`)
    return axiosError.message
  } else if (axiosError.message !== undefined) {
    logger.info(error, `Message[${caller}]`)

    if (axiosError.request !== undefined) {
      const errorData = axiosError.request as object
      logger.error(errorData, `Request error[${caller}]`)
      return 'Unexpected error'
    }

    return axiosError.message
  }

  logger.info(error, `Not caught[${caller}]`)

  return 'Unexpected error'
}
