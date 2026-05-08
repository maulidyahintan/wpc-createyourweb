import type { Metadata } from "next";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata(
  "About",
  "Tentang CreateYourWeb: visi, misi, tim engineer, stack teknologi, dan workflow development profesional.",
  "/about",
);

const technologies = [
  "Next.js",
  "TypeScript",
  "React Native",
  "Node.js",
  "PostgreSQL",
  "TailwindCSS",
  "Framer Motion",
  "Cloud Infrastructure",
];

const team = [
  { role: "Product Engineer", count: "8" },
  { role: "UI/UX Designer", count: "4" },
  { role: "QA & Analyst", count: "3" },
  { role: "Project Manager", count: "3" },
];

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <SectionHeading
        badge="About Us"
        title="Engineering Partner untuk Bisnis yang Sedang Tumbuh"
        description="CreateYourWeb adalah digital agency yang memadukan strategi bisnis, desain, dan software engineering untuk membangun produk digital berdampak nyata."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Card className="h-full">
            <h2 className="text-2xl font-semibold">Visi</h2>
            <p className="text-soft mt-3 text-sm">
              Menjadi partner teknologi terpercaya untuk perusahaan Indonesia
              dalam membangun produk digital kelas global.
            </p>
          </Card>
        </Reveal>

        <Reveal delay={0.08}>
          <Card className="h-full">
            <h2 className="text-2xl font-semibold">Misi</h2>
            <ul className="text-soft mt-3 space-y-2 text-sm">
              <li>• Membangun solusi yang cepat diadopsi user.</li>
              <li>• Menjaga kualitas code dan desain berstandar enterprise.</li>
              <li>• Memberikan komunikasi proyek yang transparan.</li>
            </ul>
          </Card>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {team.map((member, index) => (
          <Reveal key={member.role} delay={index * 0.05}>
            <Card>
              <p className="text-3xl font-bold text-cyan-200">{member.count}</p>
              <p className="text-soft mt-2 text-sm">{member.role}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="mt-12">
        <SectionHeading
          badge="Technology"
          title="Teknologi yang Kami Gunakan"
          description="Kami memilih stack modern dan proven agar produk Anda cepat diluncurkan sekaligus mudah dikembangkan jangka panjang."
        />
        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {technologies.map((tech) => (
            <Card key={tech} className="py-4">
              <p className="text-main text-sm font-medium">{tech}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {[
          "Discovery & Product Blueprint",
          "Design Sprint & Prototype",
          "Agile Development & QA",
        ].map((step, index) => (
          <Reveal key={step} delay={index * 0.07}>
            <Card>
              <p className="text-faint text-xs uppercase tracking-[0.14em]">
                Workflow {index + 1}
              </p>
              <h3 className="mt-3 text-lg font-semibold">{step}</h3>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
