-- Create blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    image VARCHAR(500),
    author VARCHAR(100) NOT NULL,
    published BOOLEAN DEFAULT FALSE,
    read_time INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index on slug for faster lookups
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);

-- Create index on published status and created_at for listing pages
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_created ON blog_posts(published, created_at DESC);

-- Create index on author for filtering
CREATE INDEX IF NOT EXISTS idx_blog_posts_author ON blog_posts(author);

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, image, author, published, read_time) VALUES
(
    'The Future of Equity Crowdfunding: Trends to Watch in 2025',
    'future-equity-crowdfunding-2025',
    'Discover the emerging trends shaping the equity crowdfunding landscape and how startups can leverage these opportunities for successful fundraising.',
    '<h2>The Evolution of Equity Crowdfunding</h2><p>Equity crowdfunding has transformed the way startups raise capital, democratizing access to investment opportunities and enabling entrepreneurs to connect directly with their communities. As we move through 2025, several key trends are shaping the future of this dynamic industry.</p><h3>1. Increased Regulatory Support</h3><p>Governments worldwide are recognizing the value of equity crowdfunding in fostering innovation and economic growth. New regulations are making it easier for both startups and investors to participate in crowdfunding campaigns while maintaining appropriate investor protections.</p><h3>2. Technology Integration</h3><p>Advanced technologies like AI and blockchain are being integrated into crowdfunding platforms to improve due diligence, enhance transparency, and streamline the investment process. These innovations are making equity crowdfunding more accessible and secure for all participants.</p><h3>3. Sector Diversification</h3><p>While technology startups have traditionally dominated equity crowdfunding, we''re seeing increased participation from sectors like healthcare, renewable energy, and consumer goods. This diversification is creating new opportunities for investors and entrepreneurs alike.</p><h3>4. Enhanced Investor Education</h3><p>Platforms are investing heavily in investor education programs, helping retail investors make more informed decisions and understand the risks and rewards of startup investing.</p><h2>What This Means for Startups</h2><p>For startups looking to leverage equity crowdfunding in 2025, these trends present both opportunities and challenges. Success will depend on understanding these evolving dynamics and adapting strategies accordingly.</p><p>At CrowdHarbor, we help startups navigate these trends and position themselves for crowdfunding success. Our partnership with Crowdcube ensures that our clients have access to the latest tools and strategies in the equity crowdfunding space.</p>',
    '/equity-crowdfunding-trends-2025.jpg',
    'Sarah Johnson',
    TRUE,
    5
),
(
    'How to Prepare Your Startup for Crowdcube Success',
    'prepare-startup-crowdcube-success',
    'A comprehensive guide to preparing your startup for a successful equity crowdfunding campaign on Crowdcube, from pitch deck to investor relations.',
    '<h2>Getting Ready for Your Crowdcube Campaign</h2><p>Launching a successful equity crowdfunding campaign on Crowdcube requires careful preparation and strategic planning. Here''s your comprehensive guide to getting ready for success.</p><h3>1. Perfect Your Pitch Deck</h3><p>Your pitch deck is the cornerstone of your campaign. It should clearly communicate your business model, market opportunity, competitive advantage, and growth strategy. Keep it concise but compelling, focusing on the key metrics that matter to investors.</p><h3>2. Build Your Community</h3><p>Start building your investor community well before launching your campaign. Engage with potential investors through social media, email newsletters, and industry events. A strong pre-launch community can make the difference between a successful and failed campaign.</p><h3>3. Prepare Your Financials</h3><p>Ensure your financial statements are accurate, up-to-date, and professionally prepared. Investors will scrutinize your numbers, so transparency and accuracy are crucial. Consider having your financials reviewed by a qualified accountant.</p><h3>4. Develop Your Marketing Strategy</h3><p>A successful crowdfunding campaign requires ongoing marketing efforts. Develop a comprehensive marketing strategy that includes social media, content marketing, PR, and direct outreach to potential investors.</p><h3>5. Legal and Compliance Preparation</h3><p>Ensure all legal documentation is in order, including your articles of incorporation, shareholder agreements, and any intellectual property registrations. Compliance with regulations is essential for a successful campaign.</p><h2>Working with CrowdHarbor</h2><p>At CrowdHarbor, we guide startups through every step of the Crowdcube preparation process. Our expertise and partnership with Crowdcube ensure that your campaign is positioned for maximum success.</p>',
    '/startup-preparation-crowdcube-success.jpg',
    'Michael Chen',
    TRUE,
    7
),
(
    'Case Study: How BrewDog Revolutionized Equity Crowdfunding',
    'brewdog-equity-crowdfunding-case-study',
    'An in-depth analysis of BrewDog''s groundbreaking approach to equity crowdfunding and the lessons startups can learn from their success.',
    '<h2>The BrewDog Revolution</h2><p>BrewDog''s approach to equity crowdfunding has become legendary in the startup world. Their innovative "Equity for Punks" campaigns not only raised significant capital but also built a passionate community of brand advocates and investors.</p><h3>The Strategy</h3><p>BrewDog''s success wasn''t just about raising money—it was about building a movement. They positioned their investors as "Equity Punks," creating a sense of belonging and rebellion against traditional brewing establishments.</p><h3>Key Success Factors</h3><ul><li><strong>Brand Storytelling:</strong> BrewDog crafted a compelling narrative around their mission to revolutionize the beer industry.</li><li><strong>Community Building:</strong> They created exclusive experiences and benefits for their investor community.</li><li><strong>Transparency:</strong> Regular updates and honest communication built trust with their investor base.</li><li><strong>Product Quality:</strong> Their exceptional products backed up their bold claims and marketing.</li></ul><h3>The Results</h3><p>Through multiple crowdfunding rounds, BrewDog raised over £75 million from more than 200,000 investors, creating one of the most successful equity crowdfunding stories in history.</p><h3>Lessons for Other Startups</h3><p>While not every startup can replicate BrewDog''s exact approach, there are valuable lessons to be learned about community building, brand storytelling, and investor engagement.</p><h2>Applying These Lessons</h2><p>At CrowdHarbor, we help startups identify and implement the strategies that made BrewDog successful, adapted to their unique circumstances and market opportunities.</p>',
    '/brewdog-crowdfunding-case-study-success.jpg',
    'Emma Thompson',
    TRUE,
    6
);

-- Create trigger to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_blog_posts_updated_at 
    BEFORE UPDATE ON blog_posts 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
