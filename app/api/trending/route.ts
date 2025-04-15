import { NextResponse } from 'next/server'

// Define interface for Vercel Analytics data
interface AnalyticsData {
  views: number
  // Add other properties from Vercel Analytics as needed
}

// Fallback data for when Vercel analytics is not available
const fallbackTrendingNews = [
  {
    title: 'Understanding Zero Trust Security',
    href: '/blog/understanding-zero-trust-security',
    date: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  },
  {
    title: 'Latest Ransomware Trends',
    href: '/blog/latest-ransomware-trends',
    date: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  },
]

export async function GET() {
  try {
    // If Vercel environment variables are not set, return fallback data
    if (!process.env.VERCEL_PROJECT_ID || !process.env.VERCEL_ACCESS_TOKEN) {
      return NextResponse.json(fallbackTrendingNews)
    }

    // Get analytics data for the last 7 days
    const response = await fetch(
      `https://api.vercel.com/v9/projects/${process.env.VERCEL_PROJECT_ID}/analytics/pages?from=${Date.now() - 7 * 24 * 60 * 60 * 1000}&to=${Date.now()}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.VERCEL_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Vercel API Error:', errorData)
      // If API call fails, return fallback data
      return NextResponse.json(fallbackTrendingNews)
    }

    const data = await response.json()

    // Transform the data to match our trending news format
    const trendingNews = Object.entries(data)
      .map(([path, stats]: [string, AnalyticsData]) => ({
        title: path.split('/').pop()?.replace(/-/g, ' ') || path,
        href: path,
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      }))
      .sort((a, b) => {
        // Sort by views but don't include in response
        const aViews = data[a.href]?.views || 0
        const bViews = data[b.href]?.views || 0
        return bViews - aViews
      })
      .slice(0, 4)

    return NextResponse.json(trendingNews)
  } catch (error) {
    console.error('Error fetching trending news:', error)
    // If any error occurs, return fallback data
    return NextResponse.json(fallbackTrendingNews)
  }
}
