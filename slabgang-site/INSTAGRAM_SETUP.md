# Instagram API Setup Guide

This guide will help you set up Instagram Basic Display API integration for your SlabGang website.

## Prerequisites

1. A Facebook Developer account
2. An Instagram Business or Creator account
3. Your website domain (for production)

## Step 1: Create a Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "Create App" → "Consumer" → "Next"
3. Fill in your app details:
   - **App Name**: SlabGang Website
   - **App Contact Email**: your-email@example.com
   - **App Purpose**: Other
4. Click "Create App"

**Note**: After creating the app, you'll see a dashboard with "App customization and requirements" section. This is where you'll find Instagram integration options.

## Step 2: Add Instagram Basic Display Product

1. In your app dashboard, look for the "App customization and requirements" section
2. You should see "Customize the Embed Facebook, Instagram and Threads content in other websites use case" - click on this
3. This will take you to the Instagram Basic Display setup
4. If you don't see this option, try going to "Use cases" in the left sidebar and look for Instagram-related options

## Step 3: Configure Instagram Basic Display

1. **Valid OAuth Redirect URIs**: Add your redirect URI

   - Development: `http://localhost:3000/api/instagram/callback`
   - Production: `https://yourdomain.com/api/instagram/callback`

2. **Deauthorize Callback URL**: Add your deauthorize callback

   - Development: `http://localhost:3000/api/instagram/deauthorize`
   - Production: `https://yourdomain.com/api/instagram/deauthorize`

3. **Data Deletion Request URL**: Add your data deletion callback
   - Development: `http://localhost:3000/api/instagram/data-deletion`
   - Production: `https://yourdomain.com/api/instagram/data-deletion`

## Step 4: Get Your Credentials

1. Go to "App Settings" → "Basic"
2. Copy your **App ID** and **App Secret**
3. Add these to your `.env.local` file:

```env
INSTAGRAM_APP_ID=your_app_id_here
INSTAGRAM_APP_SECRET=your_app_secret_here
INSTAGRAM_REDIRECT_URI=http://localhost:3000/api/instagram/callback
```

## Step 5: Generate Access Token

### Option A: Using the OAuth Flow (Recommended)

1. Start your development server: `npm run dev`
2. Visit: `http://localhost:3000/api/instagram/auth` (you'll need to create this route)
3. Follow the Instagram authorization flow
4. Copy the returned access token to your `.env.local` file

### Option B: Using Facebook Graph API Explorer

1. Go to [Graph API Explorer](https://developers.facebook.com/tools/explorer/)
2. Select your app
3. Generate a User Access Token with `instagram_basic` permissions
4. Use the token in your `.env.local` file

## Step 6: Add Access Token to Environment

Add the access token to your `.env.local` file:

```env
INSTAGRAM_ACCESS_TOKEN=your_long_lived_access_token_here
```

## Step 7: Test the Integration

1. Restart your development server
2. Visit your website
3. Check the Instagram section - it should now show your real posts!

## Troubleshooting

### Common Issues

1. **"Invalid OAuth Redirect URI"**

   - Make sure your redirect URI exactly matches what you configured in Facebook Developer Console
   - Check for trailing slashes and HTTP vs HTTPS

2. **"Access Token Invalid"**

   - Instagram access tokens expire (usually 60 days)
   - You need to refresh them using the refresh token endpoint

3. **"App Not Live"**
   - Your app needs to be in "Live" mode to work in production
   - Go to App Settings → App Review → Make App Live

### Token Refresh

Instagram access tokens expire. To refresh them:

1. Use the refresh token endpoint: `https://graph.instagram.com/refresh_access_token`
2. Or re-run the OAuth flow to get a new token

## Production Deployment

1. Update your redirect URIs in Facebook Developer Console to use your production domain
2. Make sure your app is in "Live" mode
3. Add your production environment variables to your hosting platform

## Security Notes

- Never commit your `.env.local` file to version control
- Use environment variables in production
- Regularly rotate your access tokens
- Monitor your API usage in the Facebook Developer Console

## Support

If you encounter issues:

1. Check the [Instagram Basic Display API Documentation](https://developers.facebook.com/docs/instagram-basic-display-api)
2. Review the [Facebook Developer Community](https://developers.facebook.com/community/)
3. Check your app's error logs in the Facebook Developer Console
