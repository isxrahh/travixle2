// src/app/api/hotel-details/route.ts

import { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const hotel_id = searchParams.get('hotel_id'); // We'll ignore this and use a test query for now

  const SERPAPI_KEY = process.env.SERPAPI_KEY;

  if (!SERPAPI_KEY) {
    return new Response(JSON.stringify({ error: 'Missing SerpApi key' }), { status: 500 });
  }

  try {
    const property_token = "ChcI7vL0kP7X0f6SARoLL2cvMXZxX2p5bBAB";
    // Step 1: Search for hotels to get property_token
    const searchParams = new URLSearchParams({
      engine: 'google_hotels',
      q: property_token, // Change to dynamic later, or use your hotel name
      check_in_date: '2025-12-30',
      check_out_date: '2026-01-02',
      api_key: SERPAPI_KEY,
      gl: 'us',
      hl: 'en',
      currency: 'USD',
    });

    const searchRes = await fetch(`https://serpapi.com/search?${searchParams}`);
    if (!searchRes.ok) throw new Error('Search failed');

    const searchData = await searchRes.json();

    const firstProperty = searchData.properties?.[0];
    if (!firstProperty || !firstProperty.property_token) {
      return new Response(JSON.stringify({ error: 'No hotel found' }), { status: 404 });
    }

    // Step 2: Get details using property_token
    const detailsParams = new URLSearchParams({
      engine: 'google_hotels',
      property_token: firstProperty.property_token,
      check_in_date: '2025-12-30',
      check_out_date: '2026-01-02',
      api_key: SERPAPI_KEY,
      gl: 'us',
      hl: 'en',
      currency: 'USD',
    });

    const detailsRes = await fetch(`https://serpapi.com/search?${detailsParams}`);
    if (!detailsRes.ok) throw new Error('Details fetch failed');

    const detailsData = await detailsRes.json();

    return new Response(JSON.stringify(detailsData), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to fetch from SerpApi' }), { status: 500 });
  }
}