import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { addOnPricing, pricingPlans } from "@/lib/constants/site";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata(
  "Pricing",
  "Estimasi pricing jasa digital agency untuk landing page, company profile, dashboard, mobile app, serta add-on maintenance dan SEO.",
  "/pricing",
);

export default function PricingPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <SectionHeading
        badge="Pricing Indonesia"
        title="Harga Transparan Sesuai Scope dan Kompleksitas"
        description="Estimasi berikut dapat disesuaikan berdasarkan kebutuhan fitur, timeline, dan integrasi sistem existing."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <Reveal key={plan.name} delay={index * 0.03}>
            <Card
              className={plan.highlighted ? "border-cyan-300/40 bg-cyan-300/10" : ""}
            >
              <h2 className="text-lg font-semibold">{plan.name}</h2>
              <p className="mt-2 text-xl font-bold text-cyan-200">{plan.range}</p>
              <p className="mt-3 text-sm text-slate-300">{plan.description}</p>
              <ul className="mt-4 space-y-1 text-sm text-slate-200">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="mt-12">
        <SectionHeading
          badge="Add-on"
          title="Layanan Tambahan"
          description="Paket support agar sistem tetap stabil, aman, dan relevan dengan target growth bisnis Anda."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {addOnPricing.map((item) => (
            <Card key={item.name}>
              <p className="text-sm text-slate-300">{item.name}</p>
              <p className="mt-2 text-lg font-semibold text-cyan-200">{item.price}</p>
            </Card>
          ))}
        </div>
      </div>

      <Card className="mt-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h3 className="text-2xl font-semibold">Butuh estimasi spesifik project Anda?</h3>
          <p className="mt-2 text-sm text-slate-300">
            Diskusikan requirement dan target timeline untuk mendapatkan proposal resmi.
          </p>
        </div>
        <Link href="/contact">
          <Button>Request Proposal</Button>
        </Link>
      </Card>
    </section>
  );
}
