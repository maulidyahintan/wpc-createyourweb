import type { Metadata } from "next";

import { SectionHeading } from "@/components/shared/section-heading";
import { PortfolioGridClient } from "@/features/portfolio/portfolio-grid-client";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata(
  "Portfolio",
  "Kumpulan portfolio project landing page, dashboard, SaaS, company profile, dan mobile app dari berbagai industri.",
  "/portfolio",
);

export default function PortfolioPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <SectionHeading
        badge="Portfolio"
        title="Case Study dari Berbagai Industri"
        description="Preview project kami dengan pendekatan modern UI, performa tinggi, dan fokus pada hasil bisnis."
      />
      <PortfolioGridClient />
    </section>
  );
}
