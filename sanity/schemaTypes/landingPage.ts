import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    // Global Settings
    defineField({
      name: 'global',
      title: 'Global Settings',
      type: 'object',
      fields: [
        {
          name: 'siteName',
          title: 'Site Name',
          type: 'string',
          description: 'The name of your site (e.g., HOOPROSTER)',
          validation: Rule => Rule.required(),
        },
        {
          name: 'substackUrl',
          title: 'Substack URL',
          type: 'url',
          description: 'Your Substack profile URL',
          validation: Rule => Rule.required(),
        },
        {
          name: 'twitterUrl',
          title: 'Twitter URL',
          type: 'url',
          description: 'Your Twitter profile URL',
        },
        {
          name: 'linkedinUrl',
          title: 'LinkedIn URL',
          type: 'url',
          description: 'Your LinkedIn profile URL',
        },
      ],
    }),

    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'badge',
          title: 'Badge Text',
          type: 'string',
          description: 'Small badge above headline (e.g., "Now on Substack")',
        },
        {
          name: 'mainHeadline',
          title: 'Main Headline',
          type: 'string',
          description: 'First part of headline (e.g., "Elite Basketball Scouting.")',
          validation: Rule => Rule.required(),
        },
        {
          name: 'mainHeadlineAccent',
          title: 'Main Headline Accent',
          type: 'string',
          description: 'Second part of headline with accent (e.g., "Delivered to Your Inbox.")',
          validation: Rule => Rule.required(),
        },
        {
          name: 'subHeadline',
          title: 'Sub Headline',
          type: 'text',
          description: 'Description text below the main headline',
          validation: Rule => Rule.required(),
        },
        {
          name: 'ctaText',
          title: 'Primary CTA Text',
          type: 'string',
          description: 'Primary call-to-action button text',
          validation: Rule => Rule.required(),
        },
        {
          name: 'secondaryCtaText',
          title: 'Secondary CTA Text',
          type: 'string',
          description: 'Secondary call-to-action button text',
        },
      ],
    }),

    // Stats Section
    defineField({
      name: 'stats',
      title: 'Stats Section',
      type: 'object',
      fields: [
        {
          name: 'subscribersCount',
          title: 'Subscribers Count',
          type: 'string',
          description: 'Number of subscribers (e.g., "500+")',
        },
        {
          name: 'subscribersLabel',
          title: 'Subscribers Label',
          type: 'string',
          description: 'Label for subscribers (e.g., "Subscribers")',
        },
        {
          name: 'reportsCount',
          title: 'Reports Count',
          type: 'string',
          description: 'Number of reports (e.g., "200+")',
        },
        {
          name: 'reportsLabel',
          title: 'Reports Label',
          type: 'string',
          description: 'Label for reports (e.g., "Reports")',
        },
        {
          name: 'prospectsCount',
          title: 'Prospects Count',
          type: 'string',
          description: 'Number of prospects (e.g., "50+")',
        },
        {
          name: 'prospectsLabel',
          title: 'Prospects Label',
          type: 'string',
          description: 'Label for prospects (e.g., "Prospects")',
        },
      ],
    }),

    // Features Section
    defineField({
      name: 'features',
      title: 'Features Section',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          description: 'Main title for features section',
          validation: Rule => Rule.required(),
        },
        {
          name: 'sectionSubtitle',
          title: 'Section Subtitle',
          type: 'text',
          description: 'Subtitle/description for features section',
        },
        {
          name: 'items',
          title: 'Feature Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'icon',
                  title: 'Icon Name',
                  type: 'string',
                  description: 'Lucide icon name (e.g., "Search", "FileText", "Zap")',
                  validation: Rule => Rule.required(),
                },
                {
                  name: 'title',
                  title: 'Feature Title',
                  type: 'string',
                  validation: Rule => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Feature Description',
                  type: 'text',
                  validation: Rule => Rule.required(),
                },
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'icon',
                },
              },
            },
          ],
        },
      ],
    }),

    // Content Preview Section
    defineField({
      name: 'contentPreview',
      title: 'Content Preview Section',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          description: 'Main title for content preview section',
          validation: Rule => Rule.required(),
        },
        {
          name: 'sectionSubtitle',
          title: 'Section Subtitle',
          type: 'text',
          description: 'Subtitle/description for content preview section',
        },
        {
          name: 'viewAllText',
          title: 'View All Button Text',
          type: 'string',
          description: 'Text for "view all" button',
        },
        {
          name: 'reports',
          title: 'Sample Reports',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Report Title',
                  type: 'string',
                  validation: Rule => Rule.required(),
                },
                {
                  name: 'date',
                  title: 'Publication Date',
                  type: 'string',
                  description: 'Date in format "Jan 3, 2025"',
                  validation: Rule => Rule.required(),
                },
                {
                  name: 'category',
                  title: 'Category',
                  type: 'string',
                  description: 'Report category (e.g., "Draft Coverage", "Scouting Report")',
                  validation: Rule => Rule.required(),
                },
                {
                  name: 'tier',
                  title: 'Access Tier',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Free', value: 'FREE' },
                      { title: 'Pro', value: 'PRO' },
                    ],
                  },
                  validation: Rule => Rule.required(),
                },
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'category',
                  tier: 'tier',
                },
                prepare({ title, subtitle, tier }) {
                  return {
                    title,
                    subtitle: `${subtitle} • ${tier}`,
                  }
                },
              },
            },
          ],
        },
      ],
    }),

    // Pricing Section
    defineField({
      name: 'pricing',
      title: 'Pricing Section',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          description: 'Main title for pricing section',
          validation: Rule => Rule.required(),
        },
        {
          name: 'sectionSubtitle',
          title: 'Section Subtitle',
          type: 'text',
          description: 'Subtitle/description for pricing section',
        },
        {
          name: 'currency',
          title: 'Currency Symbol',
          type: 'string',
          description: 'Currency symbol (e.g., "$")',
          validation: Rule => Rule.required().max(3),
        },
        {
          name: 'tiers',
          title: 'Pricing Tiers',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Tier Name',
                  type: 'string',
                  description: 'e.g., "Free", "Pro"',
                  validation: Rule => Rule.required(),
                },
                {
                  name: 'price',
                  title: 'Price',
                  type: 'string',
                  description: 'Price amount (e.g., "0", "15")',
                  validation: Rule => Rule.required(),
                },
                {
                  name: 'interval',
                  title: 'Billing Interval',
                  type: 'string',
                  description: 'e.g., "/month", "" (empty for free)',
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'string',
                  description: 'Short description of the tier',
                  validation: Rule => Rule.required(),
                },
                {
                  name: 'features',
                  title: 'Features List',
                  type: 'array',
                  of: [{ type: 'string' }],
                  description: 'List of features included in this tier',
                  validation: Rule => Rule.required().min(1),
                },
                {
                  name: 'ctaText',
                  title: 'CTA Button Text',
                  type: 'string',
                  description: 'Call-to-action button text',
                  validation: Rule => Rule.required(),
                },
                {
                  name: 'featured',
                  title: 'Featured Tier',
                  type: 'boolean',
                  description: 'Mark as featured/popular tier',
                  initialValue: false,
                },
                {
                  name: 'badge',
                  title: 'Badge Text',
                  type: 'string',
                  description: 'Optional badge text (e.g., "MOST POPULAR")',
                },
              ],
              preview: {
                select: {
                  title: 'name',
                  price: 'price',
                  interval: 'interval',
                  featured: 'featured',
                },
                prepare({ title, price, interval, featured }) {
                  return {
                    title: `${title} ${featured ? '⭐' : ''}`,
                    subtitle: `$${price}${interval || ''}`,
                  }
                },
              },
            },
          ],
        },
      ],
    }),

    // Newsletter Section
    defineField({
      name: 'newsletter',
      title: 'Newsletter Section',
      type: 'object',
      fields: [
        {
          name: 'headline',
          title: 'Headline',
          type: 'string',
          description: 'Main headline for newsletter CTA',
          validation: Rule => Rule.required(),
        },
        {
          name: 'subheadline',
          title: 'Subheadline',
          type: 'text',
          description: 'Description text below headline',
          validation: Rule => Rule.required(),
        },
        {
          name: 'ctaText',
          title: 'CTA Button Text',
          type: 'string',
          description: 'Call-to-action button text',
          validation: Rule => Rule.required(),
        },
        {
          name: 'footnote',
          title: 'Footnote',
          type: 'string',
          description: 'Small text below CTA button',
        },
      ],
    }),

    // Footer Section
    defineField({
      name: 'footer',
      title: 'Footer Section',
      type: 'object',
      fields: [
        {
          name: 'copyright',
          title: 'Copyright Text',
          type: 'string',
          description: 'Copyright notice (e.g., "Hooproster. All rights reserved.")',
          validation: Rule => Rule.required(),
        },
        {
          name: 'poweredBy',
          title: 'Powered By Text',
          type: 'string',
          description: 'Text before powered by link (e.g., "Powered by")',
        },
        {
          name: 'poweredByLink',
          title: 'Powered By Link Text',
          type: 'string',
          description: 'Link text (e.g., "Substack")',
        },
        {
          name: 'navLinks',
          title: 'Navigation Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'label',
                  title: 'Link Label',
                  type: 'string',
                  validation: Rule => Rule.required(),
                },
                {
                  name: 'href',
                  title: 'Link URL',
                  type: 'string',
                  description: 'URL or anchor link (e.g., "#features")',
                  validation: Rule => Rule.required(),
                },
              ],
              preview: {
                select: {
                  title: 'label',
                  subtitle: 'href',
                },
              },
            },
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'global.siteName',
    },
    prepare({ title }) {
      return {
        title: title || 'Landing Page',
        subtitle: 'Main website content',
      }
    },
  },
})
