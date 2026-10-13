"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle } from "lucide-react"

export function PilotForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "pilot", email: formData.get("email") }),
      })

      if (!response.ok) throw new Error("Failed to submit")
      setIsSubmitted(true)
    } catch {
      setError("Something went wrong. Please try again or email contact@crowdharbor.com.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border rounded-2xl p-8 text-center" id="join-pilot" role="status">
        <CheckCircle className="w-14 h-14 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-foreground mb-3">You&apos;re on the list</h2>
        <p className="text-muted-foreground">
          Thanks! We&apos;ve sent a confirmation to your inbox and will be in touch as soon as a pilot place opens.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8" id="join-pilot">
      <h2 className="text-2xl font-bold text-foreground">Join the pilot</h2>
      <p className="mt-2 mb-6 text-sm text-muted-foreground">
        Leave your email and we&apos;ll invite you as soon as a place opens.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            aria-label="Email address"
            className="h-11 sm:flex-1"
          />
          <Button type="submit" disabled={isSubmitting} className="h-11 group bg-primary hover:bg-primary/90">
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Join the pilot
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </div>

        <label className="flex items-start gap-2 text-sm text-muted-foreground">
          <input type="checkbox" name="agreePrivacy" required className="mt-1 h-4 w-4 rounded accent-primary" />
          <span>
            I agree that CrowdHarbor may email me about the pilot, as described in the{" "}
            <a href="/privacy-policy" target="_blank" className="text-primary hover:underline">
              Privacy Policy
            </a>
            .
          </span>
        </label>

        {error && (
          <p role="alert" className="text-sm text-destructive">
            {error}
          </p>
        )}
      </form>
    </div>
  )
}
