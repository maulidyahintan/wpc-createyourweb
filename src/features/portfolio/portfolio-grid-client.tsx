"use client";

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
                ? "border-cyan-300/70 bg-cyan-300/15 text-cyan-100"
                : "border-white/15 bg-white/[0.03] text-slate-300 hover:text-white"
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
              <div className="mb-4 h-40 rounded-xl bg-gradient-to-br from-cyan-500/25 via-blue-500/15 to-slate-900 transition-transform duration-300 group-hover:scale-[1.02]" />
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <Badge className="text-[10px]">{item.category}</Badge>
              </div>
              <p className="mt-3 text-sm text-slate-300">{item.summary}</p>
              <p className="mt-3 text-xs text-slate-400">Industri: {item.industry}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-xs text-slate-200"
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
