import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

export function Card({
  className,
  ...props
}: Readonly<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md",
        className,
      )}
      {...props}
    />
  );
}
