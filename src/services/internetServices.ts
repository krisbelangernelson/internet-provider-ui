import axios from 'axios'
import { type InternetService } from '@/types/InternetService'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-type': 'application/json'
  }
})

const findAll = async () => {
  return await apiClient.get<InternetService[]>('/internet-services').then((response) => response.data)
}

const internetServices = { findAll }

export default internetServices
