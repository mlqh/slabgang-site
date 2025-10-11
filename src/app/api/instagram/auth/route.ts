import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const appId = process.env.INSTAGRAM_APP_ID;
  const redirectUri = process.env.INSTAGRAM_REDIRECT_URI || "http://localhost:3000/api/instagram/callback";

  if (!appId) {
    return NextResponse.json({ error: "Instagram App ID not configured" }, { status: 500 });
  }

  // Instagram OAuth URL
  const authUrl = new URL("https://api.instagram.com/oauth/authorize");
  authUrl.searchParams.set("client_id", appId);
  authUrl.searchParams.set("redirect_uri", redirectUri);
  authUrl.searchParams.set("scope", "user_profile,user_media");
  authUrl.searchParams.set("response_type", "code");

  return NextResponse.redirect(authUrl.toString());
}
