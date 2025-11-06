import { useQuery, useMutation, useQueryClient } from 'react-query'
import { apiService } from '@/services/ApiService'

// Fetch all records
function useFetchData(endpoint: string) {
  return useQuery({
    queryKey: [endpoint],
    queryFn: async () => {
      try {
        return await apiService.get(endpoint)
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message)
        }
        throw new Error('An unknown error occurred')
      }
    },
    initialData: [],
  })
}

// Fetch a single record by ID
function useFetchById(endpoint: string, id: string) {
  return useQuery({
    queryKey: [endpoint, id],
    queryFn: async () => {
      try {
        return await await apiService.getById(endpoint, id)
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message)
        }
        throw new Error('An unknown error occurred')
      }
    },
  })
}

// Create a new record
function usePostData(endpoint: string) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (body: object) => await apiService.post(endpoint, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [endpoint] })
    },
  })
}

// Update a record by ID
function useUpdateData(endpoint: string, id: string) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (body: object) =>
      await apiService.update(endpoint, id, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [endpoint, id] })
    },
  })
}

// Delete a record by ID
function useDeleteData(endpoint: string, id: string) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async () => await apiService.delete(endpoint, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [endpoint] })
    },
  })
}

export { useFetchData, useFetchById, usePostData, useUpdateData, useDeleteData }
