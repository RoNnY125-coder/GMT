import Link from "next/link";
import { specialties } from "@/data/content";

export default function Specialties() {
  return (
    <section id="specialties" className="bg-white px-6 py-20 md:px-16 md:py-28">
      <div className="grid gap-14 lg:grid-cols-[38%_1fr] lg:gap-20">
        {/* Left: heading + image placeholder */}
        <div>
          <h2 className="font-heading text-4xl font-light leading-[1.2] md:text-5xl">
            {specialties.heading}{" "}
            <span className="font-script text-[1.5em] leading-none text-accent">
              {specialties.headingAccent}
            </span>{" "}
            {specialties.headingEnd}
          </h2>
          <div className="mt-10 aspect-[4/5] w-full bg-sand" />
        </div>

        {/* Right: 2-column service grid */}
        <div className="grid gap-x-16 gap-y-16 md:grid-cols-2">
          {specialties.items.map((s) => (
            <article key={s.title} className="flex flex-col">
              <h3 className="font-heading text-3xl font-light leading-snug">
                {s.title}
              </h3>
              <p className="mt-6 flex-1 text-[15px]">{s.text}</p>
              <Link
                href="#contact"
                className="mt-8 w-fit border-b border-ink pb-1 text-[11px] uppercase tracking-[0.2em] transition-colors hover:border-accent hover:text-accent"
              >
                {specialties.linkLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}