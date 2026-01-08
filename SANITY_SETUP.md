# Sanity CMS Setup Guide

This guide will help you properly configure and use Sanity CMS with your Hooproster Next.js 15 application.

## Prerequisites

- Node.js 18+ installed
- A Sanity account (sign up at https://www.sanity.io)
- Your Sanity Project ID and Dataset name

## Configuration Overview

Your Sanity setup consists of:
- **Sanity Studio**: Admin interface at `/studio`
- **Sanity Client**: For fetching data from your content
- **Fallback JSON**: Backup content if Sanity is unavailable

## Step 1: Environment Variables

Your `.env` file should contain:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=0qlnxbrq
NEXT_PUBLIC_SANITY_DATASET=production

# Optional: For authenticated requests and live preview
# SANITY_API_TOKEN=your_token_here
```

### Getting Your Sanity API Token (Optional)

1. Go to https://www.sanity.io/manage/personal/tokens
2. Click "Create new token"
3. Give it a name (e.g., "Hooproster Dev Token")
4. Select "Editor" or "Viewer" permissions
5. Copy the token and add it to your `.env` file

## Step 2: Start the Development Server

```bash
npm run dev
```

The application will run at http://localhost:3000

## Step 3: Access Sanity Studio

Navigate to http://localhost:3000/studio

You'll be prompted to log in with your Sanity account.

## Step 4: Create Your Landing Page Content

1. In Sanity Studio, click "Create new document"
2. Select "Landing Page"
3. Fill in all the sections:
   - **Global Settings**: Site name, social media URLs
   - **Hero Section**: Badge, headlines, CTA text
   - **Stats**: Subscriber count, reports, prospects
   - **Features**: Section title and feature items
   - **Content Preview**: Sample reports
   - **Pricing**: Pricing tiers and features
   - **Newsletter**: CTA section
   - **Footer**: Copyright, links

4. **Important**: Click "Publish" (not just "Save draft")
   - Only published documents are visible on your website
   - Draft documents won't show up

## Step 5: Verify Integration

1. Go back to http://localhost:3000
2. Refresh the page
3. Your content should now be loaded from Sanity
4. Check the browser console (F12) for any error messages

## How It Works

### Data Fetching Flow

```
1. useSiteContent hook attempts to fetch from Sanity
   ↓
2. If successful: Use Sanity data
   ↓
3. If failed: Fall back to site-content.json
   ↓
4. Display warning message if using fallback
```

### Content Updates

- Content changes in Sanity Studio are immediately available
- You may need to refresh your browser to see updates
- In production, consider adding revalidation for better performance

## Troubleshooting

### "Using fallback JSON content" warning

**Cause**: No published Landing Page document in Sanity

**Solution**:
1. Go to http://localhost:3000/studio
2. Create a Landing Page document
3. Fill in the content
4. Click **"Publish"** (not just Save)
5. Refresh your website

### Sanity Studio won't load

**Causes & Solutions**:
- **Wrong Project ID**: Check your `.env` file matches your Sanity project
- **Not logged in**: Clear browser cache and log in again
- **Network issues**: Check your internet connection

### Images not displaying

**Solution**:
- Next.js is already configured to allow Sanity CDN images
- Make sure image URLs from Sanity are valid
- Check browser console for 404 errors

### CORS errors

**Solution**:
1. Go to https://www.sanity.io/manage
2. Select your project
3. Go to "API" → "CORS Origins"
4. Add `http://localhost:3000` for development
5. Add your production domain when deploying

## File Structure

```
f:\hooproster
├── sanity/
│   ├── env.ts                    # Environment variables
│   ├── structure.ts              # Studio structure
│   ├── lib/
│   │   ├── client.ts            # Sanity client setup
│   │   ├── image.ts             # Image URL builder
│   │   ├── live.ts              # Live preview setup
│   │   └── queries.ts           # GROQ queries
│   └── schemaTypes/
│       ├── index.ts             # Schema exports
│       └── landingPage.ts       # Landing page schema
├── app/
│   └── studio/[[...tool]]/
│       └── page.tsx             # Studio page route
├── hooks/
│   └── useSiteContent.tsx       # Content fetching hook
├── sanity.config.ts             # Studio configuration
├── sanity.cli.ts                # Sanity CLI config
└── .env                         # Environment variables
```

## API Configuration

### Client Configuration

- **API Version**: `2024-03-15` (stable)
- **CDN**: Enabled for public data (faster)
- **Perspective**: `published` (only show published documents)

### Queries

All queries are defined in `sanity/lib/queries.ts` using GROQ (Graph-Relational Object Queries).

## Production Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=0qlnxbrq
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_token_here
   ```
4. Deploy

### CORS Configuration for Production

1. Go to https://www.sanity.io/manage
2. Select your project
3. API → CORS Origins
4. Add your production domain (e.g., `https://hooproster.com`)

## Additional Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Guide](https://www.sanity.io/docs/nextjs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Sanity Studio Customization](https://www.sanity.io/docs/sanity-studio)

## Need Help?

- Check the browser console (F12) for error messages
- Verify your `.env` configuration
- Ensure your Sanity document is **published** (not just saved)
- Make sure you're logged into Sanity Studio

## Current Configuration Status

✅ Sanity Studio configured at `/studio`
✅ Client properly set up with Next.js 15
✅ API version set to stable release (2024-03-15)
✅ Fallback JSON content available
✅ Image optimization enabled
✅ GROQ queries defined
✅ TypeScript types configured

Your Sanity integration is ready to use!
