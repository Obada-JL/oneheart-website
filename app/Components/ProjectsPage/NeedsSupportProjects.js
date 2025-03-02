"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import donateVector from "../../../public/donate-vector.svg";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations/translations";
import { useEffect, useState } from "react";

export default function NeedsSupportProjects({ selectedCategory }) {
  const { language } = useLanguage();
  const t = translations[language];
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "http://localhost:3500/api/support-projects"
        );
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const getLocalizedContent = (field, arField) => {
    if (!field && !arField) return '';
    return language === 'en' ? field : arField;
  };

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" || 
      getLocalizedContent(project.category, project.categoryAr) === selectedCategory
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid px-4 py-6 lg:py-8">
      <div className="flex text-start mb-4 lg:mb-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl">
          {t.needsYourSupport}
        </h1>
      </div>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            540: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="w-full"
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        >
          {filteredProjects.map((project) => (
            <SwiperSlide key={project._id} className="p-2 md:p-4">
              <div className="rounded-2xl shadow-md bg-white h-full h-[500px]">
                <div className="aspect-w-16 aspect-h-9 h-[350px]">
                  <img
                    src={`http://localhost:3500/uploads/support-projects/${project.image}`}
                    alt={getLocalizedContent(project.title, project.titleAr)}
                    className="rounded-t-2xl w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="text-lg md:text-xl lg:text-2xl font-semibold donation-button">
                    {getLocalizedContent(project.title, project.titleAr)}
                  </div>
                  <div className="text-sm text-gray-600 mt-2 line-clamp-3">
                    {getLocalizedContent(project.description, project.descriptionAr)}
                  </div>
                  <div className="mt-4">
                    <button className="flex items-center justify-center gap-2 donation-button categorysDonation mx-auto">
                      <img
                        src={donateVector.src}
                        className="w-5 h-5 md:w-6 md:h-6"
                      />
                      <span className="font-medium text-sm md:text-base">
                        {t.quickDonation}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
