import { profile, stats } from "../data/resume";
import {
  SiFlutter,
  SiAndroid,
  SiApple,
  SiAppstore,
  SiGoogleplay,
  SiNextdotjs,
  SiNodedotjs,
  SiAppium,
  SiGit,
  SiFirebase,
  SiTestin,
  SiAib,
} from "react-icons/si";
import { FaDatabase, FaBrain } from "react-icons/fa6";

const techStack = [
  { Icon: SiFlutter, label: "Flutter", color: "#02569B" },
  { Icon: SiAndroid, label: "Android", color: "#3DDC84" },
  { Icon: SiApple, label: "iOS", color: "#F5F5F7" },
  { Icon: SiAppstore, label: "App Store Connect", color: "#0D96F6" },
  { Icon: SiGoogleplay, label: "Play Store Console", color: "#4285F4" },
  { Icon: SiFirebase, label: "Firebase", color: "#4285F4" },
  { Icon: FaDatabase, label: "Oracle", color: "#F80000" },
  { Icon: SiNextdotjs, label: "Next.js", color: "#F5F5F7" },
  { Icon: SiNodedotjs, label: "Node.js", color: "#5FA04E" },
  { Icon: SiAib, label: " AI-Assisted Data Analysis", color: "#5FA04E" },
  { Icon: FaBrain, label: "AI Modules", color: "#10A37F" },
  { Icon: SiAppium, label: "Testing", color: "#EE376D" },
  { Icon: SiGit, label: "Git", color: "#F03C2E" },
];

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

      {/* Giant ghost background wordmark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-16 select-none text-center font-display text-[22vw] font-bold leading-none text-cream/[0.04] lg:text-[11rem]"
      >
        Software Engineer
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        {/* Phone mockup column */}
        <div className="relative order-2 mx-auto w-full max-w-sm min-w-0 lg:order-1">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[320px]">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-purple/30 via-transparent to-gold/20 blur-2xl"
            />

            {/* Tilted phone frame */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[74%] -rotate-6 rounded-[2rem] border-4 border-surface-2 bg-ink shadow-2xl shadow-black/50 transition-transform duration-500 hover:rotate-0">
                <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-surface-2" />

                <div className="space-y-3 px-4 py-5">
                  <div className="flex items-center justify-between">
                    <div className="h-2 w-14 rounded-full bg-cream/20" />
                    <div className="h-6 w-6 rounded-full bg-purple/40" />
                  </div>

                  <div className="rounded-xl bg-gradient-to-br from-purple to-purple-dim p-3">
                    <div className="h-2 w-16 rounded-full bg-white/40" />
                    <div className="mt-2 h-2 w-10 rounded-full bg-white/25" />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {["bg-teal/30", "bg-gold/30", "bg-purple/30"].map(
                      (c, i) => (
                        <div
                          key={i}
                          className={`aspect-square rounded-lg ${c}`}
                        />
                      ),
                    )}
                  </div>

                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 rounded-lg bg-surface p-2"
                      >
                        <div className="h-6 w-6 shrink-0 rounded-md bg-surface-2" />
                        <div className="h-2 w-full rounded-full bg-surface-2" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-around border-t border-surface-2 px-4 py-3">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`h-2 w-2 rounded-full ${
                        i === 0 ? "bg-purple" : "bg-surface-2"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <span className="absolute -left-4 top-[-8px] rotate-[-6deg] rounded-full bg-ink px-4 py-2 text-xs font-medium text-cream shadow-lg shadow-black/30 border border-line">
              Flutter Dev
            </span>
            <span className="absolute -right-6 top-24 rotate-[5deg] rounded-full bg-ink px-4 py-2 text-xs font-medium text-cream shadow-lg shadow-black/30 border border-line">
              Mobile Architect
            </span>
            <span className="absolute -right-4 bottom-2 rotate-[-4deg] rounded-full bg-ink px-4 py-2 text-xs font-medium text-cream shadow-lg shadow-black/30 border border-line">
              6+ yrs
            </span>
          </div>

          {/* Tech stack chips — wraps naturally, no overlap risk at any width */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {techStack.map(({ Icon, label, color }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-muted"
              >
                <Icon className="h-3.5 w-3.5 shrink-0" style={{ color }} aria-hidden />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Text column */}
        <div className="order-1 min-w-0 lg:order-2">
          <p className="flex items-center gap-2 text-sm text-muted">
            <span>Hi 👋, I&apos;m</span>
            <span
              className="text-2xl leading-none text-purple"
              style={{ fontFamily: "var(--font-script, cursive)" }}
            >
              {profile.name}
            </span>
          </p>

          <h1 className="text-balance mt-4 break-words font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-cream sm:text-5xl lg:text-6xl">
            {profile.role.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-purple">
              {profile.role.split(" ").slice(-1)}
            </span>
            .
          </h1>

          <p className="mt-6 max-w-xl break-words text-base leading-7 text-muted sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              Hire Me!
            </a>
            <a
              href={profile.resumeFile}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5 hover:border-purple"
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

          {/* Stat row with dividers */}
          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`min-w-0 ${i > 0 ? "md:border-l md:border-line md:pl-6" : ""}`}
              >
                <dt className="font-mono text-2xl font-bold text-cream sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 break-words text-xs leading-snug text-muted-2">
                  {s.label}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}