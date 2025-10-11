import { NextRequest, NextResponse } from "next/server";

interface InstagramPost {
  id: string;
  media_url: string;
  caption: string;
  permalink: string;
  timestamp: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
}

interface InstagramResponse {
  data: InstagramPost[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

export async function GET(request: NextRequest) {
  try {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

    if (!accessToken) {
      return NextResponse.json({ error: "Instagram access token not configured" }, { status: 500 });
    }

    // Fetch user's media from Instagram Basic Display API
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_url,caption,permalink,timestamp,media_type&access_token=${accessToken}&limit=8`
    );

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`);
    }

    const data: InstagramResponse = await response.json();

    // Transform the data to match our component interface
    const posts = data.data.map((post: any) => ({
      id: post.id,
      media_url: post.media_url,
      caption: post.caption || "",
      permalink: post.permalink,
      timestamp: post.timestamp,
      media_type: post.media_type,
    }));

    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Instagram API Error:", error);
    return NextResponse.json({ error: "Failed to fetch Instagram posts" }, { status: 500 });
  }
}
