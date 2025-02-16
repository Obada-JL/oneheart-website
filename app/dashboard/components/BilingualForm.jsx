"use client";
import { useState } from "react";

export default function BilingualForm({ onSubmit, initialData = {} }) {
  const [formData, setFormData] = useState({
    title: {
      en: initialData.title?.en || "",
      ar: initialData.title?.ar || "",
    },
    description: {
      en: initialData.description?.en || "",
      ar: initialData.description?.ar || "",
    },
  });

  const handleChange = (lang, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        [lang]: value,
      },
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
      }}
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>Title (English)</label>
            <input
              type="text"
              value={formData.title.en}
              onChange={(e) => handleChange("en", "title", e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label>العنوان (بالعربية)</label>
            <input
              type="text"
              value={formData.title.ar}
              onChange={(e) => handleChange("ar", "title", e.target.value)}
              className="w-full border rounded p-2"
              dir="rtl"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>Description (English)</label>
            <textarea
              value={formData.description.en}
              onChange={(e) =>
                handleChange("en", "description", e.target.value)
              }
              className="w-full border rounded p-2"
              rows={4}
            />
          </div>
          <div>
            <label>الوصف (بالعربية)</label>
            <textarea
              value={formData.description.ar}
              onChange={(e) =>
                handleChange("ar", "description", e.target.value)
              }
              className="w-full border rounded p-2"
              rows={4}
              dir="rtl"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
