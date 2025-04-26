import { NextRequest, NextResponse } from 'next/server'
import { submitToIndexNow } from '../../../utils/indexnow'
import { z } from 'zod'

// Rate limiting state (in-memory for simplicity)
// In production, consider using a distributed store like Redis
const requestCounts = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT = 10 // Max requests per minute
const RATE_LIMIT_WINDOW_MS = 60 * 1000 // 1 minute

// Input validation schema
const indexNowSchema = z.object({
  urls: z.array(z.string().url()).min(1).max(10000), // IndexNow allows up to 10,000 URLs per request
})

/**
 * Check rate limit for the given IP
 * @param ip - IP address
 * @returns true if rate limit is exceeded, false otherwise
 */
function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = requestCounts.get(ip)

  // First request from this IP
  if (!record) {
    requestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  // Reset counter if window has passed
  if (now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  // Increment counter
  record.count++
  requestCounts.set(ip, record)

  // Check if rate limit is exceeded
  return record.count > RATE_LIMIT
}

/**
 * API route handler for IndexNow submissions
 *
 * Accepts POST requests with a JSON body containing:
 * - urls: Array of URLs to submit to IndexNow
 *
 * This endpoint is rate-limited and validates input.
 */
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    // Get client IP for rate limiting
    const ip = req.headers.get('x-forwarded-for') || 'unknown'
    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Rate limit exceeded. Try again later.' }, { status: 429 })
    }

    // Parse and validate request body
    const body = await req.json()
    const result = indexNowSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid request body', details: result.error.format() },
        { status: 400 }
      )
    }

    // Submit URLs to IndexNow
    await submitToIndexNow(result.data.urls)

    // Return success response
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('IndexNow API error:', error)

    // Return appropriate error response
    if ((error as Error).message.includes('not configured')) {
      return NextResponse.json(
        { error: 'IndexNow is not configured on the server' },
        { status: 501 }
      )
    }

    return NextResponse.json({ error: 'Failed to submit URLs to IndexNow' }, { status: 500 })
  }
}

/**
 * Handle OPTIONS requests for CORS
 */
export function OPTIONS(): NextResponse {
  return NextResponse.json({})
}
