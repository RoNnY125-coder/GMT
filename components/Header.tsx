"use client";

import { useState } from "react";
import Link from "next/link";
import { nav, brand } from "@/data/content";

const linkClass =
  "text-xs uppercase tracking-[0.18em] leading-none text-ink hover:text-accent transition-colors";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 bg-cream px-6 py-6 md:px-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-center justify-between">
          {/* Wordmark */}
          <Link href="/" className="leading-none">
            <span className="block font-heading text-3xl font-light md:text-4xl">
              {brand.name}
            </span>
            <span className="mt-1 block text-[9px] uppercase tracking-[0.35em] text-accent">
              {brand.tagline}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            <Link href={nav.links[0].href} className={linkClass}>
              {nav.links[0].label}
            </Link>

            {nav.dropdowns.map((d) => (
              <div key={d.label} className="group relative flex items-center">
                <button className={linkClass}>{d.label}</button>
                <div className="invisible absolute left-1/2 top-full w-60 -translate-x-1/2 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <ul className="rounded-xl bg-cream p-3 shadow-md">
                    {d.items.map((i) => (
                      <li key={i.label}>
                        <Link
                          href={i.href}
                          className="block rounded-lg px-3 py-2 text-xs uppercase tracking-[0.15em] hover:bg-sand/60"
                        >
                          {i.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <Link href={nav.links[1].href} className={linkClass}>
              {nav.links[1].label}
            </Link>

            <Link
              href={nav.contact.href}
              className="rounded-full border border-ink px-6 py-3 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-ink hover:text-cream"
            >
              {nav.contact.label}
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className={`h-px w-6 bg-ink transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-6 bg-ink transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="mt-6 flex flex-col gap-5 border-t border-sand pt-6 lg:hidden">
            <Link href={nav.links[0].href} className={linkClass} onClick={() => setOpen(false)}>
              {nav.links[0].label}
            </Link>
            {nav.dropdowns.map((d) => (
              <div key={d.label}>
                <p className="text-xs uppercase tracking-[0.18em] text-muted">{d.label}</p>
                <ul className="mt-3 flex flex-col gap-3 pl-4">
                  {d.items.map((i) => (
                    <li key={i.label}>
                      <Link href={i.href} className={linkClass} onClick={() => setOpen(false)}>
                        {i.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link href={nav.links[1].href} className={linkClass} onClick={() => setOpen(false)}>
              {nav.links[1].label}
            </Link>
            <Link
              href={nav.contact.href}
              onClick={() => setOpen(false)}
              className="w-fit rounded-full border border-ink px-6 py-3 text-xs uppercase tracking-[0.18em]"
            >
              {nav.contact.label}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}