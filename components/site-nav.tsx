"use client";

import * as React from "react";
import { GlassSurface } from "@/components/ui/glass-surface";
import { useLang } from "@/lib/i18n";

const COPY = {
  ko: { about: "About", works: "Works", contact: "Contact", switch: "EN" },
  en: { about: "About", works: "Works", contact: "Contact", switch: "KO" },
} as const;

const CONTACT_EMAIL = "yyoungsuh@gmail.com";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SiteNav() {
  const { lang, toggle } = useLang();
  const copy = COPY[lang];

  // Liquid Glass should lift further off the page (deeper shadow) once
  // content is scrolling underneath it, per Apple's scroll-edge guidance.
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-6 z-50 flex justify-center">
      {/* Mirrors the content container (1440px outer + px-10, 1240px inner)
          so the nav's edges line up with the page content at every width. */}
      <div className="w-full max-w-[1440px] px-10">
        <nav
          className="relative mx-auto flex w-full max-w-[1240px] items-center justify-between gap-3 rounded-full px-4 py-2.5 sm:px-6 sm:py-3"
          aria-label="Primary"
        >
          <GlassSurface className="rounded-full" scrolled={scrolled} />
          <div className="relative flex min-w-0 items-center gap-3 whitespace-nowrap text-black sm:gap-12">
            <span className="shrink-0 text-[16px] font-medium tracking-[0.01em] sm:text-[20px]">
              Young
            </span>
            <button
              type="button"
              onClick={() => scrollToId("hero")}
              className="text-[14px] font-medium tracking-[0.01em] text-black/80 transition-colors hover:text-black sm:text-[16px]"
            >
              {copy.about}
            </button>
            <button
              type="button"
              onClick={() => scrollToId("works")}
              className="text-[14px] font-medium tracking-[0.01em] text-black/80 transition-colors hover:text-black sm:text-[16px]"
            >
              {copy.works}
            </button>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[14px] font-medium tracking-[0.01em] text-black/80 transition-colors hover:text-black sm:text-[16px]"
            >
              {copy.contact}
            </a>
          </div>
          <button
            type="button"
            onClick={toggle}
            className="relative flex shrink-0 items-center justify-center rounded-full border border-black px-2.5 py-1 text-[14px] font-medium tracking-[0.01em] text-black transition-colors hover:bg-black hover:text-white sm:px-3 sm:text-[16px]"
            aria-label="Switch language"
          >
            {copy.switch}
          </button>
        </nav>
      </div>
    </header>
  );
}
