"use client";
import Image from "next/image";
import EnLogo from "../../public/OneHeart team logo  EN PNG.png";
import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [loading, setLoading] = useState(true);

  // Simulate loading
  setTimeout(() => setLoading(false), 2000);

  return (
    <LanguageContext.Provider value={{ loading }}>
      {loading ? <LoadingScreen /> : children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="relative w-32 h-32 mb-4 animate-bounce">
        <Image
          src={EnLogo}
          alt="Loading..."
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="loading-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
