"use client";

import { Lock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import useSiteContent from "@/hooks/useSiteContent";

const ContentPreview = () => {
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

  const { contentPreview, global } = content;

  return (
    <section className="py-24 relative">
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
            {contentPreview.sectionTitle}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {contentPreview.sectionSubtitle}
          </p>
        </motion.div>

        {/* Reports List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="dashboard-card overflow-hidden"
        >
          {contentPreview.reports.map((report, index) => (
            <motion.div
              key={report.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className={`flex items-center justify-between p-5 hover:bg-secondary/50 transition-colors ${
                index !== contentPreview.reports.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div
                  className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                    report.tier === "PRO" ? "bg-primary/20" : "bg-muted"
                  }`}
                >
                  {report.tier === "PRO" ? (
                    <Lock className="w-4 h-4 text-primary" />
                  ) : (
                    <FileIcon className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold truncate">{report.title}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-muted-foreground">{report.date}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{report.category}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0 ml-4">
                <span
                  className={`text-[10px] font-bold px-2.5 py-1 rounded ${
                    report.tier === "PRO"
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {report.tier}
                </span>
                <Button
                  asChild
                  size="sm"
                  variant={report.tier === "PRO" ? "default" : "outline"}
                  className={
                    report.tier === "PRO"
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "border-border"
                  }
                >
                  <Link href={global.substackUrl} target="_blank" rel="noopener noreferrer">
                    {report.tier === "PRO" ? "Unlock" : "Read"}
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-10"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary px-8 h-12 font-semibold"
          >
            <Link href={global.substackUrl} target="_blank" rel="noopener noreferrer">
              {contentPreview.viewAllText}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const FileIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

export default ContentPreview;
