import { profile, stats } from "../data/resume";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-dotgrid relative overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-purple/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-10%] left-[-5%] h-[320px] w-[320px] rounded-full bg-gold/10 blur-[110px]"
      />

      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-medium tracking-wide text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Available for hire · {profile.location}
          </span>

          <h1 className="text-balance mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-cream sm:text-5xl lg:text-[3.2rem]">
            I build <span className="text-purple">mobile apps</span>,
            <br />
            <span className="text-gold">web platforms</span> & AI-integrated
            experiences.
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base leading-7 text-muted sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Flutter", "Next.js / React", "Oracle APEX", "OpenAI API"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-xs text-muted"
                >
                  {tag}
                </span>
              ),
            )}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-purple px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-purple-dim"
            >
              Hire Me
            </a>
            <a
              href={profile.resumeFile}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              Download CV
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1v8m0 0L4 6m3 3l3-3M2 12h10"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-mono text-2xl font-semibold text-cream sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted-2">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <CodeCard />
      </div>
    </section>
  );
}

function CodeCard() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        aria-hidden
        className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-purple/25 via-transparent to-gold/15 blur-2xl"
      />
      <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/40">
        <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-3 font-mono text-xs text-muted-2">
            mobile_app.dart
          </span>
        </div>

        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7">
          <code>
            <span className="text-muted-2">// Senior Flutter Developer</span>
            {"\n"}
            <span className="text-purple">class</span>{" "}
            <span className="text-gold">MobileApp</span>{" "}
            <span className="text-muted">extends</span>{" "}
            <span className="text-teal">StatelessWidget</span> {"{"}
            {"\n  "}
            <span className="text-muted-2">
              // 150,000+ downloads · 15+ apps
            </span>
            {"\n  "}
            <span className="text-purple">final</span> stack = [{"\n    "}
            <span className="text-gold">&apos;Flutter&apos;</span>,{" "}
            <span className="text-gold">&apos;Swift&apos;</span>,{"\n    "}
            <span className="text-gold">&apos;Kotlin&apos;</span>,{" "}
            <span className="text-gold">&apos;Firebase&apos;</span>,{"\n  "}
            ];
            {"\n\n  "}
            <span className="text-teal">@override</span>
            {"\n  "}build(context) {"=>"} Scaffold(
            {"\n    "}body: <span className="text-teal">Reliable</span>(),
            {"\n  "}
            );{"\n"}
            {"}"}
          </code>
        </pre>

        <div className="flex items-center justify-between border-t border-line bg-surface-2 px-5 py-3">
          <span className="font-mono text-xs text-muted-2">
            main.dart — build succeeded
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-teal">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            0 errors
          </span>
        </div>
      </div>
    </div>
  );
}
