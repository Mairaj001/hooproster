"use client";

import { Search, FileText, Zap, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import useSiteContent from "@/hooks/useSiteContent";

// Icon mapping for dynamic icon rendering from JSON
const iconMap: Record<string, LucideIcon> = {
  Search,
  FileText,
  Zap,
};

export default function CompetitiveEdge() {
  const { content, loading } = useSiteContent();

  if (loading || !content) {
    return (
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      </section>
    );
  }

  const { features } = content;

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 break-words">
            {features.sectionTitle}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {features.sectionSubtitle}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.items.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Search;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group dashboard-card p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 break-words">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}