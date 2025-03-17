"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import CurrentProjects from "../Components/ProjectsPage/CurrentProjects";
import CompletedProjects from "../Components/ProjectsPage/CompletedProjects";
import NeedsSupportProjects from "../Components/ProjectsPage/NeedsSupportProjects";
import { getUniqueCategories } from "../utils/categoryHelpers";

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const [current, completed, support] = await Promise.all([
          fetch("https://oneheart.team/api/current-projects").then(res => res.json()),
          fetch("https://oneheart.team/api/completed-projects").then(res => res.json()),
          fetch("https://oneheart.team/api/support-projects").then(res => res.json())
        ]);

        const allProjects = [...current, ...completed, ...support];
        const uniqueCategories = getUniqueCategories(allProjects);
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProjects();
  }, []);

  if (loading) {
    return <div>{language === 'ar' ? 'جاري التحميل...' : 'Loading...'}</div>;
  }

  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className={`flex ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'} justify-center gap-4 pt-3 mb-8 flex-wrap`}dir="ltr">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`py-2  text-black ${
            selectedCategory === "All" ? "" : ""
          }`}
        >
          {language === 'ar' ? 'الكل' : 'All'}
        </button>
        {categories.map((category,index) => (
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

      <NeedsSupportProjects selectedCategory={selectedCategory} />
      <CurrentProjects selectedCategory={selectedCategory} />
      <CompletedProjects selectedCategory={selectedCategory} />
    </div>
  );
}
