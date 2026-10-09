import Photo from "@/components/Photo";
import { expertise } from "@/data/content";

export default function Expertise() {
  return (
    <section>
      <div className="relative flex min-h-[260px] items-end px-6 py-10 md:min-h-[320px] md:px-16">
  <div className="absolute inset-0">
    <Photo
      src="/images/band.jpg"
      alt="Wide ocean horizon at sunset"
      sizes="100vw"
      className="h-full w-full"
    />
  </div>
  <div className="absolute inset-0 bg-ink/40" />
  <p className="relative max-w-3xl font-heading text-3xl font-light italic text-cream md:text-5xl">
    {expertise.headingStart} {expertise.headingAccent}
  </p>
</div>

      <div className="grid gap-10 px-6 py-20 md:px-16 md:py-28 lg:grid-cols-[1fr_2fr]">
        <h2 className="font-heading text-4xl font-light md:text-5xl">
          {expertise.listTitleStart}{" "}
          <span className="font-script text-[1.5em] leading-none text-accent">
            {expertise.listTitleAccent}
          </span>
        </h2>

        <ul className="grid gap-x-12 md:grid-cols-2">
          {expertise.items.map((item) => (
            <li
              key={item}
              className="border-b border-ink/15 py-5 text-[11px] uppercase tracking-[0.2em]"
            >
              {item}
            </li>
          ))}
          <li className="py-5 text-[11px] uppercase tracking-[0.2em]">
            {expertise.closing}
          </li>
        </ul>
      </div>
    </section>
  );
}