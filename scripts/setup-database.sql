-- Added SQL script for database setup
-- CrowdHarbor Database Setup Script
-- Run this script to create the necessary tables for the application

-- Create inquiries table
CREATE TABLE IF NOT EXISTS inquiries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    inquiry_type VARCHAR(50) NOT NULL CHECK (inquiry_type IN ('startup-funding', 'investor-partnership', 'general-inquiry', 'consultation')),
    message TEXT NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_inquiries_email ON inquiries(email);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_timestamp ON inquiries(timestamp);
CREATE INDEX IF NOT EXISTS idx_inquiries_inquiry_type ON inquiries(inquiry_type);

-- Create trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_inquiries_updated_at 
    BEFORE UPDATE ON inquiries 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data (optional)
-- INSERT INTO inquiries (name, email, company, inquiry_type, message) VALUES
-- ('John Doe', 'john@example.com', 'TechStartup Inc', 'startup-funding', 'We are looking for equity crowdfunding opportunities for our fintech startup.'),
-- ('Jane Smith', 'jane@investor.com', 'Investment Group', 'investor-partnership', 'Interested in partnering with CrowdHarbor for deal sourcing.');

COMMENT ON TABLE inquiries IS 'Contact form submissions and inquiries';
COMMENT ON COLUMN inquiries.inquiry_type IS 'Type of inquiry: startup-funding, investor-partnership, general-inquiry, consultation';
COMMENT ON COLUMN inquiries.status IS 'Status of inquiry: new, contacted, closed';
