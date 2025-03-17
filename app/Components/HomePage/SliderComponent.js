"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations/translations";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import donateVector from "../../../public/donate-vector.svg";
import donateVectorWhite from "../../../public/donate-vector-white.svg";
import { useEffect, useState } from "react";
import PaymentMethodModal from "../PaymentMethodModal";

export default function SliderComponent() {
  const { language } = useLanguage();
  const t = translations[language];
  const [slides, setSlides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);


  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const response = await fetch(
          "https://oneheart.team/api/image-slider"
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
  const handleDonateClick = (item) => {
    setSelectedItem(item);
    setShowPaymentModal(true);
  };
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
                backgroundImage: `url(https://oneheart.team/uploads/sliderImages/${slide.sliderImage})`,
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
                    <button
                      onClick={() => handleDonateClick(slide)}
                      className="donation-button flex btn bg-white gap-3 rounded-xl p-3 ps-4 pe-4 group hover:bg-[#47a896] transition-all duration-200"
                    >
                      <img
                        src={donateVector.src}
                        width={22}
                        className="w-5 h-5 md:w-6 md:h-6 block group-hover:hidden"
                        alt="donate"
                      />
                      <img
                        src={donateVectorWhite.src}
                        className="w-5 h-5 md:w-6 md:h-6 hidden group-hover:block"
                        alt="donate-white"
                      />
                      <div className="font-bold flex items-center text-[#47a896] group-hover:text-white">
                        {language === "ar" ? "تبرع سريع" : "Quick donation"}
                      </div>
                    </button>
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
      <PaymentMethodModal 
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        selectedItem={selectedItem}
        itemType="campagin"
      />
    </div>
  );
}
