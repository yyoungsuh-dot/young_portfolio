"use client";

import { works } from "@/data/works";
import { WorkCard } from "@/components/work-card";
import { Reveal } from "@/components/ui/reveal";
import { useLang } from "@/lib/i18n";

const COPY = { ko: "Works", en: "Works" } as const;

export function WorksSection() {
  const { lang } = useLang();

  return (
    <section id="works" className="w-full bg-[#f2f2f7]">
      <div className="mx-auto w-full max-w-[1440px] px-10 py-28">
        <div className="mx-auto max-w-[1240px]">
          <Reveal>
            <h2 className="mb-[72px] text-[40px] font-medium leading-[0.9] tracking-normal text-foreground">
              {COPY[lang]}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
            {works.map((work) => (
              <Reveal key={work.id}>
                <WorkCard work={work} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
