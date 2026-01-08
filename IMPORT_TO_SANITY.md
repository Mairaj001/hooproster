# Import Your Content to Sanity Studio

Follow these steps to import your existing JSON content into Sanity CMS.

## ✅ What I Fixed

1. **Added null safety checks** to Header component - prevents crashes while loading
2. **Updated Sanity schema** to match your JSON structure exactly
3. **All field names match** - `global.siteName`, `hero.mainHeadline`, etc.

## 📝 Step 1: Start Your Development Server

```bash
npm run dev
```

Your site should now work at http://localhost:3000 (loading from JSON fallback)

## 🎨 Step 2: Access Sanity Studio

Navigate to: **http://localhost:3000/studio**

Log in with your Sanity account.

## ➕ Step 3: Create Landing Page Document

1. Click **"Create"** button (or **+** icon)
2. Select **"Landing Page"**
3. You'll see all the sections ready to fill in!

## 📋 Step 4: Fill In Content (Copy from JSON)

Use your [site-content.json](public/site-content.json) file to copy the content. Here's the mapping:

### Global Settings
```
Site Name: "HOOPROSTER"
Substack URL: "https://hooproster.substack.com"
Twitter URL: "https://twitter.com"
LinkedIn URL: "https://linkedin.com"
```

### Hero Section
```
Badge Text: "Now on Substack"
Main Headline: "Elite Basketball Scouting."
Main Headline Accent: "Delivered to Your Inbox."
Sub Headline: "The professional data and evaluation tools used by scouts, now available for everyone via Substack."
Primary CTA Text: "Get Started"
Secondary CTA Text: "Learn More"
```

### Stats Section
```
Subscribers Count: "500+"
Subscribers Label: "Subscribers"
Reports Count: "200+"
Reports Label: "Reports"
Prospects Count: "50+"
Prospects Label: "Prospects"
```

### Features Section
```
Section Title: "The Competitive Edge"
Section Subtitle: "Why scouts, analysts, and basketball enthusiasts choose Hooproster over traditional scouting services."
```

**Feature Items** (Click "+ Add item" for each):

**Item 1:**
- Icon Name: `Search`
- Feature Title: "Deep Talent Discovery"
- Feature Description: "Uncover hidden gems before they hit the mainstream radar. Our scouting network spans from high school to international leagues."

**Item 2:**
- Icon Name: `FileText`
- Feature Title: "Detailed Player Reports"
- Feature Description: "Comprehensive breakdowns with advanced metrics, video analysis, and projection models that go beyond surface-level stats."

**Item 3:**
- Icon Name: `Zap`
- Feature Title: "Instant Inbox Delivery"
- Feature Description: "Get actionable scouting intel delivered directly to you the moment reports drop. No login required, just open and read."

### Content Preview Section
```
Section Title: "Sample Reports"
Section Subtitle: "A preview of the scouting intel available to Pro subscribers."
View All Button Text: "View All Reports"
```

**Sample Reports** (Click "+ Add item" for each):

**Report 1:**
- Title: "NBA Draft 2026: Top 10 Prospects Deep Dive"
- Date: "Jan 3, 2025"
- Category: "Draft Coverage"
- Tier: PRO

**Report 2:**
- Title: "G-League Ignite: Rising Stars to Watch"
- Date: "Dec 28, 2024"
- Category: "Scouting Report"
- Tier: PRO

**Report 3:**
- Title: "International Prospects: European Tour Report"
- Date: "Dec 22, 2024"
- Category: "International"
- Tier: PRO

**Report 4:**
- Title: "Weekly Roundup: Stock Risers & Fallers"
- Date: "Dec 20, 2024"
- Category: "Analysis"
- Tier: FREE

**Report 5:**
- Title: "Cooper Flagg: The #1 Pick Breakdown"
- Date: "Dec 15, 2024"
- Category: "Player Spotlight"
- Tier: PRO

### Pricing Section
```
Section Title: "Simple, Transparent Pricing"
Section Subtitle: "Start free and upgrade when you're ready for full access."
Currency Symbol: "$"
```

**Pricing Tiers** (Click "+ Add item" for each):

**Tier 1 - Free:**
- Tier Name: "Free"
- Price: "0"
- Billing Interval: (leave empty)
- Description: "Get started with weekly insights"
- Features:
  - "Weekly roundup newsletter"
  - "Public player previews"
  - "Community access"
- CTA Button Text: "Subscribe Free"
- Featured Tier: NO (unchecked)
- Badge Text: (leave empty)

**Tier 2 - Pro:**
- Tier Name: "Pro"
- Price: "15"
- Billing Interval: "/month"
- Description: "Full access to all scouting content"
- Features:
  - "Everything in Free"
  - "Full player database"
  - "Video breakdowns"
  - "Exclusive scouting reports"
  - "Direct scout access"
  - "Early draft rankings"
- CTA Button Text: "Get Pro Access"
- Featured Tier: YES (checked)
- Badge Text: "MOST POPULAR"

### Newsletter Section
```
Headline: "Join 500+ Scouts & Analysts"
Subheadline: "Get professional scouting reports delivered to your inbox. Start with our free weekly roundup."
CTA Button Text: "Subscribe on Substack"
Footnote: "Free to subscribe. Upgrade anytime."
```

### Footer Section
```
Copyright Text: "Hooproster. All rights reserved."
Powered By Text: "Powered by"
Powered By Link Text: "Substack"
```

**Navigation Links** (Click "+ Add item" for each):
- Link 1: Label "Features", URL "#features"
- Link 2: Label "Pricing", URL "#pricing"
- Link 3: Label "Subscribe", URL "#substack"

## 🚀 Step 5: Publish Your Content

**CRITICAL**: Click the **"Publish"** button (NOT just "Save draft")

- Only published content appears on your website
- Draft content is not visible to visitors

## ✨ Step 6: Verify It Works

1. Go back to http://localhost:3000
2. Refresh the page
3. Your content should now load from Sanity! 🎉
4. The warning message should disappear

## 🔍 Troubleshooting

### Still seeing "Using fallback JSON content"?
- Make sure you clicked **"Publish"** (not just Save)
- Check Sanity Studio shows "Published" status
- Refresh your website with `Ctrl+F5` (hard refresh)

### Content not updating?
- Clear browser cache
- Make sure you published (not just saved draft)
- Check browser console (F12) for errors

### Schema errors in Sanity Studio?
- Make sure you restarted your dev server after schema changes
- Run: `npm run dev` (restart if already running)

## 📊 Quick Import Script (Optional)

If you want to automate the import, I can create a script for you. But for now, manual entry ensures everything is correct!

## ✅ Next Steps After Import

Once your content is in Sanity:

1. **Edit Easily**: Change content directly in Sanity Studio
2. **Live Updates**: Publish changes to update your site instantly
3. **Version Control**: Sanity tracks all content versions
4. **Collaboration**: Invite team members to edit content

## 🎯 Benefits of Sanity CMS

- ✅ Edit content without touching code
- ✅ Real-time previews
- ✅ Version history
- ✅ Multi-user collaboration
- ✅ Content validation
- ✅ Structured data

---

**Need Help?**
- Check [SANITY_SETUP.md](SANITY_SETUP.md) for configuration details
- Check [KNOWN_ISSUES.md](KNOWN_ISSUES.md) for common warnings
- Review browser console (F12) for error messages

Your Sanity CMS is now properly configured and ready to use! 🚀
