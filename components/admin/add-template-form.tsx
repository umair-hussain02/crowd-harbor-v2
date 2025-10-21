"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface AddTemplateFormProps {
  onCancel: () => void;
  onTemplateAdded: () => void;
  getAuthHeaders: () => Record<string, string>;
}

export function AddTemplateForm({
  onCancel,
  onTemplateAdded,
  getAuthHeaders,
}: AddTemplateFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    content: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/admin/emails/templates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...getAuthHeaders(),
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        onTemplateAdded();
      } else {
        console.error("Failed to create template");
      }
    } catch (error) {
      console.error("Error creating template:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 bg-background border rounded-2xl shadow-sm p-6">
      <h2 className="text-3xl font-bold text-foreground">Add New Template</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Template Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Template Name
          </label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Enter template name (e.g. Welcome Email)"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium mb-2"
          >
            Description
          </label>
          <Input
            id="description"
            value={formData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            placeholder="Briefly describe this template (optional)"
          />
        </div>

        {/* Content */}
        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-2">
            Template Content (HTML Supported)
          </label>
          <Textarea
            id="content"
            value={formData.content}
            onChange={(e) => handleInputChange("content", e.target.value)}
            placeholder="Example: <h1>Welcome {{content}}</h1>"
            rows={10}
            className="font-mono text-sm"
            required
          />
          <p className="text-xs text-muted-foreground mt-1">
            Use <code className="bg-muted px-1 rounded">{"{{content}}"}</code> to
            insert dynamic content when sending an email.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-2 pt-4">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save Template"}
          </Button>
        </div>
      </form>
    </div>
  );
}
