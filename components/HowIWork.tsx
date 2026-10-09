import Link from "next/link";
import { howIWork } from "@/data/content";

export default function HowIWork() {
  return (
    <section id="how-i-work" className="px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto grid max-w-[1300px] items-center gap-12 md:grid-cols-2 md:gap-20">
        {/* Image placeholder: swapped for a real photo in Part 2 */}
        <div className="aspect-[4/5] rounded-2xl bg-sand" />

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-accent">
            {howIWork.eyebrow}
          </p>
          <h2 className="mt-5 font-heading text-4xl font-light leading-[1.15] md:text-5xl lg:text-6xl">
            {howIWork.heading}{" "}
            <span className="font-script text-[1.5em] text-accent">
              {howIWork.headingAccent}
            </span>
          </h2>
          <p className="mt-8 font-heading text-xl italic md:text-2xl">
            {howIWork.lead}
          </p>
          <div className="mt-6 space-y-5 text-lg">
            {howIWork.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Link
            href={howIWork.link.href}
            className="mt-8 inline-block border-b border-ink pb-1 text-xs uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent"
          >
            {howIWork.link.label}
          </Link>
        </div>
      </div>
    </section>
  );
}