"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { BASE_URL } from "@/utils/config";
import PageTransition from "@/components/PageTransition";

export default function Documentations() {
  const { language } = useLanguage();
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/documentations`);
        const data = await response.json();
        setDocs(data);
      } catch (error) {
        console.error("Error fetching documentations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocs();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <PageTransition>
      <div className="flex justify-center items-center bg-gray-100">
        <div className="relative flex flex-col items-center">
          <div className="absolute w-1 border-l-2 min-h-screen border-dashed border-gray-800 h-full left-1/2 transform -translate-x-1/2"></div>
          <div className="flex flex-col items-center pt-12 w-[90vw]">
            {docs.map((doc, index) => (
              <div
                key={doc._id}
                className={`flex ${
                  index % 2 === 0
                    ? "justify-start translate-x-1/2"
                    : "flex-row-reverse justify-start -translate-x-1/2"
                } mb-8 w-1/2 relative transform`}
              >
                {index % 2 === 0 && (
                  <div className="absolute top-4 left-0 -translate-x-1/2">
                    <div className="w-8 h-8 bg-[#47a896] me-1 rounded-full"></div>
                  </div>
                )}
                <div className="relative w-[240px] rounded-bl-full border-b-2 my-auto border-dashed border-gray-800 h-1"></div>
                <div className="relative w-6 left-0 flex items-start justify-start">
                  <div
                    className={`absolute ${
                      index % 2 === 0 ? "right-1/2" : "left-1/2"
                    } w-6 h-6 border-r-2 border-b-2 top-1/2 border-gray-800 transform -translate-x-[50%-10px] -translate-y-[12px] rotate-[${
                      index % 2 === 0 ? "-45" : "135"
                    }deg]`}
                  ></div>
                </div>
                <div className="p-4 rounded-lg w-[420px] text-left relative">
                  <h2 className="text-lg font-semibold flex items-center">
                    <span className="text-yellow-500 text-2xl mr-2">|</span>
                    {doc.title[language]}
                  </h2>
                  <p className="text-gray-600 text-sm mt-2">
                    {doc.description[language]}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mt-4 relative">
                    {doc.images.slice(0, 2).map((img, i) => (
                      <img
                        key={i}
                        src={`${BASE_URL}/uploads/documentations/${img}`}
                        width={210}
                        className="rounded-lg z-[5]"
                        alt={`Documentation image ${i + 1}`}
                      />
                    ))}
                    <div className="col-span-2 h-[150px] relative object-cover">
                      {doc.images[2] && (
                        <img
                          src={`${BASE_URL}/uploads/documentations/${doc.images[2]}`}
                          width={420}
                          className="rounded-lg object-cover h-full z-[5] relative"
                          alt="Main documentation image"
                        />
                      )}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="absolute md:order-none z-5 transform -translate-y-1/2 text-white md:translate-y-0 w-20 h-20 bg-[#47a896] flex items-center justify-center rounded-full shadow-md border"
                          style={{ top: "-50px", zIndex: "5" }}
                        >
                          <p className="text-center font-semibold text-sm text-white">
                            {doc.title.split(" ").slice(0, 2).join(" ")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <a
                      href={doc.detailsLink}
                      // target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 right-0 relative bg-[#47a896] w-1/3 text-white py-2 rounded-lg text-sm font-semibold hover:bg-green-600 text-center"
                    >
                      View All
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
