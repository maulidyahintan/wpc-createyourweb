import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { services } from "@/lib/constants/site";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata(
  "Services",
  "Layanan lengkap digital agency: landing page, company profile, dashboard, SaaS, mobile app, UI/UX, API integration, dan maintenance.",
  "/services",
);

export default function ServicesPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <SectionHeading
        badge="Services"
        title="Layanan End-to-End untuk Product & Business Growth"
        description="Setiap layanan dilengkapi tujuan bisnis, stack teknologi, estimasi waktu, dan harga awal sebagai acuan perencanaan proyek."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {services.map((service, index) => (
          <Reveal key={service.slug} delay={index * 0.04}>
            <Card className="h-full">
              <service.icon className="h-6 w-6 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">{service.title}</h2>
              <p className="text-soft mt-2 text-sm">{service.description}</p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-faint text-xs uppercase tracking-[0.14em]">
                    Benefit
                  </p>
                  <ul className="text-main mt-2 space-y-1 text-sm">
                    {service.benefits.map((benefit) => (
                      <li key={benefit}>• {benefit}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-faint text-xs uppercase tracking-[0.14em]">
                    Teknologi
                  </p>
                  <ul className="text-main mt-2 space-y-1 text-sm">
                    {service.technologies.map((tech) => (
                      <li key={tech}>• {tech}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 grid gap-2 text-sm">
                <p>
                  <span className="text-faint">Estimasi waktu:</span> {service.duration}
                </p>
                <p>
                  <span className="text-faint">Harga mulai:</span> {service.pricing}
                </p>
              </div>

              <Link href="/contact" className="mt-6 inline-flex">
                <Button>Konsultasi Layanan Ini</Button>
              </Link>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
