import { cn } from "@/lib/utils";

/**
 * iOS-style "Liquid Glass" surface: backdrop blur + saturation boost,
 * layered with the fill/tint/hairline values pulled from the Figma Code
 * Connect source for Tab Bar / Button Group, a top specular highlight
 * for the glass-edge catch-light, and an internal-glow layer that lights
 * up on press when the surface sits inside an interactive element with
 * className="group" (per Apple's Liquid Glass guidance: the material
 * "illuminates from within" under a fingertip rather than just darkening).
 *
 * `scrolled` intensifies the shadow — Liquid Glass surfaces are meant to
 * lift further off the page once content is moving underneath them.
 */
export function GlassSurface({
  className,
  scrolled = false,
}: {
  className?: string;
  scrolled?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={cn("absolute inset-0 rounded-[inherit] transition-shadow duration-300", className)}
      style={{
        backdropFilter: "blur(14px) saturate(1.6)",
        WebkitBackdropFilter: "blur(14px) saturate(1.6)",
        boxShadow: scrolled
          ? "1.25px 0px 0px -0.75px #d0d0d0, -1.25px 0px 0px -0.75px #d0d0d0, 0px 0px 0px 0.5px #e8e8e8, 0px 12px 28px 0px rgba(0,0,0,0.16), inset 0px 1px 1px 0px rgba(255,255,255,0.8), inset 0px -1px 1px 0px rgba(0,0,0,0.06)"
          : "1.25px 0px 0px -0.75px #d0d0d0, -1.25px 0px 0px -0.75px #d0d0d0, 0px 0px 0px 0.5px #e8e8e8, 0px 8px 20px 0px rgba(0,0,0,0.08), inset 0px 1px 1px 0px rgba(255,255,255,0.8), inset 0px -1px 1px 0px rgba(0,0,0,0.04)",
      }}
    >
      {/* fill/tint: a single light wash, just enough to stay legible on
          white while still letting saturated backdrops (photos, colored
          cards) read clearly through the blur */}
      <div className="absolute inset-0 rounded-[inherit] bg-white/35" />
      {/* specular highlight: bright catch-light along the top edge */}
      <div
        className="absolute inset-0 rounded-[inherit] mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 45%)",
        }}
      />
      {/* internal glow: lights up from within on press */}
      <div
        className="absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-active:opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0) 75%)",
        }}
      />
    </div>
  );
}
