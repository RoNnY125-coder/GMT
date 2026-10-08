import Link from "next/link";
import { hero } from "@/data/content";

export default function Hero() {
  return (
    <section className="px-6 pb-20 pt-16 md:px-12 md:pb-28 md:pt-24">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Text */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-accent">
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 font-heading text-5xl font-light leading-[1.1] md:text-6xl lg:text-7xl">
            {hero.headingStart}{" "}
            <em className="text-accent">{hero.headingAccent}</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg">{hero.subtext}</p>
          <Link
            href={hero.cta.href}
            className="mt-10 inline-block rounded-full border border-ink px-8 py-4 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-ink hover:text-cream"
          >
            {hero.cta.label}
          </Link>
        </div>

        {/* Images (placeholders until Part 2) */}
        <div className="relative mx-auto grid w-full max-w-xl grid-cols-2 gap-4 md:gap-6">
          <div className="aspect-[3/4] rounded-t-full bg-sand" />
          <div className="mt-12 aspect-[3/4] rounded-2xl bg-accent/40" />
        </div>
      </div>
    </section>
  );
}