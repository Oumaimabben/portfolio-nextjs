"use client";

import { createContext, useContext, useState, useEffect } from "react";
import en from "@/translations/en";
import fr from "@/translations/fr";

type Lang = "en" | "fr";

const translations = { en, fr };

const LanguageContext = createContext<any>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang;
    if (saved) setLang(saved);
  }, []);

  const changeLanguage = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang: changeLanguage,
        t: translations[lang]
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);