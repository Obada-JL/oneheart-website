"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Sponsorships from "../SponsorshipPage/Sponsorships";
import axios from "axios";
import { getUniqueCategories } from "../utils/categoryHelpers";

export default function SponsorshipPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSponshorships = async () => {
      try {
        const response = await axios.get("http://localhost:3500/api/sponsorships");
        const sponsorships = response.data;
        const uniqueCategories = getUniqueCategories(sponsorships);
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSponshorships();
  }, []);

  if (loading) {
    return <div>{language === 'ar' ? 'جاري التحميل...' : 'Loading...'}</div>;
  }

  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className={`flex ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'} justify-center gap-4 pt-3 mb-8 flex-wrap`} dir="ltr">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`py-2 text-black ${
            selectedCategory === "All" ? "" : ""
          }`}
        >
          {language === 'ar' ? 'الكل' : 'All'}
        </button>
        {categories.map((category, index) => (
          <div
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`cursor-pointer flex items-center whitespace-nowrap ${
              selectedCategory === category ? "donation-button" : ""
            }`}
          >
            {category}
            {index < categories.length - 1 && (
              <hr
                className={`h-6 w-px ${
                  selectedCategory === category
                    ? "bg-[#47a896]"
                    : "bg-gray-400"
                } ml-3`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Sponsorships Content */}
      <div className="container mx-auto px-4">
        <Sponsorships selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}
