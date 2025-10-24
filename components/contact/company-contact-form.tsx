"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Send, CheckCircle } from "lucide-react"

export function CompanyContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      companyWebsite: formData.get("companyWebsite"),
      companyName: formData.get("companyName"),
      ownerName: formData.get("ownerName"),
      founderEmail: formData.get("founderEmail"),
      targetRaise: formData.get("targetRaise"),
      companyDescription: formData.get("companyDescription"),
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-card border border-border rounded-2xl p-8 text-center"
        id="contact-form"
      >
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-4">Thank You!</h3>
        <p className="text-muted-foreground mb-6">
          Your submission has been received. We'll review your company details and reach out within 24 hours.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Submit Another Application
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
      <div className="bg-card border border-border rounded-2xl p-8" id="contact-form">
        <h2 className="text-2xl font-bold text-foreground mb-6">Submit your company details</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="companyWebsite">Company Website *</Label>
              <Input id="companyWebsite" name="companyWebsite" type="url" required placeholder="https://yourstartup.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name *</Label>
              <Input id="companyName" name="companyName" required placeholder="Your company name" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ownerName">Full Name of Business Owner / CEO *</Label>
              <Input id="ownerName" name="ownerName" required placeholder="First Last" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="founderEmail">Founder Email *</Label>
              <Input id="founderEmail" name="founderEmail" type="email" required placeholder="founder@company.com" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="targetRaise">Target Raise (e.g., €250K–€1M) *</Label>
            <Input id="targetRaise" name="targetRaise" required placeholder="€250K–€1M" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="companyDescription">Brief Company Description *</Label>
            <Textarea
              id="companyDescription"
              name="companyDescription"
              required
              placeholder="Tell us about your company, your vision, and what you’re raising funds for..."
              rows={5}
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full group bg-primary hover:bg-primary/90">
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                Submit Details
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>
      </div>
    </motion.div>
  )
}
