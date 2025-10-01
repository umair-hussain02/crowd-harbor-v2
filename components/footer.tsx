import Link from "next/link"
import { Mail, Linkedin, Twitter, Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black dark:bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold">
              CrowdHarbor
            </Link>
            <p className="mt-4 text-gray-300 max-w-md">
              Connecting innovative startups with the right equity crowdfunding platforms — from Wefunder and StartEngine to Republic, Crowdcube, FundingHope and more.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-300 hover:text-white transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="mailto:hello@crowdharbor.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/crowdharbor"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/crowdharbor" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left text-gray-400">© 2025 CrowdHarbor. All rights reserved.</p>
          <Link
            href="/admin"
            className="mt-4 md:mt-0 flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <Shield className="h-4 w-4" />
            <span>Admin Login</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
