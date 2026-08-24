import { profile } from "../data/resume";

const facts = [
  { label: "Role", value: profile.role },
  { label: "Based in", value: profile.location },
  { label: "Focus", value: "Mobile · Web · Oracle · AI" },
  { label: "Status", value: "Open to new roles" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-line py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionEyebrow index="02" label="About" />

        <div className="mt-10 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <h2 className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-cream sm:text-4xl">
              6+ years turning specs into apps and platforms people actually
              use.
            </h2>
            <p className="mt-6 text-base leading-7 text-muted">
              I&apos;m {profile.name}, a mobile and full-stack developer based
              in Karachi. I design, build, test and ship Android and iOS apps
              with Flutter, Dart, React Native, Swift, Kotlin and Java —
              and I build the web side too, with Next.js and React.js,
              low-code enterprise tools in Oracle APEX, and AI features
              wired directly into mobile apps.
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              Along the way I&apos;ve worked across fintech, e-commerce,
              logistics, IoT and enterprise tooling, always with an eye on
              performance, clean architecture, and a codebase the next
              engineer can actually work with.
            </p>
          </div>

          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {facts.map((f) => (
              <div
                key={f.label}
                className="rounded-2xl border border-line bg-surface p-6"
              >
                <dt className="text-xs uppercase tracking-wider text-muted-2">
                  {f.label}
                </dt>
                <dd className="mt-2 font-display text-lg font-medium text-cream">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export function SectionEyebrow({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-sm text-purple">{index}</span>
      <span className="h-px flex-1 max-w-10 bg-line" />
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-2">
        {label}
      </span>
    </div>
  );
}
