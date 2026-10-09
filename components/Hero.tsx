import Link from "next/link";
import Photo from "@/components/Photo";
import { hero } from "@/data/content";

export default function Hero() {
  return (
    <section className="overflow-x-clip pb-20 pt-4 md:pb-28">
      <div className="grid gap-10 lg:grid-cols-[34%_1fr_9%] lg:gap-x-14">
        {/* 1. Main image, bleeds off the left edge */}
        <Photo
          src="/images/hero-main.jpg"
          alt=""
          priority
          className="order-2 aspect-[7/8] w-[75%] lg:order-1 lg:w-full"
        />

        {/* 2. Text */}
        <div className="order-1 flex flex-col justify-between gap-16 px-6 lg:order-2 lg:px-0">
          <p className="max-w-md text-[11px] uppercase tracking-[0.2em]">
            {hero.eyebrow}
          </p>
          <div>
            <h1 className="font-heading text-5xl font-light leading-[1.15] md:text-6xl">
              {hero.headingStart}{" "}
              <span className="font-script text-[1.5em] leading-none text-accent">
                {hero.headingAccent}
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-[15px]">{hero.subtext}</p>
            <Link
              href={hero.cta.href}
              className="mt-10 inline-block border-b border-ink pb-1 text-[11px] uppercase tracking-[0.2em] transition-colors hover:border-accent hover:text-accent"
            >
              {hero.cta.label}
            </Link>
          </div>
        </div>

        {/* 3. Peeking image, bleeds off the right edge */}
        <Photo
          src="/images/hero-peek.jpg"
          alt=""
          className="order-3 hidden h-[66%] self-end lg:block"
        />
      </div>
    </section>
  );
}