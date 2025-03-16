"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import Heart from "../../public/heart.svg";
import { BASE_URL } from "@/utils/config";

export default function AboutSection() {
  const { language } = useLanguage();
  const [aboutData, setAboutData] = useState(null);
  const t = translations[language];

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/about-us`);
        const data = await response.json();
        // Get the first item if it's an array
        const aboutInfo = Array.isArray(data) ? data[0] : data;
        setAboutData(aboutInfo);
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <div className="flex items-center justify-center me-12 max-md:flex-col">
      <div
        className="flex items-center justify-center gap-8 max-md:flex-col"
        style={{ width: "80vw" }}
      >
        <div className="md:relative ms-12" style={{ width: "500px" }}>
          <div
            className="absolute bottom-12 right-2 z-5"
            style={{ zIndex: "10" }}
          >
            <img src={Heart.src} width={30} />
          </div>
          {/* Center Circle with Text */}
          <div
            className="absolute md:order-none z-5 max-md:top[calc(50%+45px)] transform -translate-y-1/2 md:translate-y-0 w-24 h-24 bg-yellow-500 flex items-center justify-center rounded-full shadow-md border"
            style={{
              left: "calc(50% - 45px)",
              top: "calc(50% - 45px)",
              zIndex: "5",
            }}
          >
            <p className="text-center font-bold text-black">
              {language === 'ar' ? 'فريق قلب واحد' : 'One Heart Team'}
            </p>
          </div>
          <div className="relative flex flex-row items-center justify-center gap-6 p-6 bg-white"dir="ltr">
            {/* Images from API */}
            {aboutData?.aboutUs?.photos?.map((photo, index) => (
              <div
                key={index}
                className={`relative w-64 h-80 ${
                  index === 0 ? "mb-12" : "mt-12"
                } rounded-xl overflow-hidden shadow-lg border z-2`}
                style={{ zIndex: "2" }}
              >
                <img
                  src={`${BASE_URL}/uploads/aboutUs/${photo}`}
                  alt={`About us image ${index + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}

            {/* Decorative Dots */}
            <div className="absolute top-2 left-4 grid grid-cols-3 gap-1">
              {[...Array(9)].map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 bg-teal-400 rounded-full"
                ></span>
              ))}
            </div>

            <div
              className="absolute grid grid-cols-3 bottom-1 left-1/2 gap-1"
              style={{ zIndex: "0" }}
            >
              {[...Array(9)].map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 bg-teal-400 rounded-full"
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="" style={{ width: "450px" }}>
          <div className="text-2xl flex text-xl gap-1 items-center font-semibold relative z-10">
            <span className="text-yellow-500 font-bold text-3xl">|</span>
            <div>{t.aboutUs}</div>
          </div>
          <div>
            {aboutData?.aboutUs?.description?.[language] || (language === 'ar' ? 'جاري التحميل...' : 'Loading...')}
          </div>
        </div>
      </div>
    </div>
  );
}
