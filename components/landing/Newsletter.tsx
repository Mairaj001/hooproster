"use client";

import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import useSiteContent from "@/hooks/useSiteContent";

const Newsletter = () => {
  const { content, loading } = useSiteContent();

  if (loading || !content) {
    return (
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      </section>
    );
  }

  const { newsletter, global } = content;

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="dashboard-card p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 break-words">
              {newsletter.headline}
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              {newsletter.subheadline}
            </p>

            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary px-8 h-12 font-semibold"
            >
              <Link href={global.substackUrl} target="_blank" rel="noopener noreferrer">
                {newsletter.ctaText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <p className="text-xs text-muted-foreground mt-4">
              {newsletter.footnote}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
