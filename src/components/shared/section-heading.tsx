import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  badge,
  title,
  description,
  centered,
}: Readonly<SectionHeadingProps>) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {badge ? <Badge className="mb-4">{badge}</Badge> : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-pretty text-slate-300 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
