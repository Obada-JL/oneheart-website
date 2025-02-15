"use client";
import { Swiper, SwiperSlide } from "swiper/react";
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
  const cards = [
    {
      id: 1,
      title: "Food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam glrt...",
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Health",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam glrt...",
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Water",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam glrt...",
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Sponsorships",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam glrt...",
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Sponsorships",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam glrt...",
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "Sponsorships",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam glrt...",
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      title: "Sponsorships",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam glrt...",
      imgSrc: "https://via.placeholder.com/150",
    },
  ];
  return (
    <div className="container-fluid my-10">
      <div className="flex text-center justify-center mb-8">
        <h1 className="mainHeaders px-4">{t.ourPrograms}</h1>
      </div>
      <div className="px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          //   pagination={{ clickable: true }}
          // autoplay={{ delay: 3000 }}
          // loop={true}
          spaceBetween={20} // Adjust spacing between slides
          slidesPerView={1} // Show 1 slide at a time (can be adjusted)
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="w-full"
          //   style={{ width: "75vw" }}
        >
          {cards.map((card) => (
            <SwiperSlide
              key={card.id}
              className="p-4 "
              //   style={{ width: "250px" }}
            >
              <div className="rounded-2xl shadow-md  bg-white">
                <div>
                  <img
                    src={Slider1.src}
                    alt={card.title}
                    className=" rounded-2xl programsImage"
                  />
                </div>
                <div className="p-4 text-center programsDescription">
                  <div className="text-2xl font-semibold donation-button">
                    {card.title}
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    {card.description}
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
