import { whoIHelp } from "@/data/content";

export default function WhoIHelp() {
  return (
    <section className="bg-white px-6 py-20 md:px-16 md:py-28">
      <h2 className="font-heading text-4xl font-light md:text-5xl">
        {whoIHelp.headingStart}{" "}
        <span className="font-script text-[1.4em] text-accent">
          {whoIHelp.headingAccent}
        </span>
      </h2>

      <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-6 lg:ml-[17%]">
        {whoIHelp.groups.map((g, i) => (
          <article key={g.title}>
            {/* Image placeholder: real photo in Part 2 */}
            <div className={`aspect-[7/8] w-full ${i === 1 ? "bg-accent/30" : "bg-sand"}`} />
            <h3 className="mt-8 font-heading text-2xl font-light">{g.title}</h3>
            <p className="mt-4 text-[14px]">{g.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}