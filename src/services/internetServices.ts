import axios from 'axios'
import { type InternetService } from '@/types/InternetService'

// TODO: move to config
const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  headers: {
    'Content-type': 'application/json'
  }
})

const findAll = async (): Promise<InternetService[]> => {
  return await apiClient.get<InternetService[]>('/internet-services').then((response) => response.data)
}

const internetServices = { findAll }

export default internetServices
