"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import donateVector from "../../../public/donate-vector.svg";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations/translations";
import Link from "next/link";

export default function DonatePart() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeCategory, setActiveCategory] = useState("projects");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async (category) => {
    setLoading(true);
    try {
      let endpoint;
      switch (category) {
        case "projects":
          endpoint = "current-projects";
          break;
        case "campaigns":
          endpoint = "current-campagins";
          break;
        case "sponsorship":
          endpoint = "sponsorships";
          break;
        case "situations":
          endpoint = "support-campagins";
          break;
        default:
          endpoint = "current-projects";
      }

      const response = await fetch(
        `http://localhost:3500/api/${endpoint}?limit=4`
      );
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching items:", error);
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems(activeCategory);
  }, [activeCategory]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const getViewAllLink = () => {
    switch (activeCategory) {
      case "projects":
        return "/projects";
      case "campaigns":
        return "/campagins";
      case "sponsorship":
        return "/sponsorship";
      // case "situations":
      //   return "/situations";
      default:
        return "/";
    }
  };

  return (
    <div className="mt-3 px-4">
      <div className="flex text-center justify-center mb-5">
        <h1 className="mainHeaders text-2xl md:text-3xl">{t.donateTitle}</h1>
      </div>

      <div className="flex justify-center mt-8 mb-10 px-4 overflow-x-auto">
        <div className="categorysContainer flex-wrap md:flex-nowrap min-w-[300px] w-full md:w-auto">
          {[
            { id: "projects", label: t.projects },
            { id: "campaigns", label: t.campaigns },
            { id: "sponsorship", label: t.sponsorship },
            // { id: "situations", label: t.Situations },
          ].map((category) => (
            <div
              key={category.id}
              className={`category w-full md:w-auto mb-2 md:mb-0 ${
                activeCategory === category.id ? "ButtonActive" : ""
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.label}
            </div>
          ))}
        </div>
      </div>

      <div className="fieldsShadow bg-gray-50 py-8 px-4 w-full md:w-[90%] lg:w-[80%] mx-auto mb-10">
        {loading ? (
          <div className="text-center py-8">Loading...</div>
        ) : (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="w-full"
          >
            {items.map((item) => (
              <SwiperSlide key={item._id} className="p-4">
                <div className="rounded-2xl shadow-md w-350 bg-white">
                  <div>
                    <img
                      src={`http://localhost:3500/uploads/${
                        activeCategory === "projects"
                          ? "current-projects"
                          : activeCategory === "campaigns"
                          ? "current-campaigns"
                          : activeCategory === "sponsorship"
                          ? "sponsorships"
                          : ""
                      }/${
                        activeCategory == "sponsorship"
                          ? item.sponsorshipImage
                          : item.image
                      }`}
                      alt={language === "ar" ? item.titleAr : item.title}
                      className="w-350 rounded-t-2xl aspect-video object-cover"
                    />
                  </div>
                  <div className="p-4 categorysDescription">
                    <div className="text-xl font-semibold title">
                      {language === "ar" ? item.titleAr : item.title}
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      {language === "ar"
                        ? item.descriptionAr
                        : item.description}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center gap-2 donation-button categorysDonation">
                        <img
                          src={donateVector.src}
                          className="w-6 h-6"
                          alt="donate"
                        />
                        <span className="font-medium">{t.donate}</span>
                      </div>
                      <Link
                        href={`/${activeCategory}/${item._id}`}
                        className="font-medium cursor-pointer gap-2 flex items-center"
                      >
                        {t.details} <span className="text-xl">&gt;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <div className="flex justify-center mt-8">
          <Link
            href={
              activeCategory === "projects"
                ? "/projects"
                : activeCategory === "campaigns"
                ? "/campagins"
                : activeCategory === "sponsorship"
                ? "/sponsorship"
                : ""
            }
          >
            <Button
              variant="outline"
              className="allButton border-green-600 px-6 py-2"
            >
              {t.viewAll}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
