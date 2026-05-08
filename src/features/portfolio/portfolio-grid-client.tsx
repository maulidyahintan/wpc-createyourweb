"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { Reveal } from "@/components/animations/reveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { portfolioItems } from "@/lib/constants/site";

const categories = ["All", ...new Set(portfolioItems.map((item) => item.category))];

export function PortfolioGridClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              activeCategory === category
                ? "border-cyan-300/70 bg-cyan-300/15 text-cyan-700 dark:text-cyan-100"
                : "surface-card text-soft hover:text-main"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <Card className="group h-full overflow-hidden">
              <div className="relative mb-4 h-48 overflow-hidden rounded-xl border border-white/10">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/10 to-transparent" />
              </div>
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <Badge className="text-[10px]">{item.category}</Badge>
              </div>
              <p className="text-soft mt-3 text-sm">{item.summary}</p>
              <p className="text-faint mt-3 text-xs">Industri: {item.industry}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="surface-card rounded-md border px-2 py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </>
  );
}
