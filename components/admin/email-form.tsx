"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EmailFormProps {
  onCancel: () => void;
  onEmailSent: () => void;
  getAuthHeaders: () => Record<string, string>;
}

interface EmailTemplate {
  id: string;
  name: string;
}

export function EmailForm({
  onCancel,
  onEmailSent,
  getAuthHeaders,
}: EmailFormProps) {
  const [formData, setFormData] = useState({
    recipients: "",
    subject: "",
    content: "",
    templateId: "",
  });

  const [templates, setTemplates] = useState<EmailTemplate[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    try {
      const res = await fetch("/api/admin/emails/templates", {
        headers: getAuthHeaders(),
      });
      if (res.ok) {
        const data = await res.json();
        setTemplates(data.templates || []);
      }
    } catch (error) {
      console.error("Failed to load templates:", error);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch("/api/admin/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...getAuthHeaders(),
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        onEmailSent();
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-foreground">Send New Email</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipients */}
        <div>
          <label
            htmlFor="recipients"
            className="block text-sm font-medium mb-2"
          >
            Recipients
          </label>
          <Input
            id="recipients"
            value={formData.recipients}
            onChange={(e) => handleInputChange("recipients", e.target.value)}
            placeholder="Enter comma-separated email addresses..."
            required
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject
          </label>
          <Input
            id="subject"
            value={formData.subject}
            onChange={(e) => handleInputChange("subject", e.target.value)}
            placeholder="Enter email subject..."
            required
          />
        </div>

        {/* Content */}
        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-2">
            Content
          </label>
          <Textarea
            id="content"
            value={formData.content}
            onChange={(e) => handleInputChange("content", e.target.value)}
            placeholder="Write your email content (HTML supported)..."
            rows={10}
            className="font-mono text-sm"
            required
          />
        </div>

        {/* Template */}
        <div>
          <label htmlFor="template" className="block text-sm font-medium mb-2">
            Template
          </label>
          <Select
            value={formData.templateId}
            onValueChange={(value) => handleInputChange("templateId", value)}
          >
            <SelectTrigger id="template">
              <SelectValue placeholder="Choose an email template" />
            </SelectTrigger>
            <SelectContent>
              {templates.length === 0 ? (
                <SelectItem value="no-template" disabled>
                  No templates available
                </SelectItem>
              ) : (
                templates.map((template) => (
                  <SelectItem key={template.id} value={template.id}>
                    {template.name}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-2 pt-4">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Email"}
          </Button>
        </div>
      </form>
    </div>
  );
}
