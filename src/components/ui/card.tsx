import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

export function Card({
  className,
  ...props
}: Readonly<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={cn(
        "surface-card rounded-2xl border p-6 backdrop-blur-md",
        className,
      )}
      {...props}
    />
  );
}
