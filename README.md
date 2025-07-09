# ZeroDaily - Cybersecurity News Platform

ZeroDaily, a cybersecurity news platform that delivers timely security news, insights, and resources. The platform focuses on high-quality content about the latest vulnerabilities, threats, and best practices in the cybersecurity industry.

## System Requirements

### Technical Stack

- Frontend: Next.js with Tailwind CSS
- Email: Resend for newsletter subscriptions
- Deployment: Vercel
- Version Control: Git
- Content: Markdown with contentlayer

### Core Features

1. **Blog Platform**
   - SEO-optimized public-facing blog
   - Tagging system
   - User-friendly reading experience
   - Mobile-responsive design

2. **Content Organization**
   - Tag-based browsing and filtering
   - Search functionality
   - `Trending News` right sidebar


3. **User Engagement**
   - Newsletter subscription
   - Social sharing
   - Related articles suggestions
   - Resource library

## Current Progress

We're using a Next.js blog template based on Tailwind CSS, which provides a solid foundation for our content platform. The template has been forked from [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog).

## Ongoing Development Tasks

For a complete list of pending tasks and future development plans, see the [TODO.md](TODO.md) file.

## UI Improvements Made

We've enhanced the user interface to better suit a cybersecurity news platform:

1. Updated the header with improved styling and prominence
2. Redesigned the homepage to include:
   - A prominent hero section with cybersecurity focus
   - Improved content organization with a "Latest Updates" section
   - Enhanced newsletter signup section focused on security updates
3. Customized the Categories and Resources pages to match cybersecurity themes

## Setup Instructions

### Prerequisites

- Node.js (v18 or later recommended)
- Yarn package manager
- Beehiiv API key (for newsletter subscriptions)

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/zerodaily.git
   cd zerodaily
   ```

2. Install dependencies

   ```bash
   yarn install
   ```

3. Set up environment variables by copying `.env.example` to `.env.local` and filling in your API keys

   ```bash
   cp .env.example .env
   ```

4. Start the development server

   ```bash
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Implementation Considerations

For each major component, we're considering:

1. **Content Organization**
   - Tag relationships for related content discovery
   - Metadata optimization for SEO

2. **User Experience**
   - Reading experience optimization
   - Mobile-first approach
   - Performance and loading speed

3. **Security Considerations**
   - Secure content delivery
   - Newsletter subscription data handling
   - Protection against common web vulnerabilities (WAF)

4. **Scalability Planning**
   - Content organization as volume grows
   - Performance optimization for larger article base
   - Efficient search as content increases

## Development Approach

We're implementing core components in this order:

1. Basic blog platform with core content features
2. Content organization and discovery features
3. Newsletter and subscription management
4. Analytics and performance optimization

## Testing Considerations

Our testing strategy includes:

- Responsive design testing across devices
- Performance testing for page load times
- SEO validation and structured data testing
- Accessibility checks
