"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { BASE_URL } from "@/utils/config";

export default function GeneralFieldsContent() {
  const { language } = useLanguage();
  const [fields, setFields] = useState([]);

  useEffect(() => {
    const fetchFields = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/general-fields`);
        const data = await response.json();
        setFields(Array.isArray(data) ? data : [data]);
      } catch (error) {
        console.error("Error fetching general fields:", error);
        setFields([]);
      }
    };

    fetchFields();
  }, []);

  if (fields.length === 0) {
    return <div>Loading general fields...</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fields.map((field, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">
              {language === "en" ? field.title?.en : field.title?.ar}
            </h3>
            <p className="text-gray-600">
              {language === "en" ? field.description?.en : field.description?.ar}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
} 