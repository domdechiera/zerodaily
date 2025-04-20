import { NextResponse } from 'next/server'
import { trendingNews } from '@/data/trendingNews'

export async function GET() {
  return NextResponse.json(trendingNews)
}
