"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MoonStar, SunMedium, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

import { navLinks } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 text-slate-950">
            C
          </span>
          <span>CreateYourWeb</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm transition-colors",
                pathname === item.href
                  ? "bg-white/10 text-white"
                  : "text-slate-300 hover:text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            className="hidden md:inline-flex"
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            {theme === "dark" ? (
              <SunMedium className="h-4 w-4" />
            ) : (
              <MoonStar className="h-4 w-4" />
            )}
          </Button>

          <Link href="/contact" className="hidden md:inline-flex">
            <Button>Konsultasi Gratis</Button>
          </Link>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-200 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 md:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-4">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm",
                  pathname === item.href
                    ? "bg-white/10 text-white"
                    : "text-slate-300",
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="secondary"
              size="sm"
              className="mt-2"
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
              }}
            >
              Toggle Theme
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
