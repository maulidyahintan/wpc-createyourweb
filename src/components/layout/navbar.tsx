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
  const currentTheme = theme ?? "dark";

  return (
    <header className="surface-nav sticky top-0 z-50 border-b backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-cyan-400 to-blue-500 text-slate-950">
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
                  ? "bg-slate-900/8 text-main dark:bg-white/10"
                  : "text-soft hover:text-main",
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
              setTheme(currentTheme === "dark" ? "light" : "dark");
            }}
          >
            {currentTheme === "dark" ? (
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
            className="border-soft text-main inline-flex h-9 w-9 items-center justify-center rounded-lg border md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="surface-nav border-t md:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-4">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm",
                  pathname === item.href
                    ? "bg-slate-900/8 text-main dark:bg-white/10"
                    : "text-soft",
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
                setTheme(currentTheme === "dark" ? "light" : "dark");
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
