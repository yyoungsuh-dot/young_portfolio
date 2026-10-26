"use client";

import { TiltedGridHero } from "@/components/ui/tilted-grid-hero";
import { Reveal } from "@/components/ui/reveal";

const IMAGES = [
  { src: "/images/Frame 2147230488.png", alt: "" },
  { src: "/images/Frame 2147230489.png", alt: "" },
  { src: "/images/Frame 2147230492.png", alt: "" },
  { src: "/images/Frame 2147230493.png", alt: "" },
];

export function HeroSection() {
  return (
    <section id="hero" className="w-full bg-white pt-28">
      <TiltedGridHero
        images={IMAGES}
        aspectRatio={4 / 3}
        className="h-[640px] w-full bg-white"
      >
        <div className="relative z-10 flex h-full flex-col items-center justify-between py-16 text-center">
          <Reveal className="px-6">
            <h1 className="text-balance text-4xl font-medium leading-[0.9] tracking-normal text-foreground sm:text-5xl">
              I design
              <br />
              for lovable experiences
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="max-w-[280px] px-6 sm:max-w-[630px]">
            <p className="text-balance text-sm font-medium leading-[1.2] tracking-[0.01em] text-black">
              I&rsquo;m Young, a web/app UX/UI designer based in Seoul. I design
              highly interactive interfaces rooted in motion, precision, and a
              sense of touch. I research, prototype, and blend design to build
              memorable and lovable web and app-experiences.
            </p>
          </Reveal>
        </div>
      </TiltedGridHero>
    </section>
  );
}
