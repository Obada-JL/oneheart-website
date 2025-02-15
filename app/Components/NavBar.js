"use client";
import { useState } from "react";
import EnLogo from "../../public/OneHeart team logo  EN PNG.png";
import langIcon from "../../public/language-icon.png";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const navLinks = [
    { href: "/", label: t.home },
    { href: "/projects", label: t.projects },
    { href: "/campagins", label: t.campaigns },
    { href: "/sponsorship", label: t.sponsorship },
    { href: "/documentations", label: t.documentations },
    { href: "/about", label: t.aboutUs },
    { href: "/contact", label: t.contactUs },
  ];

  return (
    <nav className="relative bg-white shadow-sm">
      <div className="flex items-center justify-between w-full p-4">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <a href="/">
            <img src={EnLogo.src} alt="Logo" className="h-12 w-auto" />
          </a>
          {/* Mobile Language Switcher - Only visible on mobile */}
          <div
            className="lg:hidden flex items-center gap-3 cursor-pointer"
            onClick={toggleLanguage}
          >
            <span>{t.language}</span>
            <hr className="h-6 w-0.5 bg-black" />
            <img src={langIcon.src} alt="Language" className="w-6 h-6" />
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${
                router === link.href ? "active" : ""
              } hover:text-gray-600 transition-colors`}
            >
              <div>{link.label}</div>
            </a>
          ))}
        </div>

        {/* Desktop Language Switcher - Only visible on desktop */}
        <div
          className="hidden lg:flex items-center gap-3 cursor-pointer me-5"
          onClick={toggleLanguage}
        >
          <h5 className="flex items-center justify-center">{t.language}</h5>
          <hr className="h-[30px] w-[2px] bg-black" />
          <img src={langIcon.src} width={25} alt="Language" />
        </div>

        {/* Mobile Navigation - Remove language switcher from dropdown */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50`}
        >
          <div className="px-4 py-3 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${
                  router === link.href ? "active" : ""
                } block hover:text-gray-600 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
