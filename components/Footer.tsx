import Link from "next/link";
import { brand, footer } from "@/data/content";

const headingClass =
  "text-xs uppercase tracking-[0.25em] text-accent";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-16 text-cream md:px-12 md:py-20">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand + tagline */}
          <div>
            <p className="font-heading text-4xl font-light">{brand.name}</p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.35em] text-accent">
              {brand.tagline}
            </p>
            <p className="mt-6 max-w-sm text-sm text-sand">{footer.tagline}</p>
          </div>

          {/* Navigate */}
          <div>
            <p className={headingClass}>Navigate</p>
            <ul className="mt-5 space-y-3 text-sm">
              {footer.navigate.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="transition-colors hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className={headingClass}>Contact</p>
            <address className="mt-5 space-y-1 text-sm not-italic">
              {footer.contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="pt-3">
                <a href={`mailto:${footer.contact.email}`} className="transition-colors hover:text-accent">
                  {footer.contact.email}
                </a>
              </p>
              <p>{footer.contact.phone}</p>
            </address>
            <p className="mt-5 text-xs italic text-sand">{footer.serving}</p>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-14 flex flex-col gap-4 border-t border-sand/25 pt-8 text-xs text-sand md:flex-row md:items-center md:justify-between">
          <p>© 2026 {brand.name}, PsyD. All rights reserved.</p>
          <ul className="flex gap-6">
            {footer.legal.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}