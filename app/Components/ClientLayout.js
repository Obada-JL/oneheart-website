"use client";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useLanguage } from "../context/LanguageContext";
import { useEffect } from "react";

export default function ClientLayout({ children, almaraiClass }) {
  const { language } = useLanguage();

  useEffect(() => {
    // Set direction and ensure scrolling works
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  return (
    <body className={`${almaraiClass} antialiased ps-0`}>
      <div className="flex min-h-screen flex-col">
        <NavBar />
        <main className="flex-1 overflow-visible">{children}</main>
        <Footer />
      </div>
    </body>
  );
}
