"use client";

import { useState, useEffect } from "react";
// import { sanityClient } from "@/sanity/client";
// import { landingPageQuery, transformSanityData } from "@/sanity/queries";

// Fallback to JSON data type
interface SiteContentJSON {
  _documentation: {
    howToEdit: string;
    instructions: string[];
  };
  global: {
    siteName: string;
    substackUrl: string;
    twitterUrl: string;
    linkedinUrl: string;
  };
  hero: {
    badge: string;
    mainHeadline: string;
    mainHeadlineAccent: string;
    subHeadline: string;
    ctaText: string;
    secondaryCtaText: string;
  };
  stats: {
    subscribersCount: string;
    subscribersLabel: string;
    reportsCount: string;
    reportsLabel: string;
    prospectsCount: string;
    prospectsLabel: string;
  };
  features: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  contentPreview: {
    sectionTitle: string;
    sectionSubtitle: string;
    viewAllText: string;
    reports: Array<{
      title: string;
      date: string;
      category: string;
      tier: "PRO" | "FREE";
    }>;
  };
  pricing: {
    sectionTitle: string;
    sectionSubtitle: string;
    currency: string;
    tiers: Array<{
      name: string;
      price: string;
      interval: string;
      description: string;
      features: string[];
      ctaText: string;
      featured: boolean;
      badge?: string;
    }>;
  };
  newsletter: {
    headline: string;
    subheadline: string;
    ctaText: string;
    footnote: string;
  };
  footer: {
    copyright: string;
    poweredBy: string;
    poweredByLink: string;
    navLinks: Array<{
      label: string;
      href: string;
    }>;
  };
}

export interface SiteContent extends SiteContentJSON {}

const useSiteContent = () => {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fallback function to load from JSON
    const loadFromJSON = async () => {
      try {
        const response = await fetch("/site-content.json");
        if (!response.ok) {
          throw new Error("Failed to load site content from JSON");
        }
        const data = await response.json() as SiteContent;
        setContent(data);
        setError(
          "⚠️ Using fallback JSON content. " +
          "To use Sanity CMS: 1) Create a 'Landing Page' document in Sanity Studio, 2) Fill in the content, 3) Click 'Publish' (not just Save). " +
          "Check browser console (F12) for detailed error messages."
        );
      } catch (jsonErr) {
        console.error("Error loading JSON fallback:", jsonErr);
        setError(
          jsonErr instanceof Error
            ? jsonErr.message
            : "Failed to load content from both Sanity and JSON"
        );
      } finally {
        setLoading(false);
      }
    };

    loadFromJSON();
  }, []);

  return { content, loading, error };
};

export default useSiteContent;