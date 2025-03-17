"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Slider1 from "../../../public/sliderImage1.jpg";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations/translations";

export default function Programs() {
  const { language } = useLanguage();
  const t = translations[language];
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get(
          "https://oneheart.team/api/programs"
        );
        setPrograms(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch programs:", err);
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  if (loading) {
    return <div className="text-center py-10">{language === 'ar' ? 'جاري التحميل...' : 'Loading...'}</div>;
  }

  return (
    <div className="container-fluid my-10">
      <div className="flex text-center justify-center mb-8">
        <h1 className="mainHeaders px-4">{t.ourPrograms}</h1>
      </div>
      <div className="px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          spaceBetween={20} // Adjust spacing between slides
          slidesPerView={1} // Show 1 slide at a time (can be adjusted)
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {programs.map((program) => (
            <SwiperSlide key={program._id} className="p-4">
              <div className="rounded-2xl shadow-md bg-white">
                <div>
                  <img
                    src={`http://localhost:3500/uploads/programs/${program.image}`}
                    alt={language === "ar" ? program.titleAr : program.title}
                    className="rounded-2xl programsImage"
                  />
                </div>
                <div className="p-4 text-center programsDescription">
                  <div className="text-2xl font-semibold donation-button">
                    {language === "ar" ? program.titleAr : program.title}
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                  {language === "ar" ? program.descriptionAr : program.description}
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
