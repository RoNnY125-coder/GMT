import { expertise } from "@/data/content";

export default function Expertise() {
  return (
    <section>
      {/* Photo band with statement (placeholder: real photo in Part 2) */}
      <div className="flex min-h-[260px] items-end bg-ink/70 px-6 py-10 md:min-h-[320px] md:px-16">
        <p className="max-w-3xl font-heading text-3xl font-light italic text-cream md:text-5xl">
          {expertise.headingStart} {expertise.headingAccent}
        </p>
      </div>

      <div className="grid gap-10 px-6 py-20 md:px-16 md:py-28 lg:grid-cols-[1fr_2fr]">
        <h3 className="font-heading text-4xl font-light md:text-5xl">
          {expertise.listTitleStart}{" "}
          <span className="font-script text-[1.5em] leading-none text-accent">
            {expertise.listTitleAccent}
          </span>
        </h3>

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