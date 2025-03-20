import { useState } from 'react'
import { Link } from 'react-router-dom'
import successIcon from '/assets/icons/successIcon.svg'
import Modal from '@/components/atoms/Modal'

const ReportProblem = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="flex flex-col max-w-2xl items-center justify-center w-full px-8 py-20 mx-auto sm:px-10 lg:px-20 ">
      <h2 className="text-2xl font-bold">
        You’re here because you’ll like to report a complaint
      </h2>
      <div className="w-full max-w-xl p-8 my-10 bg-white rounded-lg shadow-lg">
        <form>
          {/* Phone Number Input */}
          <label className="block mb-2 font-medium" htmlFor="phone">
            Phone Number
          </label>
          <div className="flex items-center py-1 overflow-hidden border rounded-lg">
            {/* Prefix */}
            <span className="px-3 py-1 text-gray-400 border-r">+234</span>
            {/* Input Field */}
            <input
              type="tel"
              className="flex-1 px-4 py-1 focus:outline-none "
              placeholder="Enter your phone number"
            />
          </div>

          {/* Email Address Input */}
          <label className="block mb-2 font-medium" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none"
            placeholder="Enter your email"
          />

          {/* Residential Address Input */}
          <label className="block mb-2 font-medium" htmlFor="address">
            What’s your Residential Address?
          </label>
          <input
            id="address"
            type="text"
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none"
            placeholder="Enter your residential address"
          />

          {/* CDA Input */}
          <label className="block mb-2 font-medium" htmlFor="cda">
            Your CDA
          </label>
          <input
            id="cda"
            type="text"
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none"
            placeholder="Enter your CDA"
          />

          {/* Report Option Dropdown */}
          <label className="block mb-2 font-medium" htmlFor="report-type">
            Choose Option of what you’ll like to report
          </label>
          <select
            id="report-type"
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none"
          >
            <option value="">--</option>
            <option value="issue1">Criminal Report</option>
            <option value="issue2">Vandalism Report</option>
            <option value="issue3">Security Report</option>
            <option value="issue3">Other</option>
          </select>

          {/* Report Textarea */}
          <label className="block mb-2 font-medium" htmlFor="report">
            Write Report
          </label>
          <textarea
            id="report"
            rows={4}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none"
            placeholder="Enter your report"
          />

          {/* Submit Button */}
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault()
              setIsVisible(true)
            }}
            className="w-full px-4 py-2 font-bold text-white transition-all duration-300 rounded-lg bg-green "
          >
            Submit
          </button>
        </form>
      </div>
      <Modal isVisible={isVisible} onClose={() => setIsVisible(false)}>
        <div className="flex flex-col items-center justify-center px-10 py-10 text-center md:px-10">
          <img src={successIcon} className="w-20" alt="success" />
          <h3 className="mt-2 text-4xl font-bold">
            Thank You for reporting a complaint!
          </h3>
          <p className="my-5">Your Report has been duly noted.</p>
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
