import { type InternetService } from '@/types/InternetService'
import axiosInstance from '@/utils/axios'

const {
  internetApi: { baseUrl }
} = Resources

const apiClient = axiosInstance(baseUrl)

const findAll = async (): Promise<InternetService[]> => {
  return await apiClient.get<InternetService[]>('/internet-services').then((response) => response.data)
}

const internetServices = { findAll }

export default internetServices
