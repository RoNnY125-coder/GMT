import Link from "next/link";
import { aboutMaya } from "@/data/content";
import Image from "next/image";

export default function AboutMaya() {
  return (
    <section id="about" className="px-6 py-20 md:px-16 md:py-28">
      <div className="mx-auto grid max-w-[1300px] items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em]">
            {aboutMaya.eyebrow}
          </p>
          <h2 className="mt-5 font-heading text-4xl font-light leading-[1.15] md:text-5xl">
            {aboutMaya.heading}{" "}
            <span className="block font-script text-[1.5em] leading-none text-accent">
              {aboutMaya.headingAccent}
            </span>
          </h2>
          <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-muted">
            {aboutMaya.credential}
          </p>
          <div className="mt-8 max-w-xl space-y-5 text-[15px]">
            {aboutMaya.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Link
            href={aboutMaya.link.href}
            className="mt-10 inline-block border-b border-ink pb-1 text-[11px] uppercase tracking-[0.2em] transition-colors hover:border-accent hover:text-accent"
          >
            {aboutMaya.link.label}
          </Link>
        </div>

        {/* Maya's portrait */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-full">
          <Image
            src="/images/maya.png"
            alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}