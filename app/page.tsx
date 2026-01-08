import type { Metadata } from "next";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import CompetitiveEdge from "@/components/landing/CompetitiveEdge";
import ContentPreview from "@/components/landing/ContentPreview";
import Pricing from "@/components/landing/Pricing";
import Newsletter from "@/components/landing/Newsletter";
import Footer from "@/components/landing/Footer";
import MobileCTA from "@/components/landing/MobileCTA";

export const metadata: Metadata = {
  title: "Hooproster - Elite Basketball Scouting Delivered to Your Inbox",
  description:
    "Professional basketball scouting reports, player evaluations, and data-driven insights delivered directly to your inbox via Substack.",
  keywords: [
    "basketball scouting",
    "player reports",
    "NBA draft",
    "basketball analytics",
    "player evaluation",
    "prospect rankings",
  ],
  alternates: {
    canonical: "https://hooproster.substack.com",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <CompetitiveEdge />
        <ContentPreview />
        <Pricing />
        <Newsletter />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}