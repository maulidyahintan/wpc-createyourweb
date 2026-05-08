import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60",
  {
    variants: {
      variant: {
        default:
          "bg-linear-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-[0_10px_30px_-10px_rgba(56,189,248,0.5)] hover:scale-[1.02]",
        secondary:
          "surface-card-strong border backdrop-blur hover:bg-slate-100/80 dark:hover:bg-white/12",
        ghost: "text-soft hover:bg-slate-900/5 hover:text-slate-950 dark:hover:bg-white/5 dark:hover:text-white",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  ...props
}: Readonly<ButtonProps>) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { buttonVariants };
