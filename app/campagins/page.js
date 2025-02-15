"use client";
import CompletedCampagins from "../Components/CampaginsPage/CompletedCampagins";
import CurrentCampagins from "../Components/CampaginsPage/CurrentCampagins";
import NeedSupportCampagins from "../Components/CampaginsPage/NeedSupportCampagins";
import { useState } from "react";

const categories = ["All", "Medical", "Orphans", "Humanitarian"];

export default function CampaginsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="flex flex-nowrap gap-4 px-4 py-5 min-w-max lg:justify-center">
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
      </div>

      <div className="space-y-8">
        <div className="container mx-auto px-4">
          <NeedSupportCampagins selectedCategory={selectedCategory} />
        </div>
        <div className="container mx-auto px-4">
          <CurrentCampagins selectedCategory={selectedCategory} />
        </div>
        <div className="container mx-auto px-4">
          <CompletedCampagins selectedCategory={selectedCategory} />
        </div>
      </div>
    </div>
  );
}
