import { useState, useCallback, useEffect } from "react";

export type Lang = "en" | "tr";

export function useLanguage() {
  const [lang, setLangState] = useState<Lang>("en");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("lang");
      if (stored === "en" || stored === "tr") {
        // Reading from external store on mount — legitimate effect usage
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLangState(stored);
      }
    } catch {
      // localStorage unavailable
    }
    setHydrated(true);
  }, []);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    try {
      localStorage.setItem("lang", newLang);
    } catch {
      // localStorage unavailable, state still updates
    }
  }, []);

  const t = useCallback(
    (text: { en: string; tr: string }) => text[lang],
    [lang]
  );

  return { lang, setLang, t, hydrated };
}
