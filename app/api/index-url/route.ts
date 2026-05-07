import { NextResponse } from 'next/server';
export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // Dynamically extract the root domain (e.g., https://pdfscanner.io) from the submitted URL
    let siteUrl;
    try {
      const parsedUrl = new URL(url);
      siteUrl = `${parsedUrl.protocol}//${parsedUrl.hostname}`;
    } catch (e) {
      return NextResponse.json({ error: 'Invalid URL format. Include https://' }, { status: 400 });
    }

    const bingApiKey = process.env.BING_API_KEY;

    // The Bing Indexing API endpoint
    const endpoint = `https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=${bingApiKey}`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        siteUrl: siteUrl, // Now dynamically matches your input
        urlList: [url]
      }),
    });

    const data = await response.json();

    if (response.ok && data.d === null) { 
        return NextResponse.json({ success: true, message: "Pinged Bing Successfully!" });
    } else if (data.ErrorCode) {
        return NextResponse.json({ error: data.Message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error('Backend Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}