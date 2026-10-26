"use client";

import * as React from "react";
import Image from "next/image";
import { Monitor, Smartphone } from "lucide-react";
import { GlassSurface } from "@/components/ui/glass-surface";
import { PlayIcon, PauseIcon } from "@/components/ui/play-pause-icon";
import { useLang } from "@/lib/i18n";
import type { Work } from "@/data/works";
import { cn } from "@/lib/utils";

export function WorkCard({ work }: { work: Work }) {
  const { lang } = useLang();
  const [device, setDevice] = React.useState<"pc" | "mobile">("mobile");
  // Click feedback only: the icon flashes briefly on click, not on hover.
  const [flash, setFlash] = React.useState<"play" | "pause" | null>(null);
  const flashTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    return () => {
      if (flashTimer.current) clearTimeout(flashTimer.current);
    };
  }, []);

  const hasToggle = "pc" in work.media;
  const media = "pc" in work.media ? work.media[device] : work.media;
  const isVideo = media.type === "video";

  // letter-spacing in em resolves against each element's own font-size,
  // so the -3% tracking must be set per text node, not inherited from a
  // shared ancestor (which would resolve against the ancestor's size).
  const tracking = lang === "ko" ? "tracking-[-0.03em]" : "tracking-[0.01em]";
  // Korean body text stays Pretendard 400; English (Forma DJR Display) is
  // 500. The title is always 500 (Pretendard Medium in Korean, Forma
  // Medium in English) regardless of language.
  const weight = lang === "ko" ? "font-normal" : "font-medium";
  const titleWeight = "font-medium";
  // Both languages run a flat 16px / 130% line-height.
  const size = "text-[16px] leading-[1.3]";

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setFlash("play");
    } else {
      video.pause();
      setFlash("pause");
    }
    if (flashTimer.current) clearTimeout(flashTimer.current);
    flashTimer.current = setTimeout(() => setFlash(null), 600);
  };

  return (
    // No fixed aspect-ratio on the card itself: height follows content
    // (caption grows when text wraps), and height="stretch" (the grid's
    // default align-items) matches every card to the tallest one in its row.
    <article className="relative flex h-full w-full flex-col overflow-hidden rounded-[32px] border border-[#3C3C43]/20 bg-white">
      <div
        className={cn(
          "relative w-full shrink-0 overflow-hidden bg-muted",
          isVideo && "cursor-pointer",
        )}
        style={{ aspectRatio: "608 / 456" }}
        onClick={isVideo ? togglePlayback : undefined}
      >
        {isVideo ? (
          // key forces a remount on src change (e.g. PC/Mobile toggle),
          // since React won't reload an existing <video> for a new src.
          <video
            key={media.src}
            ref={videoRef}
            src={media.src}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 size-full object-cover"
          />
        ) : (
          <Image
            src={media.src}
            alt={work.title[lang]}
            fill
            sizes="(min-width: 1024px) 608px, 100vw"
            className="object-cover"
          />
        )}

        {isVideo && (
          <div
            className={cn(
              "pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-200",
              flash ? "opacity-100" : "opacity-0",
            )}
          >
            {flash === "pause" ? (
              <PauseIcon className="size-14 sm:size-16" />
            ) : (
              <PlayIcon className="size-14 sm:size-16" />
            )}
          </div>
        )}

        {hasToggle && (
          <div className="absolute right-4 top-4 flex items-center gap-2 sm:right-6 sm:top-6">
            {(
              [
                { key: "pc" as const, icon: Monitor, label: "PC" },
                { key: "mobile" as const, icon: Smartphone, label: "Mobile" },
              ]
            ).map(({ key, icon: Icon, label }) => (
              <button
                key={key}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setDevice(key);
                }}
                aria-pressed={device === key}
                aria-label={label}
                className={cn(
                  "group relative flex size-9 shrink-0 items-center justify-center rounded-full transition-opacity sm:size-11",
                  device === key ? "opacity-100" : "opacity-50",
                )}
              >
                <GlassSurface className="rounded-full" />
                <Icon className="relative size-4 text-black" strokeWidth={2} />
              </button>
            ))}
          </div>
        )}
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col justify-center gap-2 bg-[#f2f2f7] px-5 py-4 sm:gap-[11px] sm:px-8 sm:py-6",
          lang === "ko" && "font-pretendard",
        )}
      >
        <div className="flex flex-col gap-1 sm:gap-[10px]">
          <div className="flex flex-wrap items-baseline gap-1">
            <p className={cn("text-black", tracking, size, titleWeight)}>
              {work.title[lang]}
            </p>
            <p className={cn("shrink-0 text-black/60", tracking, size, weight)}>
              {work.date}
              {work.team && " (Team)"}
            </p>
          </div>
          <p className={cn("text-black/60", tracking, size, weight)}>
            {work.description[lang]}
          </p>
        </div>
        <p className={cn("text-[13px] leading-[1.3] text-[#08f] sm:text-[16px]", tracking, weight)}>
          {work.tags[lang].join(" ")}
        </p>
      </div>
    </article>
  );
}
