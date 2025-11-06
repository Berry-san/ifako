import { z } from 'zod'

export const reportSchema = z.object({
  phoneNumber: z
    .string()
    .min(7, 'Phone number must be at least 7 digits')
    .max(15, 'Phone number too long'),
  address: z.string().min(5, 'Address is required'),
  reportCategory: z.string().min(1, 'Please select a report type'),
  reportBody: z.string().min(10, 'Report must be at least 10 characters'),
})

export type ReportFormValues = z.infer<typeof reportSchema>
