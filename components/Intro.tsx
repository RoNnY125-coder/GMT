import { intro } from "@/data/content";

export default function Intro() {
  return (
    <section id="about" className="bg-sand/40 px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        {/* Heading + lead */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-4xl font-light leading-[1.15] md:text-5xl lg:text-6xl">
            {intro.heading}{" "}
            <em className="text-accent">{intro.headingAccent}</em>
          </h2>
          <p className="mt-8 font-heading text-xl italic md:text-2xl">
            {intro.lead}
          </p>
        </div>

        {/* Image + text */}
        <div className="mt-16 grid items-center gap-10 md:mt-20 md:grid-cols-2 md:gap-16">
          <div className="aspect-[4/5] rounded-t-full bg-accent/30" />
          <div className="space-y-6 text-lg">
            {intro.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}