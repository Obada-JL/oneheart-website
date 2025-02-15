"use client";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import donateVector from "../../../public/donate-vector.svg";
import Slider1 from "../../../public/sliderImage1.jpg";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations/translations";

export default function DonatePart() {
  const { language } = useLanguage();
  const t = translations[language];

  const cards = [
    {
      id: 1,
      title: "Essential Food Basket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam glrt...",
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Essential Food Basket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam glrt...",
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Essential Food Basket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam glrt...",
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Essential Food Basket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam glrt...",
      imgSrc: "https://via.placeholder.com/150",
    },
  ];
  return (
    <div className="mt-3 px-4">
      <div className="flex text-center justify-center mb-5">
        <h1 className="mainHeaders text-2xl md:text-3xl">{t.donateTitle}</h1>
      </div>

      {/* Categories Container */}
      <div className="flex justify-center mt-8 mb-10 px-4 overflow-x-auto">
        <div className="categorysContainer flex-wrap md:flex-nowrap min-w-[300px] w-full md:w-auto">
          <div className="category ButtonActive w-full md:w-auto mb-2 md:mb-0">
            {t.projects}
          </div>
          <div className="category w-full md:w-auto mb-2 md:mb-0">
            {t.campaigns}
          </div>
          <div className="category w-full md:w-auto mb-2 md:mb-0">
            {t.sponsorship}
          </div>
          <div className="category w-full md:w-auto">{t.Situations}</div>
        </div>
      </div>

      {/* Cards Container */}
      <div className="fieldsShadow bg-gray-50 py-8 px-4 w-full md:w-[90%] lg:w-[80%] mx-auto mb-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          // pagination={{ clickable: true }}
          // autoplay={{ delay: 3000 }}
          // loop={true}
          spaceBetween={20} // Adjust spacing between slides
          slidesPerView={4} // Show 1 slide at a time (can be adjusted)
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="w-full"
          style={{ width: "75vw" }}
        >
          {cards.map((card) => (
            <SwiperSlide
              key={card.id}
              className="p-4 "
              style={{ width: "350px" }}
            >
              <div className="rounded-2xl shadow-md w-350 bg-white">
                <div>
                  <img
                    src={Slider1.src}
                    alt={card.title}
                    className="w-350 rounded-t-2xl"
                  />
                </div>
                <div className="p-4 categorysDescription">
                  <div className="text-xl font-semibold title">
                    {card.title}
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    {card.description}
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-2 donation-button categorysDonation">
                      <img src={donateVector.src} className="w-6 h-6" />
                      <span className=" font-medium">{t.donate}</span>
                    </div>
                    <div className=" font-medium cursor-pointer gap-2 flex items-center">
                      {t.details} <span className="text-xl">&gt;</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            className="allButton border-green-600 px-6 py-2"
          >
            {t.viewAll}
          </Button>
        </div>
      </div>
    </div>
  );
}
