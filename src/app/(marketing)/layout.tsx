import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function MarketingLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="bg-app relative min-h-screen overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-18rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/18 blur-[140px] dark:bg-cyan-500/25" />
        <div className="absolute right-[-10rem] top-[20rem] h-[24rem] w-[24rem] rounded-full bg-blue-500/12 blur-[120px] dark:bg-blue-500/20" />
      </div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
