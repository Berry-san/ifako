import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { reportSchema, ReportFormValues } from '@/validation/reportSchema'
import { usePostData } from '@/hooks/useApiHooks'
import Modal from '@/components/atoms/Modal'
import successIcon from '/assets/icons/successIcon.svg'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

// Extend the Window interface to include grecaptcha
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

const ReportProblem = () => {
  const [isVisible, setIsVisible] = useState(false)

  const SITE_KEY = '6LdGxwwrAAAAAIeCnuMQrpsc3wgclNbcM0htfLqW'

  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`
    script.async = true
    document.body.appendChild(script)
  }, [])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReportFormValues>({
    resolver: zodResolver(reportSchema),
  })

  const {
    mutate: sendReport,
    isLoading,
    isError,
    error,
  } = usePostData('report/create')

  const onSubmit = async (data: ReportFormValues) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: 'submit' })
        .then((token: string) => {
          if (!token) {
            toast.error('Captcha verification failed')
            return
          }

          // Optionally attach the token to the payload
          const payload = {
            ...data,
            token,
          }

          sendReport(payload, {
            onSuccess: () => {
              toast.success('Your report has been submitted successfully')
              setIsVisible(true)
              reset()
            },
            onError: () => {
              toast.error('Submission failed. Try again later.')
            },
          })
        })
    })
  }

  return (
    <div className="flex flex-col max-w-2xl items-center justify-center w-full px-8 py-20 mx-auto sm:px-10 lg:px-20">
      <h2 className="text-2xl font-bold text-center">
        You’re here because you’ll like to report a complaint
      </h2>

      <div className="w-full max-w-xl p-8 my-10 bg-white rounded-lg shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Phone Number Input */}
          <label className="block mb-2 font-medium" htmlFor="phoneNumber">
            Phone Number
          </label>
          <div className="flex items-center py-1 mb-4 overflow-hidden border rounded-lg">
            <span className="px-3 py-1 text-gray-400 border-r">+234</span>
            <input
              type="tel"
              {...register('phoneNumber')}
              className="flex-1 px-4 py-1 focus:outline-none"
              placeholder="Enter your phone number"
            />
          </div>
          {errors.phoneNumber && (
            <p className="mb-3 text-sm text-red-600">
              {errors.phoneNumber.message}
            </p>
          )}
          {/* Address Input */}
          <label className="block mb-2 font-medium" htmlFor="address">
            Residential Address
          </label>
          <input
            type="text"
            {...register('address')}
            className="w-full px-4 py-2 mb-1 border rounded-lg focus:outline-none"
            placeholder="Enter your address"
          />
          {errors.address && (
            <p className="mb-3 text-sm text-red-600">
              {errors.address.message}
            </p>
          )}
          {/* Category Dropdown */}
          <label className="block mb-2 font-medium" htmlFor="reportCategory">
            Report Type
          </label>
          <select
            {...register('reportCategory')}
            className="w-full px-4 py-2 mb-1 border rounded-lg focus:outline-none"
          >
            <option value="">--</option>
            <option value="Criminal">Criminal Report</option>
            <option value="Vandalism">Vandalism Report</option>
            <option value="Security">Security Report</option>
            <option value="Other">Other</option>
          </select>
          {errors.reportCategory && (
            <p className="mb-3 text-sm text-red-600">
              {errors.reportCategory.message}
            </p>
          )}
          {/* Report Body */}
          <label className="block mb-2 font-medium" htmlFor="reportBody">
            Report
          </label>
          <textarea
            rows={4}
            {...register('reportBody')}
            className="w-full px-4 py-2 mb-1 border rounded-lg focus:outline-none"
            placeholder="Describe your complaint"
          />
          {errors.reportBody && (
            <p className="mb-3 text-sm text-red-600">
              {errors.reportBody.message}
            </p>
          )}
          {/* API Error */}
          {isError && (
            <p className="mb-3 text-sm text-red-600">
              {(error as Error).message}
            </p>
          )}
          {/* <ReCAPTCHA
            sitekey="6LcupQwrAAAAAF4jVcH0gahETo06rDj8ebhGS3kn"
            onChange={onChange}
          /> */}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-2 mt-2 font-bold text-white transition-all duration-300 rounded-lg bg-green cursor-pointer"
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>

      {/* Success Modal */}
      <Modal isVisible={isVisible} onClose={() => setIsVisible(false)}>
        <div className="flex flex-col items-center justify-center px-10 py-10 text-center md:px-10">
          <img src={successIcon} className="w-20" alt="success" />
          <h3 className="mt-2 text-4xl font-bold">
            Thank You for reporting a complaint!
          </h3>
          <p className="my-5">Your report has been duly noted.</p>
          <Link
            to="/"
            className="px-4 py-2 font-bold text-white rounded-lg bg-green"
          >
            Back to Home
          </Link>
        </div>
      </Modal>
    </div>
  )
}

export default ReportProblem
