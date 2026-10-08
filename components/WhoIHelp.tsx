import { whoIHelp } from "@/data/content";

export default function WhoIHelp() {
  return (
    <section className="px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1300px]">
        <h2 className="text-center font-heading text-4xl font-light md:text-5xl lg:text-6xl">
          {whoIHelp.headingStart}{" "}
          <em className="text-accent">{whoIHelp.headingAccent}</em>
        </h2>

        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-10">
          {whoIHelp.groups.map((g, i) => (
            <article key={g.title} className="text-center">
              {/* Image placeholder: swapped for a real photo in Part 2 */}
              <div
                className={`mx-auto aspect-[3/4] w-full max-w-sm rounded-t-full ${
                  i === 1 ? "bg-accent/30" : "bg-sand"
                }`}
              />
              <h3 className="mt-8 font-heading text-3xl font-light">
                {g.title}
              </h3>
              <p className="mx-auto mt-4 max-w-sm">{g.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}