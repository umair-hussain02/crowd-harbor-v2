"use client"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth"
import { AdminLogin } from "@/components/admin/admin-login"
import { AdminDashboard } from "@/components/admin/admin-dashboard"

export default function AdminPage() {
  const { user, loading, isAuthenticated } = useAuth()
  const router = useRouter()

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <AdminLogin />
  }

  return <AdminDashboard  />
}
