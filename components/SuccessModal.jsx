import React, { useEffect, useRef } from "react";
import checkIcon from "../public/badge-check.svg";
import { useLanguage } from "../app/context/LanguageContext";
import { translations } from "../app/translations/translations";


export default function SuccessModal({ isOpen, onClose,  }) {
  const modalRef = useRef();
  
  // Dictionary for translations
  const { language } = useLanguage();
  const t = translations[language];
  
  const getLocalizedContent = (field, arField) => {
    if (!field && !arField) return '';
    return language === 'ar' ? arField : field;
  };
  // Get translations based on language prop, fallback to English if language not available

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Auto-close modal after 5 seconds
  useEffect(() => {
    let timer;
    if (isOpen) {
      timer = setTimeout(() => {
        onClose();
      }, 3000); // 5 seconds
    }
    
    return () => {
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm
                 animate-[fadeIn_0.3s_ease-in-out]"
    >
      <div
        ref={modalRef}
        className="bg-white w-1/2 rounded-lg shadow-xl mx-4 p-2
                   animate-[slideIn_0.3s_ease-in-out]"
      >
        <div className="text-center relative">
          <div className="absolute top-2 left-4 grid grid-cols-3 gap-2 mt-3">
            {Array(21)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: " #47A89661" }}
                ></div>
              ))}
          </div>
          <div className="absolute bottom-2 right-4 transform -rotate-45 grid grid-cols-3 gap-2">
            {Array(21)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: " #47A89661" }}
                ></div>
              ))}
          </div>
          <div className="animate-[scaleIn_0.3s_ease-in-out]">
            <img
              src={checkIcon.src}
              width={50}
              height={50}
              className="mx-auto animate-[bounceIn_0.5s_ease-in-out]"
            />
          </div>
          <h3
            className="mt-4 text-xl font-semibold text-gray-900
                         animate-[slideUp_0.3s_ease-in-out_0.1s]"
          >
           {t.successTitle}
          </h3>
          <p
            className="mt-2 text-gray-600
                       animate-[slideUp_0.3s_ease-in-out_0.2s]"
          >
            {t.successMessage}
          </p>
        </div>
      </div>
    </div>
  );
}
