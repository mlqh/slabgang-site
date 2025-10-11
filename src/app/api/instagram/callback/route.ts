import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");

  if (error) {
    return NextResponse.json({ error: `Instagram authentication failed: ${error}` }, { status: 400 });
  }

  if (!code) {
    return NextResponse.json({ error: "No authorization code received" }, { status: 400 });
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch("https://api.instagram.com/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: process.env.INSTAGRAM_APP_ID!,
        client_secret: process.env.INSTAGRAM_APP_SECRET!,
        grant_type: "authorization_code",
        redirect_uri: process.env.INSTAGRAM_REDIRECT_URI!,
        code: code,
      }),
    });

    if (!tokenResponse.ok) {
      throw new Error("Failed to exchange code for access token");
    }

    const tokenData = await tokenResponse.json();

    // Exchange short-lived token for long-lived token
    const longLivedResponse = await fetch(
      `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${process.env.INSTAGRAM_APP_SECRET}&access_token=${tokenData.access_token}`
    );

    if (!longLivedResponse.ok) {
      throw new Error("Failed to get long-lived access token");
    }

    const longLivedData = await longLivedResponse.json();

    return NextResponse.json({
      success: true,
      access_token: longLivedData.access_token,
      expires_in: longLivedData.expires_in,
      message: "Instagram authentication successful! Add this token to your .env.local file as INSTAGRAM_ACCESS_TOKEN",
    });
  } catch (error) {
    console.error("Instagram OAuth Error:", error);
    return NextResponse.json({ error: "Failed to complete Instagram authentication" }, { status: 500 });
  }
}
