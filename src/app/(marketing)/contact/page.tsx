import type { Metadata } from "next";
import Link from "next/link";
import { CalendarClock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata(
  "Contact",
  "Hubungi CreateYourWeb untuk konsultasi website, dashboard, SaaS, mobile app, dan layanan digital agency lainnya.",
  "/contact",
);

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <SectionHeading
        badge="Contact"
        title="Diskusikan Proyek Anda"
        description="Ceritakan kebutuhan bisnis Anda. Tim kami akan membantu menyusun solusi, timeline, dan estimasi biaya yang tepat."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <form className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm">
                <span>Nama</span>
                <input
                  type="text"
                  className="h-11 rounded-xl border border-white/15 bg-white/[0.04] px-3 text-sm outline-none ring-cyan-400/60 transition focus:ring-2"
                  placeholder="Nama lengkap"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span>Email</span>
                <input
                  type="email"
                  className="h-11 rounded-xl border border-white/15 bg-white/[0.04] px-3 text-sm outline-none ring-cyan-400/60 transition focus:ring-2"
                  placeholder="nama@perusahaan.com"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm">
              <span>Jenis Layanan</span>
              <select className="h-11 rounded-xl border border-white/15 bg-slate-950 px-3 text-sm outline-none ring-cyan-400/60 transition focus:ring-2">
                <option>Landing Page</option>
                <option>Company Profile</option>
                <option>Dashboard Admin</option>
                <option>Custom Web App</option>
                <option>Mobile App</option>
                <option>UI/UX Design</option>
                <option>API Integration</option>
                <option>Maintenance</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm">
              <span>Detail Kebutuhan</span>
              <textarea
                rows={6}
                className="rounded-xl border border-white/15 bg-white/[0.04] p-3 text-sm outline-none ring-cyan-400/60 transition focus:ring-2"
                placeholder="Jelaskan target, fitur utama, dan timeline yang diinginkan"
              />
            </label>

            <Button type="submit" size="lg">
              Kirim Permintaan Konsultasi
            </Button>
          </form>
        </Card>

        <div className="grid gap-4">
          <Card>
            <h3 className="text-lg font-semibold">Kontak Cepat</h3>
            <div className="mt-4 grid gap-3 text-sm text-slate-300">
              <p className="inline-flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> WhatsApp: +62 812 0000 0000
              </p>
              <p className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" /> hello@createyourweb.id
              </p>
              <p className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" /> +62 21 5555 000
              </p>
              <p className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Jakarta Selatan, Indonesia
              </p>
            </div>
          </Card>

          <Card>
            <h3 className="inline-flex items-center gap-2 text-lg font-semibold">
              <CalendarClock className="h-5 w-5 text-cyan-200" /> Calendly
              Placeholder
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              Integrasi jadwal meeting otomatis (Calendly) dapat diaktifkan pada
              tahap deployment production.
            </p>
            <Link
              href="https://calendly.com"
              target="_blank"
              className="mt-4 inline-flex"
            >
              <Button variant="secondary">Buka Calendly</Button>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
}
