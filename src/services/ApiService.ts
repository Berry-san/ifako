// src/services/apiService.ts
import axios from 'axios'

const BASE_URL = 'https://ifako.onrender.com/api/main/'
// const API_KEY = 'your_api_key_here'

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // 'x-api-key': API_KEY,
  },
})

// Handle API requests with error handling
const handleRequest = async (request: Promise<any>) => {
  try {
    const response = await request
    return response.data.data
  } catch (error: any) {
    console.error('API Request Error:', error)

    if (error.response) {
      // Server responded with a status code different from 2xx
      throw new Error(
        error.response.data.message || `Error: ${error.response.status}`
      )
    } else if (error.request) {
      // Request was made but no response received
      throw new Error('Network error: No response from server')
    } else {
      // Something else happened
      throw new Error('Request failed: ' + error.message)
    }
  }
}

// API service with improved error handling
export const apiService = {
  get: (endpoint: string) => handleRequest(apiClient.get(endpoint)),
  post: (endpoint: string, body: object) =>
    handleRequest(apiClient.post(endpoint, body)),
  delete: (endpoint: string) => handleRequest(apiClient.delete(endpoint)),
}
