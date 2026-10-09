import Image from "next/image";
import { office } from "@/data/content";

export default function OurOffice() {
  return (
    <section id="office" className="bg-sand/40 px-6 py-20 md:px-16 md:py-28">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em]">
              {office.eyebrow}
            </p>
            <h2 className="mt-5 font-heading text-4xl font-light leading-[1.15] md:text-5xl">
              {office.heading}{" "}
              <span className="block font-script text-[1.5em] leading-none text-accent">
                {office.headingAccent}
              </span>
            </h2>
            <div className="mt-8 max-w-xl space-y-5 text-[15px]">
              {office.text.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={office.images[0].src}
                alt={office.images[0].alt}
                fill
                sizes="(min-width: 1024px) 25vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative mt-10 aspect-[3/4] overflow-hidden">
              <Image
                src={office.images[1].src}
                alt={office.images[1].alt}
                fill
                sizes="(min-width: 1024px) 25vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <dl className="mt-16 grid gap-8 border-t border-ink/15 pt-10 md:grid-cols-3">
          {office.details.map((d) => (
            <div key={d.label}>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-accent">
                {d.label}
              </dt>
              <dd className="mt-3 text-[15px]">{d.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}