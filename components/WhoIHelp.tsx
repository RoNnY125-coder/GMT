import Photo from "@/components/Photo";
import { whoIHelp } from "@/data/content";

export default function WhoIHelp() {
  return (
    <section className="bg-cream px-6 py-20 md:px-16 md:py-28">
      <h2 className="font-heading text-4xl font-light md:text-5xl">
        {whoIHelp.headingStart}{" "}
        <span className="font-script text-[1.5em] leading-none text-accent">
          {whoIHelp.headingAccent}
        </span>
      </h2>

      <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-6 lg:ml-[17%]">
        {whoIHelp.groups.map((g) => (
          <article key={g.title}>
            <Photo
              src={g.image}
              alt={g.alt}
              sizes="(min-width: 768px) 28vw, 90vw"
              className="aspect-[7/8] w-full"
            />
            <h3 className="mt-8 font-heading text-2xl font-light">{g.title}</h3>
            <p className="mt-4 text-[14px]">{g.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}