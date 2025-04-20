import { NextResponse } from 'next/server'
import { popularResources } from '@/data/popularResources'

export async function GET() {
  return NextResponse.json(popularResources)
}
