import Link from "next/link";
import { scheduleCTA } from "@/data/content";

export default function ScheduleCTA() {
  return (
    <section id="contact" className="px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto grid max-w-[1300px] items-center gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-accent">
            {scheduleCTA.eyebrow}
          </p>
          <h2 className="mt-5 font-heading text-4xl font-light leading-[1.15] md:text-5xl lg:text-6xl">
            {scheduleCTA.heading}{" "}
            <span className="font-script text-[1.5em] text-accent">
              {scheduleCTA.headingAccent}
            </span>
          </h2>
          <p className="mt-8 max-w-xl text-lg">{scheduleCTA.text}</p>
          <Link
            href={scheduleCTA.button.href}
            className="mt-10 inline-block rounded-full border border-ink px-8 py-4 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-ink hover:text-cream"
          >
            {scheduleCTA.button.label}
          </Link>
        </div>

        {/* Image placeholder: swapped for a real photo in Part 2 */}
        <div className="mx-auto aspect-[4/5] w-full max-w-md rounded-t-full bg-sand" />
      </div>
    </section>
  );
}