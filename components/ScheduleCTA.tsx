import Link from "next/link";
import Photo from "@/components/Photo";
import { scheduleCTA } from "@/data/content";

export default function ScheduleCTA() {
  return (
    <section id="contact" className="relative overflow-x-clip py-20 md:py-28">
      <div className="grid gap-14 lg:grid-cols-[1fr_36%]">
        <div className="px-6 lg:pl-[18%] lg:pr-10">
          <p className="text-[11px] uppercase tracking-[0.2em]">
            {scheduleCTA.eyebrow}
          </p>
          <h2 className="mt-16 font-heading text-4xl font-light leading-[1.2] md:text-5xl lg:mt-24">
            {scheduleCTA.heading}{" "}
            <span className="font-script text-[1.5em] leading-none text-accent">
              {scheduleCTA.headingAccent}
            </span>
          </h2>
          <p className="mt-8 max-w-xl text-[15px]">{scheduleCTA.text}</p>
          <Link
            href={scheduleCTA.button.href}
            className="mt-10 inline-block border-b border-ink pb-1 text-[11px] uppercase tracking-[0.2em] transition-colors hover:border-accent hover:text-accent"
          >
            {scheduleCTA.button.label}
          </Link>
        </div>

        <Photo
          src="/images/cta-main.jpg"
          alt="Warm sunset over a quiet California beach"
          sizes="(min-width: 1024px) 36vw, 85vw"
          className="aspect-[4/5] w-[85%] justify-self-end lg:w-full"
        />
      </div>

<div className="absolute bottom-16 left-0 hidden h-44 w-56 lg:block">
  <Photo
    src="/images/cta-peek.jpg"
    alt="Dried grass on warm sand"
    sizes="224px"
    className="h-full w-full"
  />
</div>
    </section>
  );
}