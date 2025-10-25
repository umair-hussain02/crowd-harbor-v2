import React from "react"

interface ContactEmailProps {
  name: string
  email: string
  message: string
}

export const GeneralQueryConfirmationEmail = ({ name, email, message }: ContactEmailProps) => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 flex justify-center">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
        {/* Header with logo */}
        <div className="flex items-center mb-6">
          <img
            src="https://crowdharbor.com/logo.png"
            alt="CrowdHarbor Logo"
            className="h-8 mr-2"
          />
          <h1 className="text-2xl font-bold text-gray-900">CrowdHarbor</h1>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          Hello, {name}
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Thank you for reaching out to <span className="font-medium">CrowdHarbor</span>! 
          We’ve received your message and our team will get back to you as soon as possible.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Below is a summary of your inquiry for your reference:
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-800 mb-1">
            <span className="font-semibold">Name:</span> {name}
          </p>
          <p className="text-sm text-gray-800 mb-1">
            <span className="font-semibold">Email:</span> {email}
          </p>
          <p className="text-sm text-gray-800">
            <span className="font-semibold">Message:</span> {message}
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our support team typically responds within 24–48 hours. If your inquiry is urgent, 
          feel free to reply directly to this email for quicker assistance.
        </p>

        <div className="mb-6">
          <a
            href="https://crowdharbor.com"
            className="bg-indigo-700 hover:bg-indigo-800 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-all duration-300"
          >
            Visit CrowdHarbor Home
          </a>
        </div>

        <p className="text-sm text-gray-500">— The CrowdHarbor Team</p>

        <div className="border-t border-gray-200 mt-8 pt-4 text-center text-xs text-gray-400">
          <p>You’re receiving this email because you contacted CrowdHarbor.com</p>
          <p>© {new Date().getFullYear()} CrowdHarbor • All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}
