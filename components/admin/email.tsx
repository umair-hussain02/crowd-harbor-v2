"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Plus, Search, Eye, Trash2 } from "lucide-react"

interface EmailItem {
  id: string
  subject: string
  recipient: string
  sentAt: string
  status: "sent" | "failed"
}

interface EmailListProps {
  emails: EmailItem[]
  onSendNew: () => void
  onAddTemplate: () => void
  onEmailDeleted: () => void
  getAuthHeaders: () => Record<string, string>
}

function Email({ emails, onSendNew, onEmailDeleted, getAuthHeaders, onAddTemplate }: EmailListProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [deleting, setDeleting] = useState<string | null>(null)

  const filteredEmails = emails.filter(
    (email) =>
      email.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.recipient.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleDeleteEmail = async (emailId: string) => {
    setDeleting(emailId)
    try {
      const response = await fetch(`/api/admin/emails/${emailId}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      })

      if (response.ok) {
        onEmailDeleted()
      } else {
        console.error("Failed to delete email")
      }
    } catch (error) {
      console.error("Error deleting email:", error)
    } finally {
      setDeleting(null)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-foreground">Sent Emails</h2>
        <div >
        <Button  onClick={onSendNew}>
          <Plus className="w-4 h-4 mr-2 " />
          Send New Email
        </Button>
        <Button className="ml-2" onClick={onAddTemplate}>
          <Plus className="w-4 h-4 mr-2" />
          Add New Template
        </Button>


        </div>
      </div>

      {/* Search */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search emails..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="text-sm text-muted-foreground">
          {filteredEmails.length} of {emails.length} emails
        </div>
      </div>

      {/* List */}
      <div className="grid gap-6">
        {filteredEmails.map((email) => (
          <Card key={email.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-1">{email.subject}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-2">
                    To: {email.recipient}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Sent: {new Date(email.sentAt).toLocaleString()}
                  </p>
                </div>
                <Badge variant={email.status === "sent" ? "default" : "destructive"}>
                  {email.status === "sent" ? "Sent" : "Failed"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={`/admin/emails/${email.id}`} target="_blank" rel="noopener noreferrer">
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </a>
                </Button>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" size="sm" disabled={deleting === email.id}>
                      <Trash2 className="w-4 h-4 mr-2" />
                      {deleting === email.id ? "Deleting..." : "Delete"}
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete Email</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to delete the email “{email.subject}”? This cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleDeleteEmail(email.id)}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredEmails.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <p className="text-muted-foreground">No emails found matching your search.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}


export default Email