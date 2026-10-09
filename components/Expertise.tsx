import { expertise } from "@/data/content";

export default function Expertise() {
  return (
    <section>
      {/* Photo band placeholder: real image in Part 2 */}
      <div className="h-56 w-full bg-ink/70 md:h-[230px]" />

      <div className="px-6 py-20 md:py-28">
        <ul className="mx-auto grid max-w-3xl md:grid-cols-2 md:gap-x-12">
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