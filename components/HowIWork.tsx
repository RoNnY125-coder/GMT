import Link from "next/link";
import Photo from "@/components/Photo";
import { howIWork } from "@/data/content";

export default function HowIWork() {
  return (
    <section id="how-i-work" className="px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto grid max-w-[1300px] items-center gap-12 md:grid-cols-2 md:gap-20">
        <Photo
          src="/images/how-i-work.jpg"
          alt="Journal, tea and a plant on a calm table"
          sizes="(min-width: 768px) 45vw, 90vw"
          className="aspect-[4/5] rounded-2xl"
        />

        <div>
          <p className="text-[11px] uppercase tracking-[0.2em]">
            {howIWork.eyebrow}
          </p>
          <h2 className="mt-5 font-heading text-4xl font-light leading-[1.15] md:text-5xl">
            {howIWork.heading}{" "}
            <span className="block font-script text-[1.5em] leading-none text-accent">
              {howIWork.headingAccent}
            </span>
          </h2>
          <p className="mt-8 font-heading text-xl italic md:text-2xl">
            {howIWork.lead}
          </p>
          <div className="mt-6 space-y-5 text-[15px]">
            {howIWork.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Link
            href={howIWork.link.href}
            className="mt-8 inline-block border-b border-ink pb-1 text-[11px] uppercase tracking-[0.2em] transition-colors hover:border-accent hover:text-accent"
          >
            {howIWork.link.label}
          </Link>
        </div>
      </div>
    </section>
  );
}