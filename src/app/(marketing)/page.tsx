import Link from "next/link";
import type { Metadata } from "next";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import {
  companyStats,
  faqs,
  pricingPlans,
  services,
  testimonials,
  trustedCompanies,
  whyChooseUs,
  workflowSteps,
} from "@/lib/constants/site";
import { createPageMetadata, siteConfig } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata(
  "Digital Agency Profesional untuk Website & App",
  "Jasa pembuatan landing page, company profile, dashboard, SaaS, mobile app, UI/UX, API integration, dan maintenance support.",
  "/",
);

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CreateYourWeb",
  description: siteConfig.description,
  url: siteConfig.url,
  areaServed: "Indonesia",
  serviceType: [
    "Landing Page Development",
    "Company Profile Website",
    "Dashboard System",
    "SaaS Platform Development",
    "Mobile App Development",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 pb-16 pt-16 md:grid-cols-2 md:px-8 md:pt-24">
        <Reveal>
          <Badge>Digital Product Agency Indonesia</Badge>
          <h1
            className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-6xl"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Bangun Website & App Berkualitas Enterprise yang Siap Scale
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Kami membantu bisnis meluncurkan produk digital yang cepat, modern,
            SEO-friendly, dan conversion oriented dari tahap ide sampai go-live.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact">
              <Button size="lg">Mulai Konsultasi Gratis</Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="secondary">
                Lihat Portfolio
              </Button>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <Card className="grid gap-5 p-7">
            <p className="text-sm uppercase tracking-[0.16em] text-cyan-200">
              Delivery Snapshot
            </p>
            <div className="grid grid-cols-2 gap-3">
              {companyStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                >
                  <p className="text-2xl font-semibold text-white">{item.value}</p>
                  <p className="text-xs text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-300">
              Focus kami adalah hasil bisnis: lead naik, proses lebih efisien,
              dan sistem yang bisa berkembang seiring pertumbuhan perusahaan.
            </p>
          </Card>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 md:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-6 md:px-8">
          <p className="mb-4 text-xs uppercase tracking-[0.16em] text-slate-400">
            Trusted by Growing Companies
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
            {trustedCompanies.map((name) => (
              <div
                key={name}
                className="rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-center text-sm text-slate-200"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8">
        <SectionHeading
          badge="Core Services"
          title="Layanan Utama untuk Pertumbuhan Digital Bisnis"
          description="Semua layanan kami dirancang modular, sehingga Anda bisa mulai dari kebutuhan paling penting lalu scale secara bertahap."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.slice(0, 8).map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.05}>
              <Card className="h-full">
                <service.icon className="h-6 w-6 text-cyan-300" />
                <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{service.description}</p>
                <p className="mt-4 text-xs font-medium text-cyan-200">
                  {service.pricing}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8">
        <SectionHeading
          badge="Why Us"
          title="Kenapa Brand Memilih CreateYourWeb"
          description="Kami menggabungkan product thinking, engineering excellence, dan bisnis mindset dalam setiap proyek."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {whyChooseUs.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.07}>
              <Card>
                <item.icon className="h-6 w-6 text-cyan-300" />
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8">
        <SectionHeading
          badge="Workflow"
          title="Workflow Proyek yang Transparan"
          description="Setiap fase memiliki output jelas agar tim Anda selalu tahu progress dan prioritas berikutnya."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {workflowSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.05}>
              <Card className="h-full">
                <p className="text-xs font-semibold tracking-[0.2em] text-cyan-200">
                  {step.step}
                </p>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{step.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8">
        <SectionHeading
          badge="Client Story"
          title="Apa Kata Client Kami"
          centered
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <Card className="h-full">
                <p className="text-sm text-slate-200">“{item.quote}”</p>
                <div className="mt-6">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-xs text-slate-400">{item.role}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8">
        <SectionHeading
          badge="Pricing Preview"
          title="Pilihan Paket Sesuai Kebutuhan"
          description="Harga transparan dengan fleksibilitas scope untuk startup hingga enterprise."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {pricingPlans.slice(0, 3).map((plan) => (
            <Card key={plan.name} className="h-full">
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-2 text-xl font-bold text-cyan-200">{plan.range}</p>
              <p className="mt-3 text-sm text-slate-300">{plan.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 md:grid-cols-[1.2fr_1fr] md:px-8">
        <Reveal>
          <SectionHeading
            badge="FAQ"
            title="Pertanyaan yang Sering Ditanyakan"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <FaqAccordion items={faqs} />
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 md:px-8">
        <Card className="flex flex-col items-start justify-between gap-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Siap Upgrade Website atau Bangun Produk Baru?
            </h2>
            <p className="mt-2 text-slate-200">
              Ceritakan goal bisnis Anda, kami bantu rancang solusi paling tepat.
            </p>
          </div>
          <Link href="/contact">
            <Button size="lg">Jadwalkan Konsultasi</Button>
          </Link>
        </Card>
      </section>
    </>
  );
}
