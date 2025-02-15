"use client";
import { useLanguage } from "../context/LanguageContext";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function LayoutContent({ children, almaraiClass }) {
  const { language } = useLanguage();

  return (
    <body
      className={`${almaraiClass} antialiased `}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <NavBar />
      <main>{children}</main>
      <Footer />
    </body>
  );
}
