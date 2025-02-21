"use client";
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext({
  language: "en",
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }) {
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (typeof window === 'undefined') {
    return { language: 'en', toggleLanguage: () => {} };
  }
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
