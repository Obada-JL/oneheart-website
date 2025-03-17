"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations/translations";

export default function CounterSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const [counters, setCounters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounters = async () => {
      try {
        const response = await axios.get(
          "https://oneheart.team/api/counter"
        );
        setCounters(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch counters:", err);
        setLoading(false);
      }
    };

    fetchCounters();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }
  console.log("counter", language);
  return (
    <div
      className="container-fluid my-10"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="flex text-center justify-center mb-8">
        <h1 className="mainHeaders px-4">{t.ourAchievements}</h1>
      </div>
      <div className="px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {counters.map((counter) => (
            <div key={counter._id} className="text-center p-4">
              <div className="counter-icon mb-4">
                <img
                  src={`http://localhost:3500/uploads/counterImages/${counter.counterImage}`}
                  alt={
                    language === "ar"
                      ? counter.counterTitleAr
                      : counter.counterTitle
                  }
                  className="mx-auto h-16 w-16 object-contain"
                />
              </div>
              <div className="counter-number text-3xl font-bold text-primary mb-2">
                {counter.counterNumber}
              </div>
              <div className="counter-title text-lg">
                {language === "ar"
                  ? counter.counterTitleAr
                  : counter.counterTitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
