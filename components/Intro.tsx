import { intro } from "@/data/content";

export default function Intro() {
  return (
    <section id="about" className="py-20 md:py-28 lg:pl-16">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_30%] lg:gap-20">
        <div className="px-6 lg:max-w-3xl lg:px-0">
          <h2 className="font-heading text-4xl font-light leading-[1.2] md:text-5xl">
            {intro.heading}{" "}
            <span className="font-script text-[1.3em] text-accent">
              {intro.headingAccent}
            </span>
          </h2>
          <div className="mt-14 grid gap-8 text-[15px] md:grid-cols-2 md:gap-10">
            <div>
              <p className="mb-4 text-[11px] uppercase leading-relaxed tracking-[0.2em]">
                {intro.lead}
              </p>
              <p>{intro.paragraphs[0]}</p>
            </div>
            <p className="md:pt-10">{intro.paragraphs[1]}</p>
          </div>
        </div>

        {/* Tall image, bleeds off the right edge */}
        <div className="aspect-[2/3] w-[85%] bg-sand lg:w-full" />
      </div>
    </section>
  );
}