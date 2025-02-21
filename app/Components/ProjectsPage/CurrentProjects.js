"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import donateVector from "../../../public/donate-vector.svg";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations/translations";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CurrentProjects({ selectedCategory }) {
  const { language } = useLanguage();
  const t = translations[language];
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "http://145.223.33.75:3500/api/current-projects"
        );
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container-fluid px-4 py-6 lg:py-8">
      <div className="flex text-start mb-4 lg:mb-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl">{t.currentProjects}</h1>
      </div>
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
      >
        {filteredProjects.map((project) => (
          <SwiperSlide key={project._id} className="p-2 md:p-4">
            <div className="rounded-2xl shadow-md bg-white h-full">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={`http://145.223.33.75:3500/uploads/current-projects/${project.image}`}
                  alt={project.title}
                  className="rounded-t-2xl w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <div className="text-lg md:text-xl lg:text-2xl font-semibold donation-button">
                  {project.title}
                </div>
                <div className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {project.description}
                </div>
                <div className="mt-4">
                  <Link
                    href={project.buttonLink}
                    className="flex items-center justify-center gap-2 donation-button categorysDonation mx-auto"
                  >
                    <img
                      src={donateVector.src}
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="font-medium text-sm md:text-base">
                      {t.quickDonation}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
