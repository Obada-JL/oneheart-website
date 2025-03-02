"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations/translations";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import donateVector from "../../../public/donate-vector.svg";
import { useEffect, useState } from "react";

export default function SliderComponent() {
  const { language } = useLanguage();
  const t = translations[language];
  const [slides, setSlides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const response = await fetch(
          "http://localhost:3500/api/image-slider"
        );

        const data = await response.json();
        console.log(data);
        setSlides(data);
      } catch (error) {
        console.error("Error fetching slider data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSliders();
  }, []);

  if (isLoading) {
    return <div>{language === 'ar' ? 'جاري التحميل...' : 'Loading...'}</div>;
  }
  return (
    <div className="slider" dir={language === "ar" ? "ltr" : "ltr"}>
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="h-full"
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        style={{
          "--swiper-pagination-bullet-width": "12px",
          "--swiper-pagination-bullet-height": "12px",
          "--swiper-pagination-bullet-inactive-color":
            "rgba(255, 255, 255, 0.7)",
          "--swiper-pagination-color": "#ffffff",
          "--swiper-pagination-bullet-active-width": "30px",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id || index}>
            <div
              className="slide"
              style={{
                backgroundImage: `url(http://localhost:3500/uploads/sliderImages/${slide.sliderImage})`,
              }}
            >
              <div className="overlayDiv" />
              <div
                className="slider-content"
                style={{ position: "relative", zIndex: 1 }}
              >
                <h2
                  className={`text-${
                    language === "ar" ? "end" : "start"
                  } slider-title`}
                >
                  {language === "ar" ? slide.sliderTitleAr : slide.sliderTitle}
                </h2>
                <p className={`text-${language === "ar" ? "end" : "start"}`}>
                  {language === "ar"
                    ? slide.sliderDescriptionAr
                    : slide.sliderDescription}
                </p>
                <div
                  className={`buttons flex gap-16 mt-5 ${
                    language === "ar" ? "justify-end" : "justify-start"
                  }`}
                >
                  <Link
                    href={slide.donationsLink}
                    className="donation-button flex btn bg-white gap-3 rounded-xl p-3 ps-4 pe-4 group"
                  >
                    <img
                      src={donateVector.src}
                      width={22}
                      className="group-hover:brightness-0 group-hover:invert"
                    />
                    <div className="font-bold flex items-center group-hover:text-white">
                      {language === "ar" ? "تبرع سريع" : "Quick donation"}
                    </div>
                  </Link>
                  <Link
                    href={slide.detailsLink}
                    className="details-link flex items-center gap-2 group"
                  >
                    {language === "ar" ? (
                      <>
                        <div className="flex items-end font-bold text-2xl group-hover:text-primary">
                          &#60;
                        </div>
                        <div className="mb-1 group-hover:text-primary">
                          التفاصيل
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="mb-1 group-hover:text-primary">
                          Details
                        </div>
                        <div className="flex items-end font-bold text-2xl group-hover:text-primary">
                          &#62;
                        </div>
                      </>
                    )}
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
