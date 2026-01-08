import { groq } from 'next-sanity'

// Query to fetch the landing page content
export const landingPageQuery = groq`
  *[_type == "landingPage"][0] {
    _id,
    _type,
    global {
      siteName,
      substackUrl,
      twitterUrl,
      linkedinUrl
    },
    hero {
      badge,
      mainHeadline,
      mainHeadlineAccent,
      subHeadline,
      ctaText,
      secondaryCtaText
    },
    stats {
      subscribersCount,
      subscribersLabel,
      reportsCount,
      reportsLabel,
      prospectsCount,
      prospectsLabel
    },
    features {
      sectionTitle,
      sectionSubtitle,
      items[] {
        icon,
        title,
        description
      }
    },
    contentPreview {
      sectionTitle,
      sectionSubtitle,
      viewAllText,
      reports[] {
        title,
        date,
        category,
        tier
      }
    },
    pricing {
      sectionTitle,
      sectionSubtitle,
      currency,
      tiers[] {
        name,
        price,
        interval,
        description,
        features,
        ctaText,
        featured,
        badge
      }
    },
    newsletter {
      headline,
      subheadline,
      ctaText,
      footnote
    },
    footer {
      copyright,
      poweredBy,
      poweredByLink,
      navLinks[] {
        label,
        href
      }
    }
  }
`

// Type for the landing page data from Sanity
export interface LandingPageData {
  _id: string
  _type: string
  global: {
    siteName: string
    substackUrl: string
    twitterUrl: string
    linkedinUrl: string
  }
  hero: {
    badge: string
    mainHeadline: string
    mainHeadlineAccent: string
    subHeadline: string
    ctaText: string
    secondaryCtaText: string
  }
  stats: {
    subscribersCount: string
    subscribersLabel: string
    reportsCount: string
    reportsLabel: string
    prospectsCount: string
    prospectsLabel: string
  }
  features: {
    sectionTitle: string
    sectionSubtitle: string
    items: Array<{
      icon: string
      title: string
      description: string
    }>
  }
  contentPreview: {
    sectionTitle: string
    sectionSubtitle: string
    viewAllText: string
    reports: Array<{
      title: string
      date: string
      category: string
      tier: "PRO" | "FREE"
    }>
  }
  pricing: {
    sectionTitle: string
    sectionSubtitle: string
    currency: string
    tiers: Array<{
      name: string
      price: string
      interval: string
      description: string
      features: string[]
      ctaText: string
      featured: boolean
      badge?: string
    }>
  }
  newsletter: {
    headline: string
    subheadline: string
    ctaText: string
    footnote: string
  }
  footer: {
    copyright: string
    poweredBy: string
    poweredByLink: string
    navLinks: Array<{
      label: string
      href: string
    }>
  }
}
