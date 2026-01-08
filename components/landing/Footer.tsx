"use client";

import { Twitter, Linkedin } from "lucide-react";
import useSiteContent from "@/hooks/useSiteContent";

export default function Footer() {
  const { content, loading } = useSiteContent();

  if (loading || !content) {
    return (
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      </footer>
    );
  }

  const { footer, global } = content;

  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">
                {global.siteName.charAt(0)}
              </span>
            </div>
            <span className="font-bold tracking-tight">{global.siteName}</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {footer.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href === "substack" ? global.substackUrl : link.href}
                target={link.href === "substack" ? "_blank" : undefined}
                rel={link.href === "substack" ? "noopener noreferrer" : undefined}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href={global.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={global.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {footer.copyright}
          </p>
          <p className="text-xs text-muted-foreground">
            {footer.poweredBy}{" "}
            <a
              href="https://substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {footer.poweredByLink}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}