import { useQuery, useMutation, useQueryClient } from 'react-query'
import { apiService } from '@/services/ApiService'
// Fetch Data Hook
function useFetchData(endpoint: string) {
  return useQuery({
    queryKey: [endpoint],
    queryFn: async () => {
      try {
        return await apiService.get(endpoint)
      } catch (error: any) {
        throw new Error(error.message)
      }
    },
    initialData: [],
  })
}

// Post Data Hook
function usePostData(endpoint: string) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (body: object) => {
      try {
        return await apiService.post(endpoint, body)
      } catch (error: any) {
        throw new Error(error.message)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [endpoint] })
    },
  })
}

// Delete Data Hook
function useDeleteData(endpoint: string) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async () => {
      try {
        return await apiService.delete(endpoint)
      } catch (error: any) {
        throw new Error(error.message)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [endpoint] })
    },
  })
}

export { useFetchData, usePostData, useDeleteData }
