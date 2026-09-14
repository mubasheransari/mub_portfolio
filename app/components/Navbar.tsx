"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "../data/resume";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight text-cream"
        >
    
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-cream"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <SocialIcon label="GitHub" href={profile.github}>
            <path d="M8 0a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.38v-1.35c-2.22.48-2.69-1.07-2.69-1.07-.36-.92-.89-1.16-.89-1.16-.72-.5.06-.49.06-.49.8.06 1.23.83 1.23.83.71 1.23 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.14-.08-.2-.36-1.02.08-2.13 0 0 .67-.22 2.2.82a7.6 7.6 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.55.82 1.27.82 2.14 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 008 0z" />
          </SocialIcon>
          <SocialIcon label="LinkedIn" href={profile.linkedin}>
            <path d="M3.6 1.3a1.6 1.6 0 11-3.2 0 1.6 1.6 0 013.2 0zM.3 5h3v9.7h-3V5zM6 5h2.9v1.3h.04c.4-.76 1.4-1.56 2.86-1.56 3.06 0 3.6 2 3.6 4.65v5.3h-3v-4.7c0-1.12-.02-2.56-1.56-2.56-1.56 0-1.8 1.22-1.8 2.48v4.78H6V5z" />
          </SocialIcon>
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 lg:ml-3 lg:inline-block"
        >
          Hire Me!
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-cream lg:hidden"
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M1 1L17 17M17 1L1 17"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path
                d="M0 1H18M0 7H18M0 13H18"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink-soft px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm text-muted hover:bg-surface hover:text-cream"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-cream px-4 py-3 text-center text-sm font-semibold text-ink"
              >
                Hire Me!
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function SocialIcon({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-purple hover:text-cream"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        {children}
      </svg>
    </a>
  );
}
