// src/services/apiService.ts
import axios from 'axios'

const BASE_URL = 'https://ifako.onrender.com/api/main/'
const API_KEY = 'your_api_key_here' // Replace with actual API key

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY,
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

// API service with all CRUD functions
export const apiService = {
  get: (endpoint: string) => handleRequest(apiClient.get(endpoint)), // Fetch all
  getById: (endpoint: string, id: string) =>
    handleRequest(apiClient.get(`${endpoint}/${id}`)), // Fetch by ID
  post: (endpoint: string, body: object) =>
    handleRequest(apiClient.post(endpoint, body)), // Create
  update: (endpoint: string, id: string, body: object) =>
    handleRequest(apiClient.post(`${endpoint}/${id}`, body)), // Update
  delete: (endpoint: string, id: string) =>
    handleRequest(apiClient.delete(`${endpoint}/${id}`)), // Delete
}
