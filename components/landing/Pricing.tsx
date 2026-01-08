"use client";

import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import useSiteContent from "@/hooks/useSiteContent";

const Pricing = () => {
  const { content, loading } = useSiteContent();

  if (loading || !content) {
    return (
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      </section>
    );
  }

  const { pricing, global } = content;

  return (
    <section id="pricing" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 break-words">
            {pricing.sectionTitle}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {pricing.sectionSubtitle}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {pricing.tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`dashboard-card p-6 md:p-8 relative ${
                tier.featured ? "border-primary/50" : ""
              }`}
            >
              {tier.featured && tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold mb-2">{tier.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">
                    {pricing.currency}{tier.price}
                  </span>
                  {tier.interval && (
                    <span className="text-muted-foreground">{tier.interval}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full h-12 font-semibold ${
                  tier.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 glow-primary"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <Link href={global.substackUrl} target="_blank" rel="noopener noreferrer">
                  {tier.ctaText}
                  {tier.featured && <ArrowRight className="ml-2 w-4 h-4" />}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
