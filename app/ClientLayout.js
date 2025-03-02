"use client";
import { useEffect } from "react";

export function ClientLayoutWrapper({ children }) {
  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    if (savedLanguage) {
      document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";
    }
  }, []);

  return (
    <div
      className="vsc-initialized overflow-visible"
      style={{ overflow: "visible !important" }}
    >
      {children}
    </div>
  );
}
