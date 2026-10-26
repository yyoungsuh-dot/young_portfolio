import { LanguageProvider } from "@/lib/i18n";
import { SiteNav } from "@/components/site-nav";
import { HeroSection } from "@/components/hero-section";
import { WorksSection } from "@/components/works-section";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="flex min-h-full w-full flex-col bg-background">
        <SiteNav />
        <main className="flex flex-1 flex-col">
          <HeroSection />
          <WorksSection />
        </main>
      </div>
    </LanguageProvider>
  );
}
