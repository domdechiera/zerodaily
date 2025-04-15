import { NextResponse } from 'next/server'

// Define interface for Vercel Analytics data
interface AnalyticsData {
  views: number
  // Add other properties from Vercel Analytics as needed
}

// Fallback data for when Vercel analytics is not available
const fallbackPopularResources = [
  {
    title: 'OWASP Top 10 2024',
    href: '/resources/owasp-top-10-2024',
    category: 'Security Standards',
    date: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  },
  {
    title: 'NIST Cybersecurity Framework',
    href: '/resources/nist-cybersecurity-framework',
    category: 'Security Standards',
    date: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  },
  {
    title: 'MITRE ATT&CK Framework',
    href: '/resources/mitre-attack-framework',
    category: 'Threat Intelligence',
    date: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  },
  {
    title: 'CIS Controls v8',
    href: '/resources/cis-controls-v8',
    category: 'Security Controls',
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
      return NextResponse.json(fallbackPopularResources)
    }

    // Get analytics data for the last 30 days
    const response = await fetch(
      `https://api.vercel.com/v9/projects/${process.env.VERCEL_PROJECT_ID}/analytics/pages?from=${Date.now() - 30 * 24 * 60 * 60 * 1000}&to=${Date.now()}`,
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
      return NextResponse.json(fallbackPopularResources)
    }

    const data = await response.json()

    // Transform the data to match our popular resources format
    const popularResources = Object.entries(data)
      .filter(([path]) => path.startsWith('/resources/')) // Only include resource pages
      .map(([path, stats]: [string, AnalyticsData]) => ({
        title: path.split('/').pop()?.replace(/-/g, ' ') || path,
        href: path,
        category: path.split('/')[2]?.replace(/-/g, ' ') || 'Resources', // Extract category from path
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

    return NextResponse.json(popularResources)
  } catch (error) {
    console.error('Error fetching popular resources:', error)
    // If any error occurs, return fallback data
    return NextResponse.json(fallbackPopularResources)
  }
}
