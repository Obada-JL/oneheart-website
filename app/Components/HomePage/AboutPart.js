"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations/translations";
import { useCounters } from "../../hooks/useCounters";
import axios from "axios";

export default function AboutPart() {
  const { language } = useLanguage();
  const t = translations[language];
  const { counters, loading } = useCounters();
  const [aboutDesc, setAboutDesc] = useState("");

  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const response = await axios.get(
          "https://oneheart.team/api/about-us"
        );
        console.log("About us response:", response.data);
        setAboutDesc(response.data[0].aboutUs.description[language]);
      } catch (error) {
        console.error("Error fetching about us:", error);
        setAboutDesc(t.aboutDesc); // Fallback to translation
      }
    };

    fetchAboutUs();
  }, [language]);

  return (
    <div className="container-fluid">
      <div className="flex flex-col items-center justify-center my-5 md:my-10">
        <div className="mb-5">
          <h1 className="mainHeaders text-center px-4">{t.aboutUs}</h1>
        </div>
        <div className="flex justify-center px-4">
          <div className="text-center w-full md:w-7/12 leading-7 md:leading-8">
            {aboutDesc}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-5 md:my-10">
        <div className="mb-5">
          <h1 className="mainHeaders text-center px-4">
            {t.ourImpactTogether}
          </h1>
        </div>
        <div className="flex justify-center flex-wrap wrap w-full px-4">
          {/* grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 w-full px-4 */}
          {!loading &&
            counters.map((counter, index) => (
              <div key={counter._id || index} className="counterContainer">
                <div className="flex justify-center items-center gap-3 mb-3 ps-5 pe-5">
                  <img
                    src={`http://localhost:3500/uploads/counterImages/${counter.counterImage}`}
                    alt={counter.counterTitle}
                    width={35}
                  />
                  <div className="text-xl font-semibold">
                    <CountUp
                      end={parseInt(counter.counterNumber)}
                      duration={2.5}
                      enableScrollSpy
                      separator=","
                    />
                  </div>
                </div>
                <hr className="counterLine" />
                <div className="text-xl font-semibold text-center mt-2">
                  {counter.counterTitle}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
