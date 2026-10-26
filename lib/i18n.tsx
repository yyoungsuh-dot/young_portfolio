"use client";

import * as React from "react";

export type Lang = "ko" | "en";

type LangContextValue = {
  lang: Lang;
  toggle: () => void;
};

const LangContext = React.createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = React.useState<Lang>("ko");
  const toggle = React.useCallback(() => {
    setLang((prev) => (prev === "ko" ? "en" : "ko"));
  }, []);
  const value = React.useMemo(() => ({ lang, toggle }), [lang, toggle]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = React.useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

export function t<T extends Record<Lang, unknown>>(dict: T, lang: Lang): T[Lang] {
  return dict[lang];
}
