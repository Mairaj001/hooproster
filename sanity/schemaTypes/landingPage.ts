/**
 * Sanity Schema Definition for Landing Page Content
 * 
 * IMPORTANT: This is a reference schema file. The actual schema must be defined
 * in your Sanity Studio. Use this file as a guide when creating your schema in Studio.
 * 
 * To set up your Sanity Studio:
 * 1. Run: npx create-sanity@latest --template clean
 * 2. Navigate to schemas/ directory
 * 3. Create landingPage.ts with content similar to this file
 * 4. Import it in schema.ts
 */

export const landingPageSchema = {
  name: "landingPage",
  title: "Landing Page",
  type: "document",
  // This should be a singleton document - only one instance allowed
  // In Sanity Studio, use: __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  
  fields: [
    // Logo / Brand
    {
      name: "logo",
      title: "Logo / Brand",
      type: "object",
      fields: [
        {
          name: "brandName",
          title: "Brand Name",
          type: "string",
          description: "The name of your brand/website (e.g., 'HOOPROSTER')",
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },

    // Hero Section
    {
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        {
          name: "badge",
          title: "Badge Text",
          type: "string",
          description: "Small badge text above headline (e.g., 'Now on Substack')",
        },
        {
          name: "title",
          title: "Main Headline",
          type: "string",
          description: "First part of the main headline",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "subtitle",
          title: "Headline Accent",
          type: "string",
          description: "Second part of the headline (accented)",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "description",
          title: "Subheadline",
          type: "text",
          description: "Description text below the headline",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "primaryCTA",
          title: "Primary CTA Text",
          type: "string",
          description: "Text for the primary call-to-action button",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "secondaryCTA",
          title: "Secondary CTA Text",
          type: "string",
          description: "Text for the secondary call-to-action button",
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },

    // Stats Section
    {
      name: "stats",
      title: "Stats Section",
      type: "array",
      description: "Statistics to display (e.g., subscribers, reports, prospects)",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
              description: "Label for the stat (e.g., 'Subscribers')",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "value",
              title: "Value",
              type: "string",
              description: "Statistic value (e.g., '500+')",
              validation: (Rule: any) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "value",
            },
          },
        },
      ],
      validation: (Rule: any) => Rule.required().min(1),
    },

    // Features Section
    {
      name: "features",
      title: "Features / Competitive Edge",
      type: "object",
      fields: [
        {
          name: "sectionTitle",
          title: "Section Title",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "sectionSubtitle",
          title: "Section Subtitle",
          type: "text",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "items",
          title: "Feature Items",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "icon",
                  title: "Icon Name",
                  type: "string",
                  description: "Icon name from lucide-react (e.g., 'Search', 'FileText', 'Zap')",
                  options: {
                    list: [
                      { title: "Search", value: "Search" },
                      { title: "FileText", value: "FileText" },
                      { title: "Zap", value: "Zap" },
                    ],
                  },
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: "description",
                  title: "Description",
                  type: "text",
                  validation: (Rule: any) => Rule.required(),
                },
              ],
              preview: {
                select: {
                  title: "title",
                  subtitle: "description",
                },
              },
            },
          ],
          validation: (Rule: any) => Rule.required().min(1),
        },
      ],
    },

    // Content Preview Section
    {
      name: "contentPreview",
      title: "Content Preview / Sample Reports",
      type: "object",
      fields: [
        {
          name: "sectionTitle",
          title: "Section Title",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "sectionSubtitle",
          title: "Section Subtitle",
          type: "text",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "viewAllText",
          title: "View All Button Text",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "reports",
          title: "Reports",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: "date",
                  title: "Date",
                  type: "string",
                  description: "Date string (e.g., 'Jan 3, 2025')",
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: "category",
                  title: "Category",
                  type: "string",
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: "tier",
                  title: "Tier",
                  type: "string",
                  options: {
                    list: [
                      { title: "Free", value: "FREE" },
                      { title: "Pro", value: "PRO" },
                    ],
                  },
                  validation: (Rule: any) => Rule.required(),
                },
              ],
              preview: {
                select: {
                  title: "title",
                  subtitle: "category",
                },
              },
            },
          ],
          validation: (Rule: any) => Rule.required().min(1),
        },
      ],
    },

    // Pricing Section
    {
      name: "pricing",
      title: "Pricing Section",
      type: "object",
      fields: [
        {
          name: "sectionTitle",
          title: "Section Title",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "sectionSubtitle",
          title: "Section Subtitle",
          type: "text",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "currency",
          title: "Currency Symbol",
          type: "string",
          description: "Currency symbol (e.g., '$')",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "proPrice",
          title: "Pro Price",
          type: "string",
          description: "Price for Pro tier (e.g., '15')",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "interval",
          title: "Billing Interval",
          type: "string",
          description: "Billing interval (e.g., '/month')",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "benefits",
          title: "Pro Benefits",
          type: "array",
          description: "List of benefits/features for Pro tier",
          of: [{ type: "string" }],
          validation: (Rule: any) => Rule.required().min(1),
        },
      ],
    },

    // Newsletter Section
    {
      name: "newsletter",
      title: "Newsletter Section",
      type: "object",
      fields: [
        {
          name: "headline",
          title: "Headline",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "subheadline",
          title: "Subheadline",
          type: "text",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "ctaText",
          title: "CTA Text",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "footnote",
          title: "Footnote",
          type: "string",
        },
      ],
    },

    // Global Settings
    {
      name: "global",
      title: "Global Settings",
      type: "object",
      fields: [
        {
          name: "substackUrl",
          title: "Substack URL",
          type: "url",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "twitterUrl",
          title: "Twitter URL",
          type: "url",
        },
        {
          name: "linkedinUrl",
          title: "LinkedIn URL",
          type: "url",
        },
      ],
    },

    // Footer
    {
      name: "footer",
      title: "Footer",
      type: "object",
      fields: [
        {
          name: "copyright",
          title: "Copyright Text",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "poweredBy",
          title: "Powered By Text",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "poweredByLink",
          title: "Powered By Link Text",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "navLinks",
          title: "Navigation Links",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "label",
                  title: "Label",
                  type: "string",
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: "href",
                  title: "Href",
                  type: "string",
                  description: "Anchor link (e.g., '#features') or 'substack'",
                  validation: (Rule: any) => Rule.required(),
                },
              ],
            },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "logo.brandName",
      subtitle: "hero.title",
    },
  },
};

