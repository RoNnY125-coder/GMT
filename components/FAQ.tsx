import { faqs } from "@/data/content";

export default function FAQ() {
  return (
    <section id="faqs" className="bg-sand/40 px-6 py-20 md:px-16 md:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <h2 className="font-heading text-4xl font-light leading-[1.15] md:text-5xl">
          {faqs.heading}{" "}
          <span className="block font-script text-[1.5em] leading-none text-accent">
            {faqs.headingAccent}
          </span>
        </h2>

        <div>
          {faqs.items.map((item) => (
            <details key={item.q} className="group border-b border-ink/15 py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between font-heading text-2xl font-light [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="ml-6 text-3xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-[15px]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}