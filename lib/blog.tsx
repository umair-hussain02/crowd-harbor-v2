export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  author: string
  createdAt: string
  updatedAt: string
  readTime: number
  published: boolean
}

export interface BlogPostInput {
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  author: string
  published: boolean
}

// Utility function to calculate read time
export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

// Utility function to generate slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

// In-memory storage for development (replace with database in production)
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Equity Crowdfunding: Trends to Watch in 2025",
    slug: "future-equity-crowdfunding-2025",
    excerpt:
      "Discover the emerging trends shaping the equity crowdfunding landscape and how startups can leverage these opportunities for successful fundraising.",
    content: `
      <h2>The Evolution of Equity Crowdfunding</h2>
      <p>Equity crowdfunding has transformed the way startups raise capital, democratizing access to investment opportunities and enabling entrepreneurs to connect directly with their communities. As we move through 2025, several key trends are shaping the future of this dynamic industry.</p>
      
      <h3>1. Increased Regulatory Support</h3>
      <p>Governments worldwide are recognizing the value of equity crowdfunding in fostering innovation and economic growth. New regulations are making it easier for both startups and investors to participate in crowdfunding campaigns while maintaining appropriate investor protections.</p>
      
      <h3>2. Technology Integration</h3>
      <p>Advanced technologies like AI and blockchain are being integrated into crowdfunding platforms to improve due diligence, enhance transparency, and streamline the investment process. These innovations are making equity crowdfunding more accessible and secure for all participants.</p>
      
      <h3>3. Sector Diversification</h3>
      <p>While technology startups have traditionally dominated equity crowdfunding, we're seeing increased participation from sectors like healthcare, renewable energy, and consumer goods. This diversification is creating new opportunities for investors and entrepreneurs alike.</p>
      
      <h3>4. Enhanced Investor Education</h3>
      <p>Platforms are investing heavily in investor education programs, helping retail investors make more informed decisions and understand the risks and rewards of startup investing.</p>
      
      <h2>What This Means for Startups</h2>
      <p>For startups looking to leverage equity crowdfunding in 2025, these trends present both opportunities and challenges. Success will depend on understanding these evolving dynamics and adapting strategies accordingly.</p>
      
      <p>At CrowdHarbor, we help startups navigate these trends and position themselves for crowdfunding success. Our partnership with Crowdcube ensures that our clients have access to the latest tools and strategies in the equity crowdfunding space.</p>
    `,
    image: "/equity-crowdfunding-trends-2025.jpg",
    author: "Sarah Johnson",
    createdAt: "2025-01-15T10:00:00Z",
    updatedAt: "2025-01-15T10:00:00Z",
    readTime: 5,
    published: true,
  },
  {
    id: "2",
    title: "How to Prepare Your Startup for Crowdcube Success",
    slug: "prepare-startup-crowdcube-success",
    excerpt:
      "A comprehensive guide to preparing your startup for a successful equity crowdfunding campaign on Crowdcube, from pitch deck to investor relations.",
    content: `
      <h2>Getting Ready for Your Crowdcube Campaign</h2>
      <p>Launching a successful equity crowdfunding campaign on Crowdcube requires careful preparation and strategic planning. Here's your comprehensive guide to getting ready for success.</p>
      
      <h3>1. Perfect Your Pitch Deck</h3>
      <p>Your pitch deck is the cornerstone of your campaign. It should clearly communicate your business model, market opportunity, competitive advantage, and growth strategy. Keep it concise but compelling, focusing on the key metrics that matter to investors.</p>
      
      <h3>2. Build Your Community</h3>
      <p>Start building your investor community well before launching your campaign. Engage with potential investors through social media, email newsletters, and industry events. A strong pre-launch community can make the difference between a successful and failed campaign.</p>
      
      <h3>3. Prepare Your Financials</h3>
      <p>Ensure your financial statements are accurate, up-to-date, and professionally prepared. Investors will scrutinize your numbers, so transparency and accuracy are crucial. Consider having your financials reviewed by a qualified accountant.</p>
      
      <h3>4. Develop Your Marketing Strategy</h3>
      <p>A successful crowdfunding campaign requires ongoing marketing efforts. Develop a comprehensive marketing strategy that includes social media, content marketing, PR, and direct outreach to potential investors.</p>
      
      <h3>5. Legal and Compliance Preparation</h3>
      <p>Ensure all legal documentation is in order, including your articles of incorporation, shareholder agreements, and any intellectual property registrations. Compliance with regulations is essential for a successful campaign.</p>
      
      <h2>Working with CrowdHarbor</h2>
      <p>At CrowdHarbor, we guide startups through every step of the Crowdcube preparation process. Our expertise and partnership with Crowdcube ensure that your campaign is positioned for maximum success.</p>
    `,
    image: "/startup-preparation-crowdcube-success.jpg",
    author: "Michael Chen",
    createdAt: "2025-01-10T14:30:00Z",
    updatedAt: "2025-01-10T14:30:00Z",
    readTime: 7,
    published: true,
  },
  {
    id: "3",
    title: "Case Study: How BrewDog Revolutionized Equity Crowdfunding",
    slug: "brewdog-equity-crowdfunding-case-study",
    excerpt:
      "An in-depth analysis of BrewDog's groundbreaking approach to equity crowdfunding and the lessons startups can learn from their success.",
    content: `
      <h2>The BrewDog Revolution</h2>
      <p>BrewDog's approach to equity crowdfunding has become legendary in the startup world. Their innovative "Equity for Punks" campaigns not only raised significant capital but also built a passionate community of brand advocates and investors.</p>
      
      <h3>The Strategy</h3>
      <p>BrewDog's success wasn't just about raising money—it was about building a movement. They positioned their investors as "Equity Punks," creating a sense of belonging and rebellion against traditional brewing establishments.</p>
      
      <h3>Key Success Factors</h3>
      <ul>
        <li><strong>Brand Storytelling:</strong> BrewDog crafted a compelling narrative around their mission to revolutionize the beer industry.</li>
        <li><strong>Community Building:</strong> They created exclusive experiences and benefits for their investor community.</li>
        <li><strong>Transparency:</strong> Regular updates and honest communication built trust with their investor base.</li>
        <li><strong>Product Quality:</strong> Their exceptional products backed up their bold claims and marketing.</li>
      </ul>
      
      <h3>The Results</h3>
      <p>Through multiple crowdfunding rounds, BrewDog raised over £75 million from more than 200,000 investors, creating one of the most successful equity crowdfunding stories in history.</p>
      
      <h3>Lessons for Other Startups</h3>
      <p>While not every startup can replicate BrewDog's exact approach, there are valuable lessons to be learned about community building, brand storytelling, and investor engagement.</p>
      
      <h2>Applying These Lessons</h2>
      <p>At CrowdHarbor, we help startups identify and implement the strategies that made BrewDog successful, adapted to their unique circumstances and market opportunities.</p>
    `,
    image: "/brewdog-crowdfunding-case-study-success.jpg",
    author: "Emma Thompson",
    createdAt: "2025-01-05T09:15:00Z",
    updatedAt: "2025-01-05T09:15:00Z",
    readTime: 6,
    published: true,
  },
]

