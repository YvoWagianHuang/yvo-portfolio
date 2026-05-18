"use client";

import { useEffect, useState } from "react";
import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { portfolioData } from "@/data/portfolioData";

i18next.use(initReactI18next).init({
  resources: {
    zh: { translation: portfolioData.locales.zh },
    en: { translation: portfolioData.locales.en },
  },
  lng: "zh",
  fallbackLng: "zh",
  interpolation: { escapeValue: false },
});

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}
