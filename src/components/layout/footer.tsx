import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="surface-nav border-t">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div className="space-y-4 md:col-span-2">
          <h3 className="text-xl font-semibold">CreateYourWeb</h3>
          <p className="text-soft max-w-lg text-sm">
            Digital agency profesional untuk membangun produk web dan mobile yang
            cepat, scalable, dan fokus pada pertumbuhan bisnis Anda.
          </p>
          <div className="text-soft flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Jakarta, Indonesia
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" /> +62 812 0000 0000
            </span>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <h4 className="text-main font-semibold">Navigasi</h4>
          <div className="text-soft flex flex-col gap-2">
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About</Link>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <h4 className="text-main font-semibold">Hubungi Kami</h4>
          <div className="text-soft flex flex-col gap-2">
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" /> hello@createyourweb.id
            </span>
            <span className="inline-flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> WhatsApp Fast Response
            </span>
          </div>
        </div>
      </div>
      <div className="text-faint border-t border-inherit py-4 text-center text-xs">
        © {new Date().getFullYear()} CreateYourWeb. All rights reserved.
      </div>
    </footer>
  );
}
