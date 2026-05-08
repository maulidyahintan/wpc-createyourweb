"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({
  items,
}: Readonly<{ items: FAQItem[] }>) {
  return (
    <Accordion.Root type="single" collapsible className="space-y-3">
      {items.map((item, index) => (
        <Accordion.Item
          key={item.question}
          value={`item-${index}`}
          className="rounded-2xl border border-white/10 bg-white/[0.03] px-5"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between py-4 text-left text-sm font-semibold text-white md:text-base">
              {item.question}
              <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="pb-4 text-sm text-slate-300">
            {item.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
