"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import donateVector from "../../../public/donate-vector.svg";
import { useEffect, useState } from "react";

export default function SliderComponent() {
  const [slides, setSlides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const response = await fetch(
          "http://145.223.33.75:3500/api/image-slider"
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
    return <div>Loading...</div>;
  }

  return (
    <div className="slider">
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
                backgroundImage: `url(http://145.223.33.75:3500/uploads/sliderImages/${slide.sliderImage})`,
              }}
            >
              <div className="overlayDiv" />
              <div
                className="slider-content"
                style={{ position: "relative", zIndex: 1 }}
              >
                <h2 className="text-start slider-title">{slide.sliderTitle}</h2>
                <p className="text-start">{slide.sliderDescription}</p>
                <div className="buttons flex gap-16 mt-5">
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
                      Quick donation
                    </div>
                  </Link>
                  <Link
                    href={slide.detailsLink}
                    className="details-link flex items-center gap-2 group"
                  >
                    <div className="mb-1 group-hover:text-primary">Details</div>
                    <div className="flex items-end font-bold text-2xl group-hover:text-primary">
                      &#62;
                    </div>
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
