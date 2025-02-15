"use client";
import CompletedProjects from "../Components/ProjectsPage/CompletedProjects";
import CurrentProjects from "../Components/ProjectsPage/CurrentProjects";
import NeedsSupportProjects from "../Components/ProjectsPage/NeedsSupportProjects";
import { useState } from "react";

const categories = ["All", "Food", "Health", "Water", "Rapid Response"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="mb-8">
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
        <NeedsSupportProjects selectedCategory={selectedCategory} />
        <CurrentProjects selectedCategory={selectedCategory} />
        <CompletedProjects selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}
