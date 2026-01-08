"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import useSiteContent from "@/hooks/useSiteContent";

const Hero = () => {
  const { content, loading } = useSiteContent();

  if (loading || !content) {
    return (
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">
          Loading...
        </div>
      </section>
    );
  }

  const { hero, stats, global } = content;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[96px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              {hero.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] break-words">
            {hero.mainHeadline}
            <br />
            <span className="text-gradient">
              {hero.mainHeadlineAccent}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {hero.subHeadline}
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary px-8 h-12 text-base font-semibold"
            >
              <Link
                href={global.substackUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {hero.ctaText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border bg-secondary/50 hover:bg-secondary px-8 h-12 text-base font-semibold"
            >
              <Link href="#features">
                {hero.secondaryCtaText}
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary">
              {stats.subscribersCount}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              {stats.subscribersLabel}
            </div>
          </div>

          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary">
              {stats.reportsCount}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              {stats.reportsLabel}
            </div>
          </div>

          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary">
              {stats.prospectsCount}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              {stats.prospectsLabel}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
