// import { useQuery, useMutation, useQueryClient } from 'react-query'
// import { apiService } from '@/services/ApiService'
// // Fetch Data Hook
// function useFetchData(endpoint: string) {
//   return useQuery({
//     queryKey: [endpoint],
//     queryFn: async () => {
//       try {
//         return await apiService.get(endpoint)
//       } catch (error: any) {
//         throw new Error(error.message)
//       }
//     },
//     initialData: [],
//   })
// }

// // Post Data Hook
// function usePostData(endpoint: string) {
//   const queryClient = useQueryClient()
//   return useMutation({
//     mutationFn: async (body: object) => {
//       try {
//         return await apiService.post(endpoint, body)
//       } catch (error: any) {
//         throw new Error(error.message)
//       }
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: [endpoint] })
//     },
//   })
// }

// // Delete Data Hook
// function useDeleteData(endpoint: string) {
//   const queryClient = useQueryClient()
//   return useMutation({
//     mutationFn: async () => {
//       try {
//         return await apiService.delete(endpoint)
//       } catch (error: any) {
//         throw new Error(error.message)
//       }
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: [endpoint] })
//     },
//   })
// }

// export { useFetchData, usePostData, useDeleteData }

// src/hooks/useApiHooks.ts

import { useQuery, useMutation, useQueryClient } from 'react-query'
import { apiService } from '@/services/ApiService'

// Fetch all records
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

// Fetch a single record by ID
function useFetchById(endpoint: string, id: string) {
  return useQuery({
    queryKey: [endpoint, id],
    queryFn: async () => {
      try {
        return await await apiService.getById(endpoint, id)
      } catch (error: any) {
        throw new Error(error.message)
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
