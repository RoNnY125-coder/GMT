import Link from "next/link";
import { specialties } from "@/data/content";

export default function Specialties() {
  return (
    <section id="specialties" className="bg-sand/40 px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        {/* Image placeholder: swapped for a real photo in Part 2 */}
        <div className="mx-auto aspect-[16/9] w-full max-w-3xl rounded-2xl bg-accent/30" />

        <h2 className="mx-auto mt-14 max-w-3xl text-center font-heading text-4xl font-light leading-[1.15] md:text-5xl lg:text-6xl">
          {specialties.heading}{" "}
          <span className="font-script text-[1.5em] text-accent">{specialties.headingAccent}</span>
          {specialties.headingEnd}
        </h2>

        <h3 className="mt-16 text-center font-heading text-2xl font-light md:text-3xl">
          {specialties.listTitleStart}{" "}
          <span className="font-script text-[1.5em] text-accent">{specialties.listTitleAccent}</span>
        </h3>

        <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-10">
          {specialties.items.map((s) => (
            <article key={s.title} className="flex flex-col">
              <h4 className="font-heading text-2xl font-normal leading-snug">
                {s.title}
              </h4>
              <p className="mt-4 flex-1">{s.text}</p>
              <Link
                href="#contact"
                className="mt-6 w-fit border-b border-ink pb-1 text-xs uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent"
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