"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { BASE_URL } from "@/utils/config";

export default function AboutSection() {
  const { language } = useLanguage();
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/about-us`);
        const data = await response.json();
        setAboutData(Array.isArray(data) ? data[0] : data);
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    fetchAboutData();
  }, []);

  if (!aboutData) {
    return <div>Loading about section...</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          {language === "en" ? aboutData.title?.en : aboutData.title?.ar}
        </h2>
        <div className="prose max-w-none">
          {language === "en" ? aboutData.description?.en : aboutData.description?.ar}
        </div>
      </div>
    </div>
  );
} 