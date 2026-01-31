import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory storage (for demo/testing)
const usersData: any[] = []

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  const data = {
    telegram_id: searchParams.get('telegram_id'),
    zone_id: searchParams.get('zone_id'),
    sub_zone_id: searchParams.get('sub_zone_id'),
    event_type: searchParams.get('event_type'),
    reward_event_type: searchParams.get('reward_event_type'),
    estimated_price: searchParams.get('estimated_price'),
    ymid: searchParams.get('ymid'),
    request_var: searchParams.get('request_var'),
    timestamp: new Date().toISOString(),
  }

  // Save data
  usersData.push(data)

  console.log('📩 Monetag Postback:', data)

  return NextResponse.json({
    status: 'ok',
    total_events: usersData.length,
    usersData,
  })
}
