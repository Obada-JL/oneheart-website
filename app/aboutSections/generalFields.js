"use client";
import { useEffect, useState } from "react";
import goal from "../../public/goal.svg";
import idea from "../../public/idea.svg";
import commentheart from "../../public/comment-heart.svg";
import heartpartnerhandshake from "../../public/heart-partner-handshake.svg";
import { BASE_URL } from "@/utils/config";
import AnimatedSection from "@/components/AnimatedSection";

export default function GeneralFields() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/about-us`);
        const data = await response.json();
        // Get the first item if it's an array
        const aboutInfo = Array.isArray(data) ? data[0] : data;
        setAboutData(aboutInfo);
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    fetchAboutData();
  }, []);

  const renderSection = (title, icon, content, align = "left", delay = 0) => (
    <AnimatedSection
      delay={delay}
      direction={align === "left" ? "left" : "right"}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 bg-gray-50 p-8 rounded-xl shadow-md pb-12">
        {align === "left" ? (
          <>
            <div className="relative bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
              <div
                className="absolute mb-5 p-2 bg-yellow-400 text-black rounded-full flex items-center justify-center"
                style={{ zIndex: "5", top: "-20px", right: "-17px" }}
              >
                <img src={icon.src} width={30} alt={`${title} icon`} />
              </div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-gray-800 flex gap-1 items-center">
                  <span
                    className="font-extrabold text-3xl"
                    style={{ color: "#47a896" }}
                  >
                    |
                  </span>
                  {title}
                </h2>
              </div>
              <p className="mt-3">{content?.description}</p>
            </div>
            <div className="relative w-full md:w-1/3">
              {content?.photo && (
                <img
                  src={`${BASE_URL}/uploads/aboutUs/${content.photo}`}
                  alt={`${title} Image`}
                  className="rounded-lg shadow-lg"
                  style={{
                    width: "500px",
                    height: "350px",
                    objectFit: "cover",
                    zIndex: "5",
                  }}
                />
              )}
            </div>
          </>
        ) : (
          <>
            <div className="relative w-full md:w-1/3">
              {content?.photo && (
                <img
                  src={`${BASE_URL}/uploads/aboutUs/${content.photo}`}
                  alt={`${title} Image`}
                  className="rounded-lg shadow-lg"
                  style={{
                    width: "500px",
                    height: "350px",
                    objectFit: "cover",
                    zIndex: "5",
                  }}
                />
              )}
            </div>
            <div className="relative bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
              <div
                className="absolute mb-5 p-2 bg-yellow-400 text-black rounded-full flex items-center justify-center"
                style={{ zIndex: "5", top: "-20px", right: "-17px" }}
              >
                <img src={icon.src} width={30} alt={`${title} icon`} />
              </div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-gray-800 flex gap-1 items-center">
                  <span
                    className="font-extrabold text-3xl"
                    style={{ color: "#47a896" }}
                  >
                    |
                  </span>
                  {title}
                </h2>
              </div>
              <p className="mt-3">{content?.description}</p>
            </div>
          </>
        )}
      </div>
    </AnimatedSection>
  );

  return (
    <div className="space-y-8">
      {aboutData && (
        <>
          {renderSection("Our Goal", goal, aboutData.goal, "left", 0)}
          {renderSection("Our Vision", idea, aboutData.vision, "right", 0.2)}
          {renderSection(
            "Our Message",
            commentheart,
            aboutData.message,
            "left",
            0.3
          )}
          {renderSection(
            "Our Values",
            heartpartnerhandshake,
            aboutData.values,
            "right",
            0.4
          )}
        </>
      )}
    </div>
  );
}
