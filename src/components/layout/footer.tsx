import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div className="space-y-4 md:col-span-2">
          <h3 className="text-xl font-semibold">CreateYourWeb</h3>
          <p className="max-w-lg text-sm text-slate-300">
            Digital agency profesional untuk membangun produk web dan mobile yang
            cepat, scalable, dan fokus pada pertumbuhan bisnis Anda.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Jakarta, Indonesia
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" /> +62 812 0000 0000
            </span>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <h4 className="font-semibold text-white">Navigasi</h4>
          <div className="flex flex-col gap-2 text-slate-300">
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About</Link>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <h4 className="font-semibold text-white">Hubungi Kami</h4>
          <div className="flex flex-col gap-2 text-slate-300">
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" /> hello@createyourweb.id
            </span>
            <span className="inline-flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> WhatsApp Fast Response
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} CreateYourWeb. All rights reserved.
      </div>
    </footer>
  );
}
