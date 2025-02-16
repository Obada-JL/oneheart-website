"use client";
import { createContext, useContext, useState, useEffect } from "react";
import LoadingScreen from "../app/Components/LoadingScreen";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Initialize with a loading state
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState(() => {
    // Try to get saved language, default to browser language or 'en'
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("preferredLanguage");
      if (saved) return saved;

      // Check browser language
      const browserLang = navigator.language.split("-")[0];
      return browserLang === "ar" ? "ar" : "en";
    }
    return "en";
  });

  useEffect(() => {
    const initLanguage = async () => {
      if (typeof window !== "undefined") {
        const savedLanguage = localStorage.getItem("preferredLanguage");
        if (savedLanguage) {
          setLanguage(savedLanguage);
          document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";
        }
        // Add a minimum delay to prevent flash
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoading(false);
      }
    };

    initLanguage();
  }, []);

  useEffect(() => {
    // Update settings when language changes
    if (typeof window !== "undefined" && !isLoading) {
      localStorage.setItem("preferredLanguage", language);
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    }
  }, [language, isLoading]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  // Show loading state or render children
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