export class BlogService {
  static async getAllPosts(limit?: number, published = true): Promise<BlogPost[]> {
    let posts = published ? blogPosts.filter((post) => post.published) : blogPosts
    posts = posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    return limit ? posts.slice(0, limit) : posts
  }

  static async getPostBySlug(slug: string): Promise<BlogPost | null> {
    return blogPosts.find((post) => post.slug === slug && post.published) || null
  }

  static async getPostById(id: string): Promise<BlogPost | null> {
    return blogPosts.find((post) => post.id === id) || null
  }

  static async createPost(input: BlogPostInput): Promise<BlogPost> {
    const id = (blogPosts.length + 1).toString()
    const readTime = calculateReadTime(input.content)
    const now = new Date().toISOString()

    const newPost: BlogPost = {
      id,
      ...input,
      readTime,
      createdAt: now,
      updatedAt: now,
    }

    blogPosts.push(newPost)
    return newPost
  }

  static async updatePost(id: string, input: Partial<BlogPostInput>): Promise<BlogPost | null> {
    const postIndex = blogPosts.findIndex((post) => post.id === id)
    if (postIndex === -1) return null

    const updatedPost = {
      ...blogPosts[postIndex],
      ...input,
      readTime: input.content ? calculateReadTime(input.content) : blogPosts[postIndex].readTime,
      updatedAt: new Date().toISOString(),
    }

    blogPosts[postIndex] = updatedPost
    return updatedPost
  }

  static async deletePost(id: string): Promise<boolean> {
    const postIndex = blogPosts.findIndex((post) => post.id === id)
    if (postIndex === -1) return false

    blogPosts.splice(postIndex, 1)
    return true
  }

  static async searchPosts(query: string): Promise<BlogPost[]> {
    const lowercaseQuery = query.toLowerCase()
    return blogPosts.filter(
      (post) =>
        post.published &&
        (post.title.toLowerCase().includes(lowercaseQuery) ||
          post.excerpt.toLowerCase().includes(lowercaseQuery) ||
          post.author.toLowerCase().includes(lowercaseQuery)),
    )
  }
}
