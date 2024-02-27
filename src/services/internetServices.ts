import axios from 'axios'
import { type InternetService } from '@/types/InternetService'

const {
  internetApi: { baseUrl }
} = Resources

const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-type': 'application/json'
  }
})

const findAll = async (): Promise<InternetService[]> => {
  return await apiClient.get<InternetService[]>('/internet-services').then((response) => response.data)
}

const internetServices = { findAll }

export default internetServices
