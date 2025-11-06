// src/services/apiService.ts
import axios from 'axios'

const BASE_URL = 'https://ifako.onrender.com/api/'

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Generic request handler with error handling
const handleRequest = async (request: Promise<any>) => {
  try {
    const response = await request
    return response.data.data
  } catch (error: any) {
    console.error('API Request Error:', error)

    if (error.response) {
      throw new Error(
        error.response.data.message || `Error: ${error.response.status}`
      )
    } else if (error.request) {
      throw new Error('Network error: No response from server')
    } else {
      throw new Error('Request failed: ' + error.message)
    }
  }
}

export const apiService = {
  get: (endpoint: string) => handleRequest(apiClient.get(endpoint)),
  getById: (endpoint: string, id: string) =>
    handleRequest(apiClient.get(`${endpoint}/${id}`)),
  post: (endpoint: string, body: object) =>
    handleRequest(apiClient.post(endpoint, body)),
  update: (endpoint: string, id: string, body: object) =>
    handleRequest(apiClient.post(`${endpoint}/${id}`, body)),
  delete: (endpoint: string, id: string) =>
    handleRequest(apiClient.delete(`${endpoint}/${id}`)),
}
