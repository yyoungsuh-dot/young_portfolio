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
        className="h-[760px] w-full bg-white sm:h-[640px]"
      >
        <div className="relative z-10 flex h-full flex-col items-center py-16 text-center">
          <Reveal className="px-6">
            <h1 className="text-balance text-4xl font-medium leading-[0.9] tracking-normal text-foreground sm:text-5xl">
              I design
              <br />
              for lovable experiences
            </h1>
          </Reveal>
        </div>
        {/* Positioned at a fixed offset from the carousel (not flex-bottom-pinned
            like the title), so the gap above the body text stays constant no
            matter how many lines it wraps to at a given breakpoint. */}
        <Reveal
          delay={0.1}
          className="absolute inset-x-0 top-[612px] z-10 mx-auto max-w-[380px] px-6 text-center sm:top-[526px] sm:max-w-[630px]"
        >
          <p className="text-balance text-sm font-medium leading-[1.2] tracking-[0.01em] text-black">
            I&rsquo;m Young, a web/app UX/UI designer based in Seoul. I design
            highly interactive interfaces rooted in motion, precision, and a
            sense of touch. I research, prototype, and blend design to build
            memorable and lovable web and app experiences.
          </p>
        </Reveal>
      </TiltedGridHero>
    </section>
  );
}
