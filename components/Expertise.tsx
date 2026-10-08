import { expertise } from "@/data/content";

export default function Expertise() {
  return (
    <section className="bg-ink px-6 py-20 text-cream md:px-12 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="mx-auto max-w-4xl text-center font-heading text-4xl font-light leading-[1.15] md:text-5xl lg:text-6xl">
          {expertise.headingStart}{" "}
          <em className="text-accent">{expertise.headingAccent}</em>
        </h2>

        <h3 className="mt-20 text-center font-heading text-2xl font-light md:text-3xl">
          {expertise.listTitleStart}{" "}
          <em className="text-accent">{expertise.listTitleAccent}</em>
        </h3>

        <ul className="mx-auto mt-10 grid max-w-3xl md:grid-cols-2 md:gap-x-16">
          {expertise.items.map((item) => (
            <li
              key={item}
              className="border-b border-sand/25 py-4 text-center font-heading text-2xl italic text-sand md:text-3xl"
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center font-heading text-2xl italic text-accent">
          {expertise.closing}
        </p>
      </div>
    </section>
  );
}