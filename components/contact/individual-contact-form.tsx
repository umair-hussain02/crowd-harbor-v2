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

export function InquiryForm() {
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
        <h3 className="text-2xl font-bold text-foreground mb-4">Thank You for Contacting Us!</h3>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Submit Another Application
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
      <div className="bg-card border border-border rounded-2xl p-8" id="contact-form">
        <h2 className="text-2xl font-bold text-foreground mb-6">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input id="fullName" name="fullName" required placeholder="Your full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" required placeholder="Your email address" />
            </div>
          </div>           

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Your message"
              rows={10}
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full group bg-primary hover:bg-primary/90">
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>
      </div>
    </motion.div>
  )
}
